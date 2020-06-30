
// Functionally creating objects in JS
// function Car(make, model) {
//   this.make = make
//   this.model = model 
// }

// Car.prototype.sayName = function(){
//   return `I am a ${this.make} ${this.model}`
// }

// This is class syntax to do the above 
class Car{
  constructor(make, model){
    this.make = make
    this.model = model 
  }

  // This is the equivalent to Ruby class method, can be called on Class, not Instances 
  // Static Method is a more universal way of referring to what Ruby calls Class Methods 
  static logSomething() {
    return 'I am Static method.'
  }

  sayName(){
    return `I am a ${this.make} ${this.model}`
  }
}

class SUV extends Car{
  constructor(make, model, year, color){
    // calls the constructor of Car aka the Parent Class (super())
    super(make, model)
    this.year = year
    this.color = color
  }

  addMileage(miles){
    this.mileage = miles
  }

  sayMore(){
    return `${this.sayName()} made in ${this.year}`
  }
}

// let jeep = new Car('Jeep', 'Wrangler')

