///  <reference path="models/drag-drop.ts" />
///  <reference path="models/project.ts" />
///  <reference path="states/project-state.ts" />
///  <reference path="utils/validation.ts" />
///  <reference path="decorators/autobind.ts" />
///  <reference path="components/project-list.ts" />
///  <reference path="components/project-input.ts" />

namespace App {
    new ProjectList(ProjectStatus.Active);
    new ProjectList(ProjectStatus.Finished);
    new ProjectInput();
}