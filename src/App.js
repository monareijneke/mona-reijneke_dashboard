import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { students, isPending, error } = useFetch("test.csv");

  return (
    <div className="App-header">
      <div>
        {Error && <div>{error}</div>}
        {isPending && <div>Fetching data....</div>}
        {students && <div>Welkom!!</div>}
      </div>
    </div>
  );
}

export default App;
