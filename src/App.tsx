import Simulator from "./components/Simulator";
import Games from "./components/Games";

function App() {
  return (
    <div className="mx-auto h-screen">
      <form className="grid grid-cols-1 md:grid-cols-6 justify-center mx-auto h-full m-auto">
        <Simulator />
        <Games />
      </form>
    </div>
  );
}

export default App;
