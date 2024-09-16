import logo from './logo.svg';
import './App.css';
export {divide, searchInset} from './leetcode.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
        {divide(10,3)}
        {searchInset([1,3,5,6], 5)}
        </body>
      </header>
    </div>
  );
}

export default App;
