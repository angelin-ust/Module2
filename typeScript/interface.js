var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.drw2DImage = function () {
        throw new Error("Method not implemented.");
    };
    Circle.prototype.draw2DImage = function () {
        console.log("drawing a 2d");
    };
    Circle.prototype.drawPoint = function () {
        console.log("drawing ");
    };
    return Circle;
}());
var cir = new Circle();
cir.drawPoint();
cir.draw2DImage();
