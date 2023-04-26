// Erste Aufgabe mit Repeat gelöst

let gallery = document.getElementById("gallery");
let figure = "<figure>Figure</figure>";

gallery.innerHTML = figure.repeat(3);



// Zweite Aufgabe

document.getElementById("info").innerHTML="<h1>Hello World</h1>" + "<h2>How are you?</h2>";

// Dritte Aufgabe

document.getElementById("container").innerHTML = "<p>Start of the element</p>";
document.write("end of the element");

// Vierte Aufgabe 1_2 fn

function intro2(paramName) {
    varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
}

intro2("Mirza");

// Fünfte Aufgaben 1_3 fn

function intro3 (name, stadt, alter) {
console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}

intro3 ("Mirza", "Hamburg", 26);



// Sechste Aufgaben 1_5 

function math(arg1, arg2) {
console.log("Multiplikation: ", arg1 * arg2);
console.log("Divison: ", arg1 / arg2);
}

math (10,2);
math (30,2);
math (100, 100);
math (5, 0);
math (45, 173);
math (1, 1000);