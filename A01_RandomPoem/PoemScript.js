"use strict";
var MeinGedicht;
(function (MeinGedicht) {
    //arrays mit strings
    let subjekte = ["Mario", "Luigi", "Peach", "Bowser", "Toad", "Daisy"];
    let prädikate = ["rettet", "liebt", "besiegt", "sieht", "benutzt", "entführt"];
    let objekte = ["das Power-Up", "die Prinzessin", "den Feind", "das Königreich", "die Brüder", "Gumba"];
    // console.log(subjekte, prädikate, objekte);
    //forschleife gibt strings aus
    for (let index = 6; index > 0; index--) {
        // console.log(index);
        getVerse(subjekte, prädikate, objekte);
    }
    //funktion generiert gedicht
    function getVerse(_subjekte, _prädikate, _objekte) {
        //nimmt neuen Vers auf
        let neuerVers = "";
        //SUBJEKTE
        //zufallszahl erzeugen und mit länge des subjekt arrays multiplizieren. Ergebnis einer Variablen zuweisen
        //math.random --> random Zahl von Länge des Array (welches immer kleiner wird)
        let ergebnis1 = Math.floor(Math.random() * subjekte.length);
        //splice(index, howMany) --> an welcher Stelle des Arrays wie viel abgeschnitten wird
        neuerVers += _subjekte.splice(ergebnis1, 1) + " ";
        //PRÄDIKATE
        let ergebnis2 = Math.floor(Math.random() * prädikate.length);
        neuerVers += _prädikate.splice(ergebnis2, 1) + " ";
        //OBJEKTE
        let ergebnis3 = Math.floor(Math.random() * objekte.length);
        neuerVers += _objekte.splice(ergebnis3, 1) + " ";
        //FERTIGER VERS
        console.log(neuerVers);
        return neuerVers;
    }
})(MeinGedicht || (MeinGedicht = {})); //ende namespace
//# sourceMappingURL=PoemScript.js.map