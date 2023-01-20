// function logLampcolor(state) {
//   switch (state) {
//     case "yellow":
//       console.log("the lamp is on");
//       break;
//     case "blue":
//       console.log("The lamp is on");
//       break;
//     case "red":
//       console.log("the lamp is on");
//       break;
//     default:
//       console.log("The lamp is broken");
//   }
// }

// function trafficlight(color) {
//   return color === "green" ? "go" : "stop";
// }

// //for loop;

// console.log(trafficlight("green"));

// for (let i = 0; i <= 10; i++) {
//   console.log("hey");
// }

// //while loop;

// let i = 1;
// while (i < 10) {
//   console.log("whats up");
//   i++;
// }

// //do while loop;
// let j = 0;
// do {
//   console.log("hi how are you");
//   j++;
// } while (j < 10);

// //for of loop *if you want to print out every single thing in an array
// for (let todo of todos) {
//   console.log(todo.text);
// }

// //for in loop for object
// for (let todo in todos) {
//   console.log(todo[todo].text);
// }

// for (let todo of todos) {
//   if (todo.id === 2) {
//     console.log(todo.text);
//     continue; //if you dont wanna exit out of for loop and continue to the next iteration
//   }
//   console.log(todo.text);
// }

// //foreach doesnt return anything
// todos.forEach(function (todo, index, todoArray) {
//   console.log(todo.text);
// });
// //map
// const todoOutput2 = todo
//   .map(function (todo, index, todoArray) {
//     return todo; //simply return orifinal array
//   })

//   [(1, 2, 3)].map(function (number) {
//     return number * 2;
//   });
//output: {2,4,6}

// console.log(0 / 0);

// array = [7, 15, 32, 9, "3", "11", 2];
// console.log(array.pop());
// console.log(array.shift());

// console.log(array.push(6));
// console.log(array);

// var employee = [{ name: "Mark Klaus", age: 22 }];

// function increaseAge(employee) {
//   employee += 1;
// }

// console.log("Before:", employee[0].age);
// increaseAge(employee);
// console.log("After:", employee.length);

// console.log(employee);

// var name = 2;
// name = 3;

// console.log(name);

// var arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// function foo(m) {
//   var v = m[0][0];
//   for (let row of m) {
//     for (let element of row) {
//       if (v < element) v = element;
//     }
//   }
//   return v;
// }

// console.log(foo(arr[0]));
function foo(value, arr) {
  value = 1;
  arr[0] = 44;
}
var v = 3;
var arr = [1, 2, 3];
foo(v, arr);
console.log(v, arr[0]);

let ages = {
  Alan: 55,
  Bob: 33,
  Sara: 77,
};
console.log(`Sara is ${ages["Bob"]}`);

var myFun = function (a, b) {
  if (!b) {
    return a;
  }
  return myFun(b, a % b);
};
console.log(myFun(36, 15));

var fruits = ["apple", "banana", "orange"];
fruits.push("pear");
fruits.push("grapes");
fruits.splice(2, 2);
console.log(fruits);

const name = "myname";
const person = {
  [name]: "Alberto",
};
console.log(person.myname);

arr = [2, 3, 4];
function findMissingNumber(arr) {
  for (i = 1; i <= arr.length; i++) {
    if (i != arr[i - 1]) {
      return i;
    }
  }
}

console.log(findMissingNumber(arr));

var a = 0;
var a = 4;
a = 6;

let b = 1;
b = 2;

console.log(b);

console.log(a);
