import Formbuild from "./formbuild";
import DataCreator from "./dataCreator";
import Footer from "./footer";
import "./dataCreator.css"
import { useMyProvider, withMyContext } from "./data";

function App() {
  const { showHTML, handleGenerateStr, } = useMyProvider();
  return (
    <div className="App">
      <div className="align-center color">
        <h2>
          HTML CODE STRUCTURE BUILDER
        </h2>
      </div>
      <DataCreator />
      <button className="p-10 border-none cursor-pointer" onClick={handleGenerateStr}>{showHTML ? "Hide" : "Generate"} HTML Structure</button>
      {showHTML &&  <Formbuild />}
      <Footer />
    </div>
  );
}

export default withMyContext(App);
