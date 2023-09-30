const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Testing Scooter class', () => {
  test('Scooter should be intialized properly', () => {
    const lime = new Scooter("Fells Point");//new instance of Scooter class with station.
    expect(lime.station).toEqual("Fells Point");
    expect(lime.user).toBe(null);
    expect(lime.charge).toEqual(100);
    expect(lime.isBroken).toBe(false);
    expect(Scooter.nextSerial).toBe(2);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  //rent method
  it("Testing Rent Method", ()=>{
    const sBird = new Scooter("Inner Harbor");
    sBird.charge = 40;
    sBird.isBroken = false;
    const sLyft = new Scooter("Camden Yards");
    sLyft.charge = 10;
    const user ="trey";
    sBird.rent(user);
    expect(sBird.isBroken).toBe(false);
    expect(sBird.user).toBe(user);
    expect(sBird.station).toBe(null);
    expect(()=>{
      sLyft.rent(user).toThrow("scooter needs to charge or scooter needs repair");
    })//Throws error for low charge. 
  })
  //dock method
  it("Testing dock Method", ()=>{
    const sRide = new Scooter("Fells Point");
    sRide.dock("Camden Yards");
    expect(sRide.user).toBe(null);
    expect(sRide.station).toBe("Camden Yards");
  })
  //requestRepair method

  //charge method

})
