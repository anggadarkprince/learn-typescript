import Component from "./base-component";
import * as Validation from "../utils/validation";
import {AutoBind} from "../decorators/autobind";
import {projectState as ProjectState} from "../states/project-state";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
    }

    protected configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    protected renderContent() {
    }

    private gatherUserInputs(): [string, string, number] | undefined {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;

        const titleValidatable: Validation.Validatable = {
            value: title,
            required: true,
            maxLength: 50
        }
        const descriptionValidatable: Validation.Validatable = {
            value: description,
            required: true,
            minLength: 5
        }
        const peopleValidatable: Validation.Validatable = {
            value: +people,
            required: true,
            min: 1,
            max: 10
        }

        if (!Validation.validate(titleValidatable) || !Validation.validate(descriptionValidatable) || !Validation.validate(peopleValidatable)) {
            alert('Invalid input, please try again!');
            return;
        } else {
            return [
                title,
                description,
                +people
            ];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @AutoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInputs = this.gatherUserInputs();
        if (Array.isArray(userInputs)) {
            const [title, description, people] = userInputs;
            ProjectState.addProject(title, description, people);
            this.clearInputs();
        }
    }
}