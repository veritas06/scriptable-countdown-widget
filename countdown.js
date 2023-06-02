// Original project: https://github.com/ferminrp/scriptable-countdown-widget
// Based on your phone model, you may need to adjust the font size at line 26.
// Enter the date until the countdown
// Event: 
let endDate = new Date("August 24, 2024 00:00:00")

let now = new Date()
let difference = endDate - now
let days = Math.floor(difference / (1000 * 60 * 60 * 24))
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
let seconds = Math.floor((difference % (1000 * 60)) / 1000)

let widget = new ListWidget()

// Choose a color and comment the rest lines. (You can add your own color, this are the ones I recommend
// widget.backgroundColor = new Color("6841D8") // Majorelle Blue
// widget.backgroundColor = new Color("EF3159") // Crayola Red
// widget.backgroundColor = new Color("EFA008") // Gamboge (Orange)
// widget.backgroundColor = new Color("F24D2F") // Cinnabar (tipo rojo)
// widget.backgroundColor = new Color("30C943") // Lime Green
// widget.backgroundColor = new Color("2BB792") // Mint
// widget.backgroundColor = new Color("27A9D0") // Pacific cyan

let countdown = widget.addText(`${days}`+"d")
countdown.font = new Font("ArialRoundedMTBold", 42, "bold") // This font size may need to be adjusted based on your phone model. The size is fine on an iPhone 14 Pro MAX.
countdown.textColor = Color.white()

// widget.addSpacer(2)

// You can change the next line to your own language like "Days until"
// let daysUntil = widget.addText("days until...")
// daysUntil.font = new Font("ArialRoundedMTBold", 16)
// daysUntil.textColor = Color.white()
// daysUntil.textOpacity = 0.8

// widget.addSpacer(2)

// Change the name of the event
// let occasion = widget.addText("WEDDING!")
// occasion.font = new Font("ArialRoundedMTBold", 20)
// occasion.textColor = Color.white()

Script.setWidget(widget)
Script.complete()
