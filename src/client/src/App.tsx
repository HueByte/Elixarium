import StarField from './components/StarField';
import Book from './components/Book';
import './App.css';

export default function App() {
  return (
    <>
      <StarField />
      <div className="mobile-notice">
        <div className="mobile-notice-title">The Elixir Codex</div>
        <div className="mobile-notice-ornament">{'\u2726 \u2727 \u2726'}</div>
        <div className="mobile-notice-text">
          This tome refuses to be read on a device this small.
          <br />
          <em>Seek a wider screen, traveller.</em>
        </div>
      </div>
      <div className="book-wrapper">
        <Book />
      </div>
    </>
  );
}
