import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Properties from "./components/Properties";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Canvas />
        <Properties />
      </div>
    </div>
  );
}

export default App;
