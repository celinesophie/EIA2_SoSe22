namespace beach901 {

    export class Bird {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            console.log("Bird Constructor");

            if (_position)//wenn vektor angegeben wird
                this.position = _position;
            else //wenn kein Vektor angegeben
                this.position = new Vector(300, 50);
            this.velocity = new Vector(30, 0);
            this.size = _size;
            this.velocity.random(120, 20); //random. Pixelwerte (min und max)
            
        }

        move(_timeslice: number): void {//timeslice = milli)sekunde
            console.log("bird move constructor");
            
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            console.log("bird draw");
            
            crc2.save();

            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.quadraticCurveTo(this.position.x + 20, this.position.y - 7, this.position.x + 45, this.position.y);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.quadraticCurveTo(this.position.x - 20, this.position.y - 7, this.position.x - 45, this.position.y);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath(); 

            crc2.restore();
        }

    }



}//namespace