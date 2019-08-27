// var five = require("johnny-five");
// var board = new five.Board();
// board.on("ready", function() {
//   var led = new five.Led(3);
//   led.blink(100);
// });

var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function() {
  var slider = new five.Sensor("A0");
  var tap = new five.Sensor("A1");
  var led = new five.Led(3);
  // Scale the sensor's value to the LED's brightness range
  slider.scale([0, 255]).on("data", function() {
    led.brightness(this.value);
  });
  tap.scale([0, 255]).on("data", function() {
    led.brightness(this.value);
  });
});
