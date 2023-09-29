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
    this.user = user;//Check out to user
    this.station = null;//remove scooter from station list 
    this.serial = serial;//by serial number.
    
    
  }

  dock(station){
    this.user = null;//checks out user
    this.station = station;//push scooter back into station object
  }
}


module.exports = Scooter
