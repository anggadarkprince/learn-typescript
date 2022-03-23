import {ProjectInput} from "./components/project-input.js";
import {ProjectList} from "./components/project-list.js";
import {ProjectStatus} from "./models/project";

new ProjectList(ProjectStatus.Active);
new ProjectList(ProjectStatus.Finished);
new ProjectInput();