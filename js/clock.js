var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

canvas.style.width = window.innerWidth + "px"
canvas.style.height = window.innerHeight + "px"

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var centerX = canvas.width / 2
var centerY = canvas.height / 2

var date = new Date()
var seconds = date.getSeconds()
var minutes = date.getMinutes()
var hours = date.getHours()

if (hours > 11)
    hours -= 12

var PI  = Math.PI
var cos = Math.cos
var sin = Math.sin

function draw() {
    clearScreen()
    
    drawHand(200, (2 * PI / 60) * seconds, "#d33682")
    drawHand(150, (2 * PI / 60) * minutes, "#268bd2")
    drawHand(100, (2 * PI / 12) * hours,   "#859900")

    drawTime(hours, minutes, seconds)
  
    update()    
}

function drawHand(radius, theta, color, width) {
    width = width || 35
    
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 3 * PI / 2, (3 * PI / 2) + theta)
    ctx.lineTo(centerX + (radius + width) * cos((PI / 2) - theta),
               centerY - (radius + width) * sin((PI / 2) - theta))
    ctx.arc(centerX, centerY, radius + width, (3 * PI / 2) + theta, 3 * PI / 2, true)
    ctx.closePath()

    ctx.fillStyle = color
    ctx.fill()
}

function drawTime(hours, minutes, seconds) {
    var timeString = ""
    timeString += (hours < 10) ? "0" + hours : hours
    timeString += (minutes < 10) ? ":0" + minutes : ":" + minutes
    timeString += (seconds < 10) ? ":0" + seconds : ":" + seconds
    
    ctx.font = "32px Orbitron, Arial, sans-serif"
    ctx.fillStyle = "#b58900"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(timeString, centerX, centerY)
}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)  
}

function update() {
    if (seconds == 59) {
        seconds = 0
        if (minutes == 59) {
            minutes = 0
            if (hours == 11) {
                hours = 0
            } else {
                hours = hours + 1
            }
        } else {
            minutes = minutes + 1
        }
    } else {
        seconds = seconds + 1
    }
}

setInterval(draw, 1000)
