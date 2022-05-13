"use strict";
var strand802;
(function (strand802) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        //get rendering context
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        //DRAW OBJECTS
        drawBackground();
        drawSun();
        drawBoat(800, 250);
        drawPalm(100, 300);
        //Urlauberi at the Beach
        for (let index = 0; index < 3; index++) {
            let x = Math.floor(Math.random() * (1160 - 60)) + 60;
            let y = Math.floor(Math.random() * (570 - 460)) + 460; //max - min
            crc2.beginPath();
            drawPerson(x, y);
            crc2.closePath();
        }
        //cloud
        for (let index = 0; index < 3; index++) {
            //random cloud position
            let x = Math.floor(Math.random() * canvas.width);
            let y = Math.floor(Math.random() * (130 - 50)) + 50;
            drawCloud(x, y);
        }
        //birds
        for (let index = 0; index < 4; index++) {
            let x = Math.floor(Math.random() * (1150 - 50)) + 50;
            let y = Math.floor(Math.random() * (150 - 10)) + 10; //max - min
            drawBird(x, y);
        }
    }
    function drawBackground() {
        //sky
        let sky = crc2.createLinearGradient(0, 0, 0, 150);
        sky.addColorStop(0, "#5066d5");
        sky.addColorStop(1, "#d59550");
        crc2.fillStyle = sky;
        crc2.fillRect(0, 0, 1200, 150);
        //sea
        let sea = crc2.createLinearGradient(600, 150, 600, 450);
        sea.addColorStop(0, "#f5b94a");
        sea.addColorStop(0.2, "#f68b8b");
        sea.addColorStop(0.8, "#3e98a0");
        crc2.fillStyle = sea;
        crc2.fillRect(0, 150, 1200, 300);
        //beach
        crc2.fillStyle = "#edc969";
        crc2.fillRect(0, 450, 1200, 150);
    }
    function drawSun() {
        //sun gradient
        // let sun: CanvasGradient = crc2.createRadialGradient()
        crc2.fillStyle = "#f2ad61";
        crc2.arc(600, 150, 70, 0, Math.PI, true);
        crc2.fill();
    }
    function drawCloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 30, Math.PI * 0.5, Math.PI * 1.5);
        crc2.arc(_x + 35, _y - 30, 35, Math.PI * 1, Math.PI * 1.85);
        crc2.arc(_x + 76, _y - 22, 25, Math.PI * 1.37, Math.PI * 1.91);
        crc2.arc(_x + 100, _y, 30, Math.PI * 1.5, Math.PI * 0.5);
        crc2.moveTo(_x + 100, _y + 30);
        crc2.lineTo(_x, _y + 30);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //gradient cloud
        // let gradient: CanvasGradient = crc2.createRadialGradient(_x, _y, 10, _x, _y, 100);
        // gradient.addColorStop(0, "white");
        // gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
        // crc2.beginPath();
        // crc2.arc(_x, _y, 70, 0, 2 * Math.PI);
        // crc2.fillStyle = gradient;
        // crc2.fill();
        // crc2.closePath();
    }
    function drawPerson(_x, _y) {
        //body
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ebd89b";
        crc2.fill();
        crc2.closePath();
        //pants
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0, Math.PI);
        crc2.fillStyle = "#d55053";
        crc2.fill();
        crc2.closePath();
        //eyes
        crc2.beginPath();
        crc2.arc(_x - 10, _y - 20, 4, 0, 2 * Math.PI);
        crc2.arc(_x + 10, _y - 20, 4, 0, 2 * Math.PI);
        crc2.fillStyle = " #000000";
        crc2.fill();
        crc2.closePath();
        //cappy
        crc2.beginPath();
        crc2.arc(_x, _y - 40, 20, 0, Math.PI, true);
        crc2.moveTo(_x + 20, _y - 40);
        crc2.lineTo(_x - 40, _y - 40);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //mouth
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y - 10);
        crc2.bezierCurveTo(_x - 10, _y, _x + 10, _y, _x + 10, _y - 10);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
    }
    function drawPalm(_x, _y) {
        //Stamm
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.fillRect(_x, _y, 20, 200);
        crc2.closePath();
        //Palm Leaf
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y);
        crc2.quadraticCurveTo(_x + 20, _y - 30, _x + 100, _y + 60);
        crc2.moveTo(_x + 10, _y);
        crc2.quadraticCurveTo(_x - 20, _y - 30, _x - 100, _y + 60);
        crc2.strokeStyle = "green";
        crc2.lineWidth = 15;
        crc2.stroke();
        crc2.closePath();
    }
    function drawBoat(_x, _y) {
        //Rumpf und Mast
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0, Math.PI, false);
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineWidth = 5;
        crc2.strokeStyle = "#744c2c";
        crc2.stroke();
        crc2.fillStyle = "#744c2c";
        crc2.fill();
        crc2.closePath();
        //Fahne
        crc2.beginPath();
        crc2.moveTo(_x + 2, _y - 50);
        crc2.lineTo(_x + 32, _y - 35);
        crc2.lineTo(_x + 2, _y - 20);
        crc2.fillStyle = "#d55053";
        crc2.fill();
        crc2.closePath();
    }
    function drawBird(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 20, _y - 7, _x + 45, _y);
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 20, _y - 7, _x - 45, _y);
        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
    }
})(strand802 || (strand802 = {})); //namespace
//# sourceMappingURL=strand802.js.map