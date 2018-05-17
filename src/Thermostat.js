const MINIMUM_TEMPERATURE = 10
const STARTING_TEMPERATURE = 20
const MAXIMUM_SAVING_ON = 25
const MAXIMUM_SAVING_OFF = 32

function Thermostat() {
  this.temperature = STARTING_TEMPERATURE;
  this.powerSaving = true
}

Thermostat.prototype.up = function(temperature = 5) {
  this.temperature += temperature;
  if(this.powerSaving === true && this.temperature > MAXIMUM_SAVING_ON) {
    this.temperature = MAXIMUM_SAVING_ON
    return `Maximum temperature is ${MAXIMUM_SAVING_ON} in power saving mode`
  } else if(this.powerSaving === false && this.temperature > MAXIMUM_SAVING_OFF) {
    this.temperature = MAXIMUM_SAVING_OFF
    return `Maximum temperature is ${MAXIMUM_SAVING_OFF} when power saving mode is off`
  }
}

Thermostat.prototype.down = function(temperature = 5) {
  this.temperature -= temperature;
  if(this.temperature < MINIMUM_TEMPERATURE) {
    this.temperature = MINIMUM_TEMPERATURE
    return `Minimum temperature is ${MINIMUM_TEMPERATURE}`
    }
}

Thermostat.prototype.powerSwitchOff = function() {
  this.powerSaving = false
}

Thermostat.prototype.powerSwitchOn = function() {
  this.powerSaving = true
}

Thermostat.prototype.reset = function () {
  this.temperature = 20
}

Thermostat.prototype.usage = function () {
  if(this.temperature < 18) {
    return "low" }
  else if(this.temperature < 25) {
    return "medium" }
  else {
    return "high" }
}
