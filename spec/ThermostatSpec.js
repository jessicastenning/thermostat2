describe ("Thermostat", function() {

    var thermostat

    beforeEach(function(){
      thermostat = new Thermostat();
    });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  })
  it('increases the temperature', function() {
    thermostat.up(5)
    expect(thermostat.temperature).toEqual(25);
  })
  it('decreases the temperature', function() {
    thermostat.down(5)
    expect(thermostat.temperature).toEqual(15);
  })
  it ('does not allow the temperature to go below 10', function() {
    thermostat.down(11)
    expect(thermostat.temperature).toEqual(10);
  })
  it('starts with power saving mode on', function() {
    expect(thermostat.powerSaving).toEqual(true);
  })
  it('does not allow temperatureto go above 25 if power saving mode is on', function() {
    thermostat.up(6)
    expect(thermostat.temperature).toEqual(25);
  })
  it('does not allow temperature to go above 32 if power saving mode is off', function () {
    thermostat.powerSwitchOff()
    thermostat.up(13)
    expect(thermostat.temperature).toEqual(32);
  })
  it('switches power saving mode off', function() {
    thermostat.powerSwitchOff()
    expect(thermostat.powerSaving).toEqual(false);
  })
  it('switches power saving mode on', function() {
    thermostat.powerSwitchOff()
    thermostat.powerSwitchOn()
    expect(thermostat.powerSaving).toEqual(true);
  })
  it('resets the temperature to 20', function() {
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  })
  it('shows medium usage as default', function() {
    expect(thermostat.usage()).toEqual("medium");
  })
  it('shows low usage', function() {
    thermostat.down(8)
    expect(thermostat.usage()).toEqual("low");
  })
  it('shows high usage', function() {
    thermostat.up(6)
    expect(thermostat.usage()).toEqual("high");
  })
  it('displays a message when user tries to reduce temperature below minimum temperature', function() {
    expect(thermostat.down(15)).toBe(`Minimum temperature is ${MINIMUM_TEMPERATURE}`);
  })
  it('displays a message when user tries to increase temperature above maximum temperature when power saving on', function() {
    expect(thermostat.up(10)).toBe(`Maximum temperature is ${MAXIMUM_SAVING_ON} in power saving mode`);
  })
  it('displays a message when user tries to increase temperature above maximum temperature when power saving off', function() {
    thermostat.powerSwitchOff()
    expect(thermostat.up(15)).toBe(`Maximum temperature is ${MAXIMUM_SAVING_OFF} when power saving mode is off`);
    })
});
