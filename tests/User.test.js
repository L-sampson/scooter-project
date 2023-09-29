const User = require('../src/User')
//Mock instance of User Class
const user = new User("CoolinT", "5683TheLove", 32);
// User tests here
describe("Unit Test for User class", ()=>{
// test username
it("Test username", ()=>{
    expect(user.username).toBe("CoolinT");
})
// test password
it("Test password", ()=>{
    expect(user.password).toBe("5683TheLove");
})
it("Test Age", ()=>{
    expect(user.age).toBe(32);
})
it("Test Login", ()=>{
    user.login("5683TheLove");
    expect(user.loggedIn).toBe(true);
})
it("Test logout method", ()=>{
    user.logout();
    expect(user.username).toBe(null);
})
})





