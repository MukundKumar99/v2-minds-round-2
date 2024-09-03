import { Component } from "react";
import "./index.css";
import { FaFolderOpen } from "react-icons/fa";

const folderNamesList = [
  { id: 1, name: "Music" },
  { id: 2, name: "Photos" },
  { id: 3, name: "Public" },
  { id: 4, name: "Shared" },
];

class FolderContainer extends Component {
  state = { folderNamesList };

  render() {
    const { folderNamesList } = this.state;
    return (
      <div className="file-folder-bg-container">
        <div className="folder-name-bg-container">
          <div className="folder-name-title">
            <input type="checkbox" />
            File/Folder name
          </div>
        </div>
        <ul className="file-folder-names-list-container">
          {folderNamesList.map((eachItem) => (
            <li className="folder-name" key={eachItem.id}>
              <input type="checkbox" />
              <FaFolderOpen className="folder-icon" /> {eachItem.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderContainer;
