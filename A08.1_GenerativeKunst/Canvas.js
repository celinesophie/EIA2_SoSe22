"use strict";
var canvasL08;
(function (canvasL08) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        console.log("hallo");
        //get rendering context
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        //backgroundcolor random
        drawBackground();
        //draw many dots
        for (let index = 0; index < 40; index++) {
            let x = Math.random() * 900;
            let y = Math.random() * 600;
            drawDots(x, y);
        }
        //random lines
        for (let index = 0; index <= 10; index++) {
            let x = Math.random() * 8;
            drawLines(x);
        }
        //kreise mit for schleife, gleicher Mittelpunkt
        for (let index = 0; index <= 2; index++) {
            //hsl colors
            let h1 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
            let s1 = Math.floor(Math.random() * 100); //saturation
            let l1 = Math.floor(Math.random() * 70); //luminanz
            let a1 = Math.random(); //durchsichtigkeit
            let radius = Math.random() * 200;
            let color = "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")";
            drawCircle(radius, color);
        }
        //draw curve
        drawCurve();
        //2 Rectangles
        drawRect();
    }
    //FUNKTIONEN
    function drawBackground() {
        // Create a linear gradient
        let gradient = crc2.createLinearGradient(0, 0, 899, 499);
        //gradient stop 1
        let h1 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s1 = Math.floor(Math.random() * 100); //saturation
        let l1 = Math.floor(Math.random() * 70); //luminanz
        let a1 = 1; //durchsichtigkeit
        //gradient stop 2
        let h2 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s2 = Math.floor(Math.random() * 100); //saturation
        let l2 = Math.floor(Math.random() * 70); //luminanz
        //gradient stop 3
        let h3 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s3 = Math.floor(Math.random() * 100); //saturation
        let l3 = Math.floor(Math.random() * 70); //luminanz
        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");
        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 600);
    }
    function drawCircle(_radius, _color) {
        crc2.beginPath();
        crc2.arc(450, 300, _radius, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        //Stroke wegmachen?
        crc2.lineWidth = 0;
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        crc2.closePath();
    }
    function drawRect() {
        //hsl colors
        let h1 = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s1 = Math.floor(Math.random() * 100); //saturation
        let l1 = Math.floor(Math.random() * 70); //luminanz
        let a1 = 1; //durchsichtigkeit
        //random position as variables
        let x = Math.random() * 600;
        let y = Math.random() * 300;
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")";
        crc2.strokeRect(x, y, 250, 180);
        crc2.strokeRect(x + 160, y + 60, 160, 200);
        crc2.strokeRect(x - 300, y - 200, 160, 200);
        crc2.closePath();
    }
    function drawLines(_lineWidth) {
        let x = Math.random() * 900;
        crc2.beginPath();
        crc2.moveTo(x, 0);
        crc2.lineTo(x, 600);
        crc2.strokeStyle = "#23afbf";
        crc2.stroke();
        crc2.lineWidth = _lineWidth;
        crc2.closePath();
    }
    function drawCurve() {
        let x = Math.random() * 100;
        let y = Math.random() * 600;
        crc2.moveTo(0, 300);
        crc2.bezierCurveTo(0, 500, 900, 400, 900, 300);
        crc2.translate(x, y);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
    }
    function drawDots(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
    }
})(canvasL08 || (canvasL08 = {})); //namespace
//# sourceMappingURL=Canvas.js.map