var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

canvas.style.width = window.innerWidth + "px"
canvas.style.height = window.innerHeight + "px"

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var centerX = canvas.width / 2
var centerY = canvas.height / 2

var seconds = 0, minutes = 0, hours = 0;

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	drawHand(200, (2 * Math.PI / 60) * seconds, "red")
	drawHand(150, (2 * Math.PI / 60) * minutes, "blue")
	drawHand(100, (2 * Math.PI / 12) * hours, "green")

	if (seconds == 59) {
		seconds = 0
		if (minutes == 59) {
			minutes = 0
			hours = (hours == 11) ? 0 : hours + 1
		} else {
			minutes = minutes + 1
		}
	} else {
		seconds = seconds + 1
	}
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