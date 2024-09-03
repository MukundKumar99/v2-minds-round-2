import Navbar from "./components/Navbar";
import "./App.css";
import FolderContainer from "./components/FolderContainer";
import FilesContainer from "./components/FilesContainer";

function App() {
  return (
    <>
      <Navbar />
      <FolderContainer />
      <FilesContainer />
    </>
  );
}

export default App;
