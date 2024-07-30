import { useState } from "react";

const FolderStructure = ({ handleInsertFolder, explore }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  //   console.log(explore);

  const handleClick = (e, isFolder) => {
    e.stopPropagation();

    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const addOnFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertFolder(explore.id, e.target.value, showInput.isFolder);
      setShowInput({
        visible: false,
        isFolder: false,
      });
    }
  };
  if (explore.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span> 📁 {explore.name}</span>

          <div>
            <button onClick={(e) => handleClick(e, true)}>Folder+</button>
            <button onClick={(e) => handleClick(e, false)}>File+</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📃"}</span>
              <input
                type="text"
                onKeyDown={addOnFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          )}
          {explore.items.map((exp, index) => {
            return (
              <FolderStructure
                key={index}
                handleInsertFolder={handleInsertFolder}
                explore={exp}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <span className="file">📃{explore.name}</span>;
  }
};

export default FolderStructure;
