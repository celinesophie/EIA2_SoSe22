"use strict";
var beach901;
(function (beach901) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            // console.log("cloud constructor");
            if (_position) //kein Vektor angegeben
                this.position = _position;
            else
                this.position = new beach901.Vector(50, 50); // position wenn Vektor nicht angegeben ist
            this.velocity = new beach901.Vector(30, 0); //start
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("cloud move");
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
            // console.log("cloud draw");
            beach901.crc2.save();
            beach901.crc2.translate(this.position.x, this.position.y);
            beach901.crc2.scale(this.size, this.size);
            beach901.crc2.beginPath();
            beach901.crc2.arc(this.position.x, this.position.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            beach901.crc2.arc(this.position.x + 35, this.position.y - 30, 35, Math.PI * 1, Math.PI * 1.85);
            beach901.crc2.arc(this.position.x + 76, this.position.y - 22, 25, Math.PI * 1.37, Math.PI * 1.91);
            beach901.crc2.arc(this.position.x + 100, this.position.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            beach901.crc2.moveTo(this.position.x + 100, this.position.y + 30);
            beach901.crc2.lineTo(this.position.x, this.position.y + 30);
            beach901.crc2.strokeStyle = "white";
            beach901.crc2.stroke();
            beach901.crc2.fillStyle = "white";
            beach901.crc2.fill();
            beach901.crc2.closePath();
            beach901.crc2.restore();
        }
    } //end cloud class
    beach901.Cloud = Cloud;
})(beach901 || (beach901 = {})); //namespace
//# sourceMappingURL=cloud.js.map