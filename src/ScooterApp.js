const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp extends User {
  // ScooterApp code here
  constructor(){
const stations ={
  "Inner Harbor" : [],
  "Fells Point" : [], 
  "Camden Yards" : [], 
  "Federal Hill" : []
}
const registeredUsers ={};
  }
  
  registerUsers(username, password, age){
    
  }

  
  loginUser(username, password){
    if(this.registeredUsers[username]){
      login()
      this.loggedIn = true;
      console.log("User has been logged in");
    }
    else if(!this.registeredUsers[username] ||!this.registeredUsers[password]){
      console.log("Username or password is incorrect")
    }
  }

  logoutUser(username){
    if(this.registeredUsers[username]){
      login()
      this.loggedIn = false;
      console.log("User is logged out");
    }
    throw new Error("No such user is logged in.");
  }

  createScooter(station){
    //throw new error if station does not exist.
    if(station != this.station){
      throw new Error("No such station error");
    }
    
    //Create new scooter, add it to station list and set its station property
    console.log("Created new scooter");
    return scooter;
     
  }

  dockScooter(scooter, station){
    //add the scooter to the stations scooter list and dock it
    console.log("Scooter is docked");
    //throw new error if station does not exist
    if(this.station!==station){
      throw new Error("no such station")
    }
    //throw error if scooter is already there.
    else if(this.serial ===serial && this.station ===station){
      throw new Error("Scooter already at station");
    } 
  }

  rentScooter(scooter, user){
    //locate the given scooter at one of the stations and remove it from station
    //rent it to user
    console.log("Scooter is rented");
    //if scooter is already rented throw the error "scooter already rented"
  }

  print(){
    //Log the list of registered users to the console
    //Log the list of stations and how many sccoter at each station
  }
}

module.exports = ScooterApp
