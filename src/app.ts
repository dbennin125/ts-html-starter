const domInput: HTMLInputElement = document.querySelector("input");
const spanElement: Element = document.getElementById("span");

export const createHTMLText = () => {
   spanElement.textContent = domInput.value;
};
