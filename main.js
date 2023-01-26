const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouse = {
    x: 0,
    y: 0,
};
var sizeBox = document.getElementById('sizeBox');
var size = sizeBox.value;
sizeBox.oninput = function() {
    var size = this.value
}
let drawAble = false;
var color = document.getElementById('colorPicker').value;
ctx.fillStyle = color;
ctx.strokeStyle = color;
document.getElementById('colorPicker').addEventListener('input', setColor);
function setColor() {
    var color = document.getElementById('colorPicker').value;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    console.log(color);
}
function draw() {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}
window.addEventListener("mousedown", (e) => drawAble = true)
window.addEventListener("mouseup", (e) => drawAble = false)
canvas.addEventListener('mousemove',function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
    if(drawAble == true) {
        draw();
    }
});
window.addEventListener("resize", ()=> {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}); 