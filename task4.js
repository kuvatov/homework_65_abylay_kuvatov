let duck = {
    name: "Дональд",
    color: "белый",
    age: "1",
    toStr: function() {
      return `${this.name}, ${this.color}, ${this.age} год`;
    },
    say: function() {
      return "кря кря";
    }
  };
  
console.log(duck.toStr());
console.log(duck.say());