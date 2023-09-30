const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp  {
  // ScooterApp code here
  constructor(){
//Use this. to reference the Scooter App object. 
    this.stations ={
  "Inner Harbor" : [],
  "Fells Point" : [], 
  "Camden Yards" : [], 
  "Federal Hill" : []
}
this.registeredUsers ={};
  }
  
  registerUsers(username, password, age){
    if(!this.registeredUsers[username] && age>= 18){//Registers users that are not in the list and over 18.
      this.registeredUsers[username] ={//Adds username to empty array. 
        password: password, 
        age: age
      }
      console.log("User has been registerd");
      return this.registeredUsers[username];
    }
    throw new Error("Already registered or to young to register");
  }

  
  loginUser(username, password){
    if(!this.registeredUsers[username]||!password){//If username is not in the array or wrong password
      throw new Error("Username or password is incorrect");
    }
    const user = new User(username, password, age);//new instance of user from User class. 
    user.login(password);//Calls user methods with password parameter. 
    console.log("User has been logged in");
  }

  logoutUser(username){
    if(!this.registeredUsers[username]){//Checks if user is already logged. 
      throw new Error("No such user is logged.")
    }
    user.logout();
    console.log("User is logged out");
  }

  createScooter(station){
    //throw new error if station does not exist.
    if(!this.stations[station]){
      throw new Error("No such station error");
    }
    //Create new scooter, add it to station list and set its station property
    const scooter = new Scooter(station);//new instance of scooter & station as parameter. 
    this.stations[station].push(scooter);
    console.log("Created new scooter");
    return scooter;
     
  }

  dockScooter(scooter, station){
    //throw new error if station does not exist
    if(!this.station[station]){
      throw new Error("no such station")
    }
    //throw error if scooter is already there.
    else if(this.stations[station].includes(scooter)){//use includes to verify that the scooter is part of the list. 
      throw new Error("Scooter already at station");
    } 
    scooter.dock(station);//dock method using scooter class
    this.station[station].push(scooter);
    //add the scooter to the stations scooter list and dock it
    console.log("Scooter is docked");
  }

  rentScooter(scooter, user){
    //if scooter is already rented throw the error "scooter already rented"
    if(!this.stations[station].includes(scooter)){
      throw new Error("Scooter already rented");
    }
    //locate the given scooter at one of the stations and remove it from station
    //rent it to user
    scooter.rent(user);
    this.stations[station].splice(index, 1);
    console.log("Scooter is rented");
    
  }

  print(){
    //Log the list of registered users to the console
    //Log the list of stations and how many sccoter at each station
    console.log("Regiested Users: ");
    for(const username in this.registeredUsers){
      console.log(`Username: ${username}, Age: ${this.registeredUsers[username].age}`)
    }
    console.log("List of Stations and Scooters: ");
    for(const station in this.stations){
      const scooters = this.stations[station].length;
      console.log(`${station}: ${scooters} scooters`);
    }
  }
}

const app = new ScooterApp();
app.registerUsers("CoolinT", "1234", 32);
app.registerUsers("Britt", "5678", 35);

app.createScooter("Inner Harbor");
app.createScooter("Fells Point");
app.createScooter("Camden Yards");

app.print();

module.exports = ScooterApp
