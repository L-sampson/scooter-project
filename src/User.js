class User {
  // User code here
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  //Call this method in the ScooterApp
  login(password){
    if(password !== this.password){
      throw new Error("Incorrect password");
    }
    this.loggedIn = true;
  
  }

  //Call this method in the ScooterApp
  logout(){
    return this.username = null;
  }
}

module.exports = User
