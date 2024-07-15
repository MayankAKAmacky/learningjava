// NAN = Not A Number
// undefined = not given the value
// null is the object (this is a mistake done by the creator of JavaScript )
// but this can not be changed because alot of old code of old programmesis depended on it.
console.log("hello world");

{
  // some variables

  let a = 5;
  let b = 10;
  console.log(a + b + 10);

  let c = "macky";
  console.log(c);

  const d = 6;

  console.log(typeof a, typeof b, typeof c, typeof d);

  // const is the constant it can never be changed from anywhere else|

  {
    let a = 66;
    console.log(a);
    // it will show 66 not 7 as written on top because let is the block scope data type and var global scope always in all situation | if i did not write the let with 66 console will take the global vaiable of top |
  }

  {
    console.log(a);
  }
}

{
  let x = "macky bhai";
  let y = 22;
  let z = 3.55;
  const f = true;
  let q = undefined;
  let r = null;

  console.log(x, y, z, f, q, r);
  console.log(typeof x, typeof y, typeof z, typeof f, typeof q, typeof r);
}

{
  let age = 5;

  if (age > 18) {
    console.log("you can drive");
  } else {
    console.log("you can not drive yet");
  }
}

{
  // this is the way to write the if else in time saving way

  let age = 5;

  let pass =
    age > 18
      ? console.log("you can drive")
      : console.log("you can not drive yet");
}

{
  let first = 10;
  let sec = 10;

  console.log(first);
  console.log(sec);

  console.log(first + sec);
  console.log(first - sec);
  console.log(first / sec);
  console.log(first * sec);
  console.log(first ** sec);
  console.log(first % sec);
  if (first == sec) {
    console.log("true");
  } else {
    console.log("false");
  }
}

{
  // ifeslse ladder = if, else if, else

  let age = 18;
  let grace = 2;

  if (age >= 18) {
    console.log("you can drive");
  } else if (age + grace >= 18) {
    console.log("you can drive but be carefull");
  } else {
    console.log("you can not drive yet");
  }
}

// from here the loops are starting for loops, for in loops, for of loops, for each loop, while loop, do while loop
// |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
// warning for infinite loop.dont do it.

{
  // this is a for loop

  console.log("the javascript loops");

  let a = 1;

  for (let macky = 0; macky < 20; macky++) {
    console.log(a + macky);
  }

  //     steps of this loop is
  //    0 macky = 0 this is only for only first time
  //    1 macky < 20 =true
  //    2 confirm.log(a+macky)=1
  //    3 macky++ = 1
  //    - then repeat from 1 to 3 till macky < 20 = false
}

{
  // for in loop

  let bio = {
    name: "macky",
    role: "programmer",
    comapny: "master",
  };

  for (const key in bio) {
    const element = bio[key];
    console.log(key, element);
  }

  // key is the name,role,company side
  // in this loop const is key in bio of let
  // element are the data like macky, programmer , master side
  // con.log print key and element of bio as written
}

{
  // for of loop

  for (const cop of "macky") {
    console.log(cop);
  }

  // this loop is just spell each alphabat of the word given in the place of object written itrator place is like name for me i dont what is that but its just work like a name or variable
}

{
  // while loop

  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }

  // this is also just like for loop goes till false
}

{
  // do while loop

  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 6);
}

// from here the functions are starting |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|

{
  // function 1|

  function nice(name) {
    console.log("Hey " + name + " you are very nice.");
    console.log("Hey " + name + " your thinking is very nice.");
    console.log("Hey " + name + " your T-sirt is very nice.");
    console.log("Hey " + name + " your friends are so nice.");
  }

  nice("dev");
}

{
  // fundtion 2

  function sum(a, b) {
    console.log(a + b);
  }

  sum(3, 5);
}

{
  // function 2.0

  function sum(a, b) {
    return a + b;
  }

  result = sum(3, 5);

  console.log("The sum of these number is: ", result);

  // This is why because of the return value Means
  // that the 'sum' of two digits have to come in return from that
  // function to 'sum'.
}

