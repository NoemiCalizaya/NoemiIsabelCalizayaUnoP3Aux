"use strict";

const buttonPoll = document.querySelector(".poll");

// SU CODIGO EMPIEZA DESDE AQUI


// 1. Cree un método llamado 'registerNewAnswer' en el objeto 'poll'. El método hace 2
//cosas:
//  1.1. Muestre un prompt para que el usuario ingrese el número de la opción
//seleccionada. El mensaje debería verse así:
//¿Cuál es tu lenguaje de programación favorito?
//0: JavaScript
//1: Python
//2: Kotiln
//3: C ++
//(Escriba el número de la opción que guste)
//  1.2. Según el número de entrada, actualice la propiedad del array ‘answers'. Por
//ejemplo, si la opción es 3, aumente el valor en la posición 3 del array en una
//unidad. Asegúrese de verificar si la entrada es un número y si el número tiene
//sentido (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        let op = 0;
        const opcion = prompt(`${this.question}
        ${this.options[0]}
        ${this.options[1]}
        ${this.options[2]}
        ${this.options[3]}
        (Escriba el número de la opción que guste)
        `, "0, 1, 2 o 3");
        op = opcion === null || opcion === ""?
        alert("Has cancelado o has introducido vacío")
        : opcion;
        if (op == 3) {
            this.answers[3] = 1;
        } else if (op == 0) {
            this.answers[0] = 13;
        } else if (op == 1) {
            this.answers[1] = 2;
        } else if (op == 2) {
            this.answers[2] = 4;
        }
        // 4. Ejecute el método 'displayResults' al final de cada llamada al método
//'registerNewAnswer'.
        return this.displayResults(answers);
        //return this.displayResults("");
    },
    /* 3. Cree un método 'displayResults' que muestre los resultados de la encuesta. El
método toma una cadena como entrada (llamada 'type'), que puede ser ‘string' o
'array'. Si el tipo es 'array', simplemente muestre el array de resultados tal como
está, usando console.log(). Esta debería ser la opción por defecto. Si el tipo es
'string', muestre un mensaje de la siguiente forma: "Los resultados de la encuesta
son 13, 2, 4, 1 respectivamente". */
    displayResults: function (type) {
        switch (typeof(type)) {
            case 'string':
                // 4.
                //console.log(`Los resultados de la encuesta son ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]} respectivamente.`);
                // 5.
                console.log(`Los resultados de la encuesta son ${arr1[0]}, ${arr1[1]}, ${arr1[2]} respectivamente.`);
                console.log(`Los resultados de la encuesta son ${arr2[0]}, ${arr2[1]}, ${arr2[2]}, ${arr2[3]}, ${arr2[4]}, ${arr2[5]} respectivamente.`);
                break;
            default:
                console.log(type);
        }
    },
};
// ---------------------------------------------------------------------------------
/* 2. Llame a este método siempre que el usuario haga clic en el botón "Answer poll"
(este elemento ya esta seleccionado en el archivo ‘script.js’ con el nombre de
‘buttonPoll’, por lo tanto ya no tiene que preocuparse por seleccionarlo,
simplemente uselo ). */
buttonPoll.addEventListener("click", () => {
  poll.registerNewAnswer();
});

// ----------------------------------------------------------------------------------
// 3.
const {answers} = poll;
for (let i = 0; i < answers.length; i++) {
    if (answers[0] === 0) {
        answers[0] = 13;
    } else if (answers[1] === 0) {
        answers[1] = 2;
    } else if (answers[2] === 0) {
        answers[2] = 4;
    } else if (answers[3] === 0) {
        answers[3] = 1;
    }
}

//poll.displayResults(answers);
//poll.displayResults("");
// ----------------------------------------------------------------------------------
// 5. Use el método 'displayResults' para mostrar las 2 matrices que se muestran al
//final. Haga la prueba tanto con la opción 'array' como ‘string’. No pongas los arrays
//en el objeto ‘poll’. Entonces, ¿cómo debería verse ‘this’ en este caso?

const arr1 = [5, 2, 3]
const arr2 = [1, 5, 3, 9, 6, 1]

poll.displayResults(arr1);
poll.displayResults(arr2);
poll.displayResults("");

// No se utiliza this en este caso ya que las variables declaradas como array estan fuera del
// objeto

