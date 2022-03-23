///  <reference path="base-component.ts" />

namespace App {
    export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
        private project: Project;

        constructor(hostId: string, project: Project) {
            super('single-project', hostId, false, project.id);
            this.project = project;

            this.configure();
            this.renderContent();
        }

        get persons() {
            return this.project.people + ' ' + (this.project.people > 1 ? 'persons' : 'person') + ' assigned'
        }

        protected configure() {
            this.element.addEventListener('dragstart', this.dragStartHandler);
            this.element.addEventListener('dragend', this.dragEndHandler);
        }

        protected renderContent() {
            this.element.querySelector('h2')!.textContent = this.project.title;
            this.element.querySelector('h3')!.textContent = this.persons;
            this.element.querySelector('p')!.textContent = this.project.description;
        }

        @AutoBind
        dragEndHandler(_event: DragEvent): void {
            console.log('DragEnd');
        }

        @AutoBind
        dragStartHandler(event: DragEvent): void {
            event.dataTransfer!.setData('text/plain', this.project.id);
            event.dataTransfer!.effectAllowed = 'move';
        }
    }
}