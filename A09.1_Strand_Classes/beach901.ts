namespace beach901 {

    let imageData: ImageData;
    let cloudArray: Cloud [] = [];
    let birdArray: Bird [] = [];

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    function handleLoad (_event: Event): void {

        //get rendering context
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!; 

        //DRAW OBJECTS
        drawBackground();
        drawSun();
        drawBoat (800, 250);
        drawPalm(100, 300);
        
        //Urlauberi at the Beach
        for (let index: number = 0; index < 3; index++) {
            let x: number = Math.floor(Math.random() * (1160 - 60)) + 60;
            let y: number = Math.floor(Math.random() * (570 - 460)) + 460; //max - min
            crc2.beginPath();
            drawPerson(x, y);
            crc2.closePath();
        }

        //save background as it is now
        imageData = crc2.getImageData(0, 0, 1200, 600);

        //draw and move cloud
        createCloud();
        window.setInterval(moveCloud, 50);

         //birds
        createBird();
        window.setInterval(moveBird, 50);

        
        
    }//end handleload

    function drawBackground(): void {
        //sky
        let sky: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 150);
        sky.addColorStop(0, "#5066d5");
        sky.addColorStop(1, "#d59550");
        crc2.fillStyle = sky;
        crc2.fillRect(0, 0, 1200, 150);
        //sea
        let sea: CanvasGradient = crc2.createLinearGradient(600, 150, 600, 450);
        sea.addColorStop(0, "#f5b94a");
        sea.addColorStop(0.2, "#f68b8b");
        sea.addColorStop(0.8, "#3e98a0");
        crc2.fillStyle = sea;
        crc2.fillRect(0, 150, 1200, 300);
        //beach
        crc2.fillStyle = "#edc969";
        crc2.fillRect(0, 450, 1200, 150);
        
    }

    function drawSun(): void {
        //sun gradient
        // let sun: CanvasGradient = crc2.createRadialGradient()
        crc2.fillStyle = "#f2ad61";
        crc2.arc(600, 150, 70, 0, Math.PI, true);
        crc2.fill();
    }

    //create 1 cloud and push it to cloud array
    function createCloud(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud(1); //(size?)(Math.random() * (0.9 - 0.8))
            cloudArray.push(cloud);
            // console.log(cloudArray);    
        }
    }

    function moveCloud(): void {
        // console.log("cloud move");
        crc2.clearRect(0, 0, 1200, 600);
        crc2.putImageData(imageData, 0, 0);

        for (let cloud of cloudArray) {
            cloud.move(1 / 50); //20 ms = 1/50
            cloud.draw();
        }
    }

    function createBird(): void {
        console.log("create Bird");
        
        for (let i: number = 0; i < 4; i++) {
            let bird: Bird = new Bird(1); //(size?)(Math.random() * (0.9 - 0.8))
            birdArray.push(bird);
            console.log(birdArray);    
        }
    }

    function moveBird(): void {
        console.log("bird move");
        crc2.clearRect(0, 0, 1200, 600);
        crc2.putImageData(imageData, 0, 0);

        for (let bird of birdArray) {
            bird.move(1 / 50); //20 ms = 1/50
            bird.draw();
        }
    }

    function drawPerson(_x: number, _y: number): void {
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

    function drawPalm(_x: number, _y: number): void {
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

    function drawBoat(_x: number, _y: number): void {
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

} //namespace