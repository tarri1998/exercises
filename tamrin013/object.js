const person = {
  first: "ali",
  last: "tarri",
  height: 180,
  jobtitle: "web developer",
  bio: function () {
    return `${this.first}${this.last} is a ${this.jobtitle} and is ${this.height} cetemeter.`;
  },
  fulname: function () {
    return `${this.first} ${this.last}`;
  },
};
console.log(person.bio());
console.log(person.fulname());
