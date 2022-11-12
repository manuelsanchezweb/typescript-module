import { initCreateModule } from "./module";

initCreateModule();

const button = document.createElement("button");
button.innerText = "Click me";

let i = 1;
button.onclick = () => {
  button.innerText = `Clicked ${i++} times`;
  i++;
};

document.body.appendChild(button);
