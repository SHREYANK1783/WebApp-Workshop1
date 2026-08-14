"use strict";
function printPerson(person) {
    return `${person.firstName} ${person.lastName} - ID: ${person.id}`;
}
const person = {
    firstName: "Arun",
    lastName: "Kenjila",
    id: 12
};
// Generics
function printMyData(value) {
    return value;
}
const stringData = printMyData("This is string");
const numberData = printMyData(123456);
const booleanData = printMyData(true);
// var vs let
function printData() {
    if (true) {
        let num1 = 12;
        var num2 = 10;
        return `let = ${num1}, var = ${num2}`;
    }
    return "";
}
// Connect TypeScript to HTML
function showTypeScriptData() {
    const result = document.getElementById("typescriptResult");
    if (result) {
        result.innerHTML = `
            <h3>Custom Type - Person</h3>
            <p>${printPerson(person)}</p>

            <h3>Generics</h3>
            <p>${stringData}</p>
            <p>${numberData}</p>
            <p>${booleanData}</p>

            <h3>var vs let</h3>
            <p>${printData()}</p>
        `;
    }
}
// Button connection
const button = document.getElementById("typescriptButton");
if (button) {
    button.addEventListener("click", showTypeScriptData);
}
