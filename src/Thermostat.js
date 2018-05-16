const MINIMUM_TEMPERATURE = 10
const STARTING_TEMPERATURE = 20

function Thermostat() {
  this.temperature = STARTING_TEMPERATURE
}

Thermostat.prototype.up = function(temperature) {
  this.temperature += temperature;
}

Thermostat.prototype.down = function(temperature) {
  this.temperature -= temperature;
  if(this.temperature < MINIMUM_TEMPERATURE) {
    this.temperature = MINIMUM_TEMPERATURE
    }
}
