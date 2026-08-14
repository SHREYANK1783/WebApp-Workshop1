type Person = {
    firstName: string;
    lastName: string;
    id: number;
};

function printPerson(person: Person): string {
    return `${person.firstName} ${person.lastName} - ID: ${person.id}`;
}

const person: Person = {
    firstName: "Arun",
    lastName: "Kenjila",
    id: 12
};


// Generics
function printMyData<T>(value: T): T {
    return value;
}

const stringData = printMyData("This is string");
const numberData = printMyData(123456);
const booleanData = printMyData(true);


// var vs let
function printData(): string {
    if (true) {
        let num1 = 12;
        var num2 = 10;

        return `let = ${num1}, var = ${num2}`;
    }

    return "";
}


// Connect TypeScript to HTML
const button = document.getElementById("typescriptButton");
const result = document.getElementById("typescriptResult");

button?.addEventListener("click", () => {

    if (result) {
        result.innerHTML = `
            <h3>Custom Type</h3>
            <p>${printPerson(person)}</p>

            <h3>Generics</h3>
            <p>${stringData}</p>
            <p>${numberData}</p>
            <p>${booleanData}</p>

            <h3>var vs let</h3>
            <p>${printData()}</p>
        `;
    }

});