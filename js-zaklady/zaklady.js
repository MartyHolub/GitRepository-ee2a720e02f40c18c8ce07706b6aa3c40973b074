const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted : true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted : true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted : false
    },
];

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

const x = 6;
const y = 10
if(x > 5 || y>10){
    console.log('x is more than 5 or y is more than 10');
}
const a = 9;
const color = 'green';
switch(color){
    case 'red':{
        console.log('color is red');
        break;
    }
    case 'blue':{
        console.log('color is blue');
        break;
    }
    default:{
        console.log('color is not red or blue');
        break;
    }
}
const addNums = num1 => num1 + 5;

console.log(addNums(2));

todos.forEach((todo) => console.log(todo));

class Person{
    constructor(firstName,lastName,dob){
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
    }
getBirthYear() {
    return this.dob.getFullYear();
}
getFullName() {
    return `${firstName} ${lastName}`;   
}

}
const person1 = new Person('John', 'Smith', '1-4-2000');

console.log(person1);

