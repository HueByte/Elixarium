import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const STAR_COUNT = 200;

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const opacities = new Float32Array(STAR_COUNT);
    const speeds = new Float32Array(STAR_COUNT * 3);
    const twinklePhases = new Float32Array(STAR_COUNT);
    const twinkleSpeeds = new Float32Array(STAR_COUNT);
    const baseOpacities = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2 - 1;

      sizes[i] = 0.5 + Math.random() * 1.5;
      baseOpacities[i] = 0.1 + Math.random() * 0.6;
      opacities[i] = baseOpacities[i];

      const angle = Math.random() * Math.PI * 2;
      const spd = 0.0002 + Math.random() * 0.001;
      speeds[i * 3] = Math.cos(angle) * spd;
      speeds[i * 3 + 1] = Math.sin(angle) * spd;
      speeds[i * 3 + 2] = 0;

      twinklePhases[i] = Math.random() * Math.PI * 2;
      twinkleSpeeds[i] = 0.3 + Math.random() * 0.7;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float aSize;
        attribute float aOpacity;
        varying float vOpacity;
        void main() {
          vOpacity = aOpacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vOpacity;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, dist) * vOpacity;
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const posAttr = geometry.getAttribute('position');
      const opAttr = geometry.getAttribute('aOpacity');

      for (let i = 0; i < STAR_COUNT; i++) {
        let x = posAttr.getX(i) + speeds[i * 3];
        let y = posAttr.getY(i) + speeds[i * 3 + 1];

        if (x > 2.2) x = -2.2;
        if (x < -2.2) x = 2.2;
        if (y > 1.7) y = -1.7;
        if (y < -1.7) y = 1.7;

        posAttr.setX(i, x);
        posAttr.setY(i, y);

        const twinkle = Math.sin(elapsed * twinkleSpeeds[i] + twinklePhases[i]);
        const flash = Math.sin(elapsed * 0.15 + twinklePhases[i]) > 0.97 ? 1.0 : 0.0;
        opAttr.setX(i, baseOpacities[i] + twinkle * 0.15 + flash * 0.3);
      }

      posAttr.needsUpdate = true;
      opAttr.needsUpdate = true;
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
