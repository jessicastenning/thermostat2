const MINIMUM_TEMPERATURE = 10
const STARTING_TEMPERATURE = 20
const MAXIMUM_SAVING_ON = 25

function Thermostat() {
  this.temperature = STARTING_TEMPERATURE;
  this.powerSaving = true
}

Thermostat.prototype.up = function(temperature) {
  this.temperature += temperature;
  if(this.powerSaving = true && this.temperature > MAXIMUM_SAVING_ON) {
    this.temperature = MAXIMUM_SAVING_ON
  }
}

Thermostat.prototype.down = function(temperature) {
  this.temperature -= temperature;
  if(this.temperature < MINIMUM_TEMPERATURE) {
    this.temperature = MINIMUM_TEMPERATURE
    }
}
