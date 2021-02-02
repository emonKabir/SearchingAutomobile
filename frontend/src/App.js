import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
      </div>
    </div>
  );
}

export default App;
