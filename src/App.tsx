import Canvas from "./components/Canvas";
import Properties from "./components/Properties";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="bg-pink-400 flex-none w-80">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-max min-h-max">
          <Canvas />
        </div>
        <div className="bg-purple-400 flex-none w-80">
          <Properties />
        </div>
      </div>
    </>
  );
}

export default App;
