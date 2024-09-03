import { Component } from "react";
import "./index.css";
import { FaFolderOpen } from "react-icons/fa";

const fileNamesList = [
  { id: 1, name: "/volume1/Music" },
  { id: 2, name: "/volume1/Photos" },
  { id: 3, name: "/volume1/Public" },
  { id: 4, name: "/volume1/Shared" },
];

class FilesContainer extends Component {
  state = { fileNamesList };

  render() {
    const { fileNamesList } = this.state;
    return (
      <div className="file-folder-bg-container">
        <div className="file-backup-bg-container">
          Backup Set Name:{" "}
          <select>
            <option value="Default">Default Backup Set</option>
          </select>
        </div>
        <div className="folder-name-bg-container">
          <div className="folder-name-title">
            <input type="checkbox" />
            File/Folder name
          </div>
        </div>
        <ul className="file-folder-names-list-container">
          {fileNamesList.map((eachItem) => (
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

export default FilesContainer;
