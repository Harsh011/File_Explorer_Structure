import "./App.css";
import { useState } from "react";
import FolderStructure from "./components/FolerStucture";
import ExploerData from "./data/ExplorerData";
import useTraverTree from "./Hooks/use-Traverse-Tree";

function App() {
  const [explorerData, setExplorerData] = useState(ExploerData);

  // console.log(explorerData);

  const { insertNode } = useTraverTree();

  const handleInsertFolder = (folderId, item, isFolder) => {
    const finalNode = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalNode);
  };
  return (
    <>
      <FolderStructure
        handleInsertFolder={handleInsertFolder}
        explore={explorerData}
      />
    </>
  );
}

export default App;
