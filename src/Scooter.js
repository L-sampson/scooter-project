class Scooter extends User{
  // scooter code here
  static nextSerial = 1;

  constructor(station){
    this.station = station;
    this.user = null;
    this.isBroken = false;
    this.charge = 100;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++; 
  }
  

  rent(user){
    if(this.charge < 20 || this.isBroken === true){
      throw new Error("Scooter needs to charge or scooter needs repair");
    }
    this.user = user;
    this.station = null;
    this.serial = serial;
    //remove scooter from station list by serial number.
    //Check out to user
  }

  dock(station){
    this.user = null;
    //push scooter back into station object
    this.station = station;
  }
}


module.exports = Scooter
