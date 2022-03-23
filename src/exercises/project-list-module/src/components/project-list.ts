///  <reference path="base-component.ts" />
///  <reference path="../decorators/autobind.ts" />
///  <reference path="../states/project-state.ts" />
///  <reference path="../models/drag-drop.ts" />
///  <reference path="../models/project.ts" />

namespace App {
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
        assignedProjects: Project[];

        constructor(private type: ProjectStatus) {
            super('project-list', 'app', false, `${type}-projects`);
            this.assignedProjects = [];

            this.configure();
            this.renderContent();
        }

        @AutoBind
        dragOverHandler(event: DragEvent): void {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul')!;
                listEl.classList.add('droppable');
            }
        }

        @AutoBind
        dropHandler(event: DragEvent): void {
            const projectId = event.dataTransfer!.getData('text/plain');
            projectState.moveProject(projectId, this.type);
        }

        @AutoBind
        dragLeaveHandler(_event: DragEvent): void {
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.remove('droppable');
        }

        protected configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);

            projectState.addListener((projects: Project[]) => {
                this.assignedProjects = projects.filter(project => project.status === this.type);
                this.renderProjects();
            });
        }

        protected renderContent() {
            this.element.querySelector('ul')!.id = `${this.type}-project-list`;
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
        }

        private renderProjects() {
            const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement;
            listEl.innerHTML = '';
            for (const projectItem of this.assignedProjects) {
                new ProjectItem(this.element.querySelector('ul')!.id, projectItem);
            }
        }
    }
}