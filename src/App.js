// import logo from './logo.svg';
import './App.css';

const App = () => {
  const name = true;
  const isNameShowing = false;

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "someone"}</h1>
      {name? (
      <>test</>
      ) : (
      <><h1>Test</h1><h1>There is no name</h1></>
      )}
    </div>
  );
}

export default App;
