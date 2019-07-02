import { Tamagotchi } from './../src/newnpm-template.js'


describe('Tamagotchi', function() {
  let testPet = new Tamagotchi("Sue");
  // let testPet = {
  //   name: "Sue",
  //   foodLevel: 10
  // }

  beforeEach(function() {
    jasmine.clock().install();
    testPet.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('It should have a name and not be starved when made', function() {
    expect(testPet.name).toEqual("Sue");
    expect(testPet.foodLevel).toEqual(10)
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(testPet.foodLevel).toEqual(7);
  });


})
