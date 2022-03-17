const paragraph = document.getElementsByName('p')! as NodeListOf<HTMLElement>; // without exclamation mark ! when it returns null will error
const input = document.getElementById('#input') as HTMLInputElement;
if (input) {
    (input as HTMLInputElement).value = 'Hello'
}