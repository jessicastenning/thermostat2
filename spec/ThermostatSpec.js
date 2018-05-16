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
});
