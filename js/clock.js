var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

canvas.style.width = window.innerWidth + "px"
canvas.style.height = window.innerHeight + "px"

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var centerX = canvas.width / 2
var centerY = canvas.height / 2

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

}

setInterval(draw, 1000)