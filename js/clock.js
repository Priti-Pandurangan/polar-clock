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

	drawHand(200, Math.PI / 4, "red")
	drawHand(150, Math.PI / 4, "blue")
	drawHand(100, Math.PI / 4, "green")
}

function drawHand(radius, theta, color, width) {
	width = width || 20

	ctx.beginPath()
	ctx.arc(centerX, centerY, radius, 3 * Math.PI / 2, (3 * Math.PI / 2) + theta)
	ctx.lineTo(centerX + (radius + width) * Math.cos((Math.PI / 2) - theta) , centerY - (radius + width) * Math.sin((Math.PI / 2) - theta))
	ctx.arc(centerX, centerY, radius + width, (3 * Math.PI / 2) + theta, 3 * Math.PI / 2, true)
	ctx.closePath()

	ctx.fillStyle = color
	ctx.fill()
}

setInterval(draw, 1000)