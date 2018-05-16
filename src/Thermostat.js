function Thermostat() {
  this.temperature = 20
}

Thermostat.prototype.up = function(temperature) {
  this.temperature += temperature;
}

Thermostat.prototype.down = function(temperature) {
  this.temperature -= temperature;
}
