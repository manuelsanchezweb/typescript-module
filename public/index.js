"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
(0, module_1.initCreateModule)();
const button = document.createElement("button");
button.innerText = "Click me";
let i = 1;
button.onclick = () => {
    button.innerText = `Clicked ${i++} times`;
    i++;
};
document.body.appendChild(button);
