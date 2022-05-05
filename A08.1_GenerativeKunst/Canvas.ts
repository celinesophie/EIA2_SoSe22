namespace canvasL08 {

    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("hallo");
        //get rendering context
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!; 

        //backgroundcolor random
        drawBackground();

        //draw many dots
        for (let index: number = 0; index < 40; index++) {
            let x: number = Math.random() * 900;
            let y: number = Math.random() * 600;
            drawDots(x, y);
            
        }

        //random lines
        for (let index: number = 0; index <= 10; index++) {
            let x: number = Math.random() * 8;
            drawLines(x);
        }

        //kreise mit for schleife, gleicher Mittelpunkt
        for (let index: number = 0; index <= 2; index++) {
            //hsl colors
            let h1: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
            let s1: number = Math.floor(Math.random() * 100); //saturation
            let l1: number = Math.floor(Math.random() * 70); //luminanz
            let a1: number = Math.random(); //durchsichtigkeit
            let radius: number = Math.random() * 200;
            let color: string = "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")";
            drawCircle(radius, color);
        }
        
        //draw curve
        drawCurve();

        //2 Rectangles
        drawRect();

    }



    //FUNKTIONEN
    function drawBackground(): void {

        // Create a linear gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 899, 499);

        //gradient stop 1
        let h1: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s1: number = Math.floor(Math.random() * 100); //saturation
        let l1: number = Math.floor(Math.random() * 70); //luminanz
        let a1: number = 1; //durchsichtigkeit
        //gradient stop 2
        let h2: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s2: number = Math.floor(Math.random() * 100); //saturation
        let l2: number = Math.floor(Math.random() * 70); //luminanz
        //gradient stop 3
        let h3: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s3: number = Math.floor(Math.random() * 100); //saturation
        let l3: number = Math.floor(Math.random() * 70); //luminanz

        // Add three color stops
        gradient.addColorStop(0, "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")");
        gradient.addColorStop(.5, "hsla(" + h2 + "," + s2 + "%," + l2 + "%," + a1 + ")");
        gradient.addColorStop(1, "hsla(" + h3 + "," + s3 + "%," + l3 + "%," + a1 + ")");

        // Set the fill style and draw a rectangle
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 900, 600);
    }

    function drawCircle(_radius: number, _color: string): void {

        crc2.beginPath();
        crc2.arc(450, 300, _radius, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        //Stroke wegmachen?
        crc2.lineWidth = 0;
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        crc2.closePath();

    }

    function drawRect(): void {
        //hsl colors
        let h1: number = Math.floor(Math.random() * (329 - 166 + 1)) + 166; //farbe
        let s1: number = Math.floor(Math.random() * 100); //saturation
        let l1: number = Math.floor(Math.random() * 70); //luminanz
        let a1: number = 1; //durchsichtigkeit
        //random position as variables
        let x: number = Math.random() * 600;
        let y: number = Math.random() * 300;
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "hsla(" + h1 + "," + s1 + "%," + l1 + "%," + a1 + ")";
        crc2.strokeRect(x, y, 250, 180);
        crc2.strokeRect(x + 160, y + 60, 160, 200);
        crc2.strokeRect(x - 300, y - 200, 160, 200);
        crc2.closePath();
    }

    function drawLines(_lineWidth: number): void {
        let x: number = Math.random() * 900;

        crc2.beginPath();
        crc2.moveTo(x, 0);
        crc2.lineTo(x, 600);
        crc2.strokeStyle = "#23afbf";
        crc2.stroke();
        crc2.lineWidth = _lineWidth;
        crc2.closePath();

    }

    function drawCurve(): void {
        let x: number = Math.random() * 100;
        let y: number = Math.random() * 600;

        crc2.moveTo(0, 300);
        crc2.bezierCurveTo(0, 500, 900, 400, 900, 300);
        crc2.translate(x, y);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
    }

    function drawDots(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
    }

} //namespace