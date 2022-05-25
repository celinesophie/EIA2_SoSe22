"use strict";
var beach901;
(function (beach901) {
    let imageData;
    let cloudArray = [];
    let birdArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //get rendering context
        let canvas = document.querySelector("canvas");
        beach901.crc2 = canvas.getContext("2d");
        //DRAW OBJECTS
        drawBackground();
        drawSun();
        drawBoat(800, 250);
        drawPalm(100, 300);
        //Urlauberi at the Beach
        for (let index = 0; index < 3; index++) {
            let x = Math.floor(Math.random() * (1160 - 60)) + 60;
            let y = Math.floor(Math.random() * (570 - 460)) + 460; //max - min
            beach901.crc2.beginPath();
            drawPerson(x, y);
            beach901.crc2.closePath();
        }
        //save background as it is now
        imageData = beach901.crc2.getImageData(0, 0, 1200, 600);
        //draw and move cloud
        createCloud();
        window.setInterval(moveCloud, 50);
        //birds
        createBird();
        window.setInterval(moveBird, 50);
    } //end handleload
    function drawBackground() {
        //sky
        let sky = beach901.crc2.createLinearGradient(0, 0, 0, 150);
        sky.addColorStop(0, "#5066d5");
        sky.addColorStop(1, "#d59550");
        beach901.crc2.fillStyle = sky;
        beach901.crc2.fillRect(0, 0, 1200, 150);
        //sea
        let sea = beach901.crc2.createLinearGradient(600, 150, 600, 450);
        sea.addColorStop(0, "#f5b94a");
        sea.addColorStop(0.2, "#f68b8b");
        sea.addColorStop(0.8, "#3e98a0");
        beach901.crc2.fillStyle = sea;
        beach901.crc2.fillRect(0, 150, 1200, 300);
        //beach
        beach901.crc2.fillStyle = "#edc969";
        beach901.crc2.fillRect(0, 450, 1200, 150);
    }
    function drawSun() {
        //sun gradient
        // let sun: CanvasGradient = crc2.createRadialGradient()
        beach901.crc2.fillStyle = "#f2ad61";
        beach901.crc2.arc(600, 150, 70, 0, Math.PI, true);
        beach901.crc2.fill();
    }
    //create 1 cloud and push it to cloud array
    function createCloud() {
        for (let i = 0; i < 1; i++) {
            let cloud = new beach901.Cloud(1); //(size?)(Math.random() * (0.9 - 0.8))
            cloudArray.push(cloud);
            // console.log(cloudArray);    
        }
    }
    function moveCloud() {
        // console.log("cloud move");
        beach901.crc2.clearRect(0, 0, 1200, 600);
        beach901.crc2.putImageData(imageData, 0, 0);
        for (let cloud of cloudArray) {
            cloud.move(1 / 50); //20 ms = 1/50
            cloud.draw();
        }
    }
    function createBird() {
        console.log("create Bird");
        for (let i = 0; i < 4; i++) {
            let bird = new beach901.Bird(1); //(size?)(Math.random() * (0.9 - 0.8))
            birdArray.push(bird);
            console.log(birdArray);
        }
    }
    function moveBird() {
        console.log("bird move");
        beach901.crc2.clearRect(0, 0, 1200, 600);
        beach901.crc2.putImageData(imageData, 0, 0);
        for (let bird of birdArray) {
            bird.move(1 / 50); //20 ms = 1/50
            bird.draw();
        }
    }
    function drawPerson(_x, _y) {
        //body
        beach901.crc2.beginPath();
        beach901.crc2.arc(_x, _y, 40, 0, 2 * Math.PI);
        beach901.crc2.fillStyle = "#ebd89b";
        beach901.crc2.fill();
        beach901.crc2.closePath();
        //pants
        beach901.crc2.beginPath();
        beach901.crc2.arc(_x, _y, 40, 0, Math.PI);
        beach901.crc2.fillStyle = "#d55053";
        beach901.crc2.fill();
        beach901.crc2.closePath();
        //eyes
        beach901.crc2.beginPath();
        beach901.crc2.arc(_x - 10, _y - 20, 4, 0, 2 * Math.PI);
        beach901.crc2.arc(_x + 10, _y - 20, 4, 0, 2 * Math.PI);
        beach901.crc2.fillStyle = " #000000";
        beach901.crc2.fill();
        beach901.crc2.closePath();
        //cappy
        beach901.crc2.beginPath();
        beach901.crc2.arc(_x, _y - 40, 20, 0, Math.PI, true);
        beach901.crc2.moveTo(_x + 20, _y - 40);
        beach901.crc2.lineTo(_x - 40, _y - 40);
        beach901.crc2.lineWidth = 4;
        beach901.crc2.strokeStyle = "white";
        beach901.crc2.stroke();
        beach901.crc2.fillStyle = "white";
        beach901.crc2.fill();
        beach901.crc2.closePath();
        //mouth
        beach901.crc2.beginPath();
        beach901.crc2.moveTo(_x - 10, _y - 10);
        beach901.crc2.bezierCurveTo(_x - 10, _y, _x + 10, _y, _x + 10, _y - 10);
        beach901.crc2.strokeStyle = "black";
        beach901.crc2.lineWidth = 2;
        beach901.crc2.stroke();
        beach901.crc2.closePath();
    }
    function drawPalm(_x, _y) {
        //Stamm
        beach901.crc2.beginPath();
        beach901.crc2.fillStyle = "orange";
        beach901.crc2.fillRect(_x, _y, 20, 200);
        beach901.crc2.closePath();
        //Palm Leaf
        beach901.crc2.beginPath();
        beach901.crc2.moveTo(_x + 10, _y);
        beach901.crc2.quadraticCurveTo(_x + 20, _y - 30, _x + 100, _y + 60);
        beach901.crc2.moveTo(_x + 10, _y);
        beach901.crc2.quadraticCurveTo(_x - 20, _y - 30, _x - 100, _y + 60);
        beach901.crc2.strokeStyle = "green";
        beach901.crc2.lineWidth = 15;
        beach901.crc2.stroke();
        beach901.crc2.closePath();
    }
    function drawBoat(_x, _y) {
        //Rumpf und Mast
        beach901.crc2.beginPath();
        beach901.crc2.arc(_x, _y, 40, 0, Math.PI, false);
        beach901.crc2.moveTo(_x, _y);
        beach901.crc2.lineTo(_x, _y - 50);
        beach901.crc2.lineWidth = 5;
        beach901.crc2.strokeStyle = "#744c2c";
        beach901.crc2.stroke();
        beach901.crc2.fillStyle = "#744c2c";
        beach901.crc2.fill();
        beach901.crc2.closePath();
        //Fahne
        beach901.crc2.beginPath();
        beach901.crc2.moveTo(_x + 2, _y - 50);
        beach901.crc2.lineTo(_x + 32, _y - 35);
        beach901.crc2.lineTo(_x + 2, _y - 20);
        beach901.crc2.fillStyle = "#d55053";
        beach901.crc2.fill();
        beach901.crc2.closePath();
    }
})(beach901 || (beach901 = {})); //namespace
//# sourceMappingURL=beach901.js.map