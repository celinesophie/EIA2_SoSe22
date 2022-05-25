"use strict";
var beach901;
(function (beach901) {
    class Bird {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            console.log("Bird Constructor");
            if (_position) //wenn vektor angegeben wird
                this.position = _position;
            else //wenn kein Vektor angegeben
                this.position = new beach901.Vector(300, 50);
            this.velocity = new beach901.Vector(30, 0);
            this.size = _size;
            this.velocity.random(120, 20); //random. Pixelwerte (min und max)
        }
        move(_timeslice) {
            console.log("bird move constructor");
            let offset = new beach901.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += beach901.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += beach901.crc2.canvas.height;
            if (this.position.x > beach901.crc2.canvas.width)
                this.position.x -= beach901.crc2.canvas.width;
            if (this.position.y > beach901.crc2.canvas.height)
                this.position.y -= beach901.crc2.canvas.height;
        }
        draw() {
            console.log("bird draw");
            beach901.crc2.save();
            beach901.crc2.beginPath();
            beach901.crc2.moveTo(this.position.x, this.position.y);
            beach901.crc2.quadraticCurveTo(this.position.x + 20, this.position.y - 7, this.position.x + 45, this.position.y);
            beach901.crc2.moveTo(this.position.x, this.position.y);
            beach901.crc2.quadraticCurveTo(this.position.x - 20, this.position.y - 7, this.position.x - 45, this.position.y);
            beach901.crc2.strokeStyle = "#000000";
            beach901.crc2.lineWidth = 2;
            beach901.crc2.stroke();
            beach901.crc2.closePath();
            beach901.crc2.restore();
        }
    }
    beach901.Bird = Bird;
})(beach901 || (beach901 = {})); //namespace
//# sourceMappingURL=bird.js.map