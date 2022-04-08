// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.




/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// We hebben een array gekregen met daarin cijfers.
// De cijfers 8 of hoger moeten gecheckt worden op waarde.
// Als het cijfer 8 of hoger is moet dat opgeslagen worden in een counter.
// Vervolgens loggen we de counter.


// STAPPENPLAN
// 1. Aanmaken van een counter voor alle 8+ grades. [counter]
// 2. Loop door de array met grades voor grades boven de 8.
// 3. Zet de cijfers boven de 8 in [counter].
// 4. Log vervolgens alle cijfers van een 8 of hoger [counter]
// ---- Verwachte uitkomst: 6
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let counter = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
       counter++
    }
}

console.log(counter);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

///STAPPENPLAN
//STAP 1: Maak een array voor [8, 9, 4, 6, 10].
//STAP 2: Schrijf een functie genaamd cumLaude(array)
//STAP 3: De functie moet het aantal cumLaude studenten teruggeven. Hier gebruiken we ons antwoord van 1a voor.
//STAP 4: Log de uitkomst in de terminal.

const array2 = [8, 9, 4, 6, 10]
const array3 = [6, 4, 5]

let counter2 = 0

function cumLaude(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 8) {
            counter2++

        }
    }
    return  console.log(counter2)
}
cumLaude(array2)

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

let totalIndex = 0
let totalValue = 0

for (let i = 0; i < grades.length; i++) {
        totalIndex++;
        totalValue += grades[i];
    }
    let avg = totalValue / totalIndex;
    console.log(avg);




/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
let funcTotal = 0
function averageGrade(array) {
    for (let i = 0; i < array.length; i++) {
        funcTotal = funcTotal += array[i];
    }
    return console.log(Math.round(funcTotal / array.length))
}
averageGrade(grades)
// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

////Uitwerking: Math.round toegepast in regel 108


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
let highestGradeChecker = 0
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGradeChecker) {
        highestGradeChecker = grades[i]
    }
}
console.log(highestGradeChecker)

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
let gradeChecker = 0
const testArr = [0, 0, 2, 3];
function highestGrade(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > gradeChecker) {
            gradeChecker = array[i]
        }
    }
    return console.log(gradeChecker)
}
highestGrade(testArr);