{
  // function 3
  // this is a arrow function

  const macky = (x) => {
    console.log("i am a const arrow function number", x);
  };

  macky(1);
  macky(2);
  macky(3);
  macky(4);
  macky(5);

  // this one function is reusable and convenient to code you can use both const or a let ||
}

{
  // function 3.0 with let

  let macky = (x) => {
    console.log("i am a let arrow function number", x);
  };

  macky(1);
  macky(2);
  macky(3);
}

// deep study of strings

{
  // the lower one is called template literal uses the backtick the button under escape and above tab||

  let name = "Macky";
  let friend = "Krishu";

  console.log("your name is " + name + " and your friend name is " + friend);
  console.log(`your name is ${name} and your friend name is ${friend}`);
}

{
  // in this case the 1 is first letter
  let a = "mayank";

  console.log(a.toUpperCase());
  console.log(a.toLowerCase());
  console.log(a.length);
  console.log(a.slice(2));
  console.log(a.replace("ma", "11"));
  console.log(a.concat(" pratap"));
}

// Arrays are starting from here |_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|

{
  // Arrays are the collection of data like below.||
  // Arrays are mutable we can change them.
  // not like the strings which are immutable.

  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // index[0, 1, 2, 3, 4, 5, 6, 7, 8, 09] counting goes like this
  console.log(a);
  console.log(typeof a);

  console.log(a.length);

  console.log(a[1]);
  console.log(a[2]);

  // array convert to string
  console.log(a.toString());

  // it replace the commas with and or any other word you write in brackets
  console.log(a.join(" and "));

  // change in array
  console.log(a[1]);
  a[1] = 11;
  console.log(a[1]);

  console.log(a.pop());
  console.log(a);

  console.log(a);
  console.log(a.push(10));

  console.log(a);
  console.log(a.push("macky"));

  console.log(a);
  console.log(a.shift());

  console.log(a);
  console.log(a.unshift(1));

  console.log(a);
  // this function take down the last element in the array like 10 in this case
  // like the pop method which pull out the value this function put down the value i can insert the word too shift takes out the first value from the array shift is put value on the first value

  // concatination in below

  let a1 = [1, 2, 3];
  let a2 = [4, 5, 6];
  let a3 = [7, 8, 9];

  console.log(a1.concat(a2, a3));
  // this is the concatination function just like strings

  let b = [1, 2, 5, 4, 3, 7, 9, 0, 8, 6];
  for (let index = 0; index < b.length; index++) {
    const element = b[index];
    console.log(element);
  }

  let arr = [];
  arr[0] = "Mayank Pratap";
  arr[1] = "Macky Singh";
  arr[2] = "Maggie";
  arr[3] = "Krish";
  arr[4] = "Harry";

  console.log(arr);
  console.log(arr.pop());
  console.log(arr.shift());
  console.log(arr.unshift());
  console.log(arr);

  console.log(arr.length);
  console.log(arr.push("Mayank Pratap"));
  console.log(arr.push("Maggie"));
  console.log(arr);
  console.log(arr.length);

  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }

  arr.forEach(function (fruit) {
    console.log(fruit);
  });

  // https://www.geeksforgeeks.org/javascript-indexed-collections/
  // this is the link of geeks of geeks website related to this topic.
}

let move = "paper";
let computerMove = "";
let chance = Math.random();
let result = "";

function moveByComputer() {
  if (chance >= 0 && chance < 1 / 3) {
    computerMove = "rock";
  } else if (chance >= 1 / 3 && chance < 2 / 3) {
    computerMove = "paper";
  } else if (chance >= 2 / 3 && chance < 1) {
    computerMove = "scissors";
  }
}

function answer() {
  if (move === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = " lose.";
    } else if (computerMove === "scissors") {
      result = " win.";
    }
  } else if (move === "paper") {
    if (computerMove === "rock") {
      result = " win.";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = " lose.";
    }
  } else if (move === "scissors") {
    if (computerMove === "rock") {
      result = " lose.";
    } else if (computerMove === "paper") {
      result = " win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }
}

moveByComputer();
answer();

console.log(`your move is ${move}`);
console.log(`Computer choses to play ${computerMove}`);
console.log(`The result is ${result}`);
console.log(chance);

console.log("hello");
