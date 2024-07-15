

# <center> THE JAVASCRIPT 
## <center> Author :- Mayank Pratap

### Notes for JavaScript is here


## 1. Varibles in JavaScript 

```
let a = number;
var a = number;

let b = "string";
var b = "string";
```

String always have to be in double quote bacause string should have more than one word in it like "my name is mayank" this string contains 3 words.Number are not like it (22) is acceptable but (2 2) is not.<br>

var can be change like this, but not the let :-

```
let a = 2;
a = 2+4;   not allowed


var a = 2;
a = 2+4;    allowed
```
Constant (const) are the constant variable which value cannot be changed like this :-

```
const a = 3 ;
```
Example is here :-
```
    let a = 5;
    let b = 10;
    console.log(a + b + 10)

    let c = "macky";
    console.log(c)

    const d = 6;

    console.log(typeof a, typeof b, typeof c)

     {
        let a = 66;
        console.log(a)
    }
    {
        console.log(a)
    }

```
The let is variable which can be use globally and blocked.
The costant (const) is the unchangable variable.
we can use var at the place of let but var is only globally sutaible but let is convenient for use.

## 2. Types of data



```
    let x = "macky bhai";
    let y = 22;
    let z = 3.55;
    const f = true;
    let q = undefined;
    let r = null;

    console.log(x, y, z, f, q, r)
    console.log(typeof x, typeof y, typeof z, typeof f, typeof q, typeof r)

```
So we can find the type of data with the (typeof) command.
Like in this case the x = string , y = number , z = number , f = boolean , q = undefined , r = object. null always written as object because of the mistake and we cant fix it because alot of data is based on that.

## 3. Type of Opretors in JS

```
    console.log(first + sec)

    console.log(first - sec)

    console.log(first / sec)

    console.log(first * sec)

    console.log(first ** sec)

    console.log(first % sec)

    console.log(first == sec)

    console.log(first != sec)

    console.log(first ++ sec)

    console.log(first -- sec)

    console.log(first += sec)
```
(+) = addition <br>
(-) = subraction <br>
(/) = divide <br>
(*) = multiply<br>
(**) = square<br>
(%) = exponential <br>
(==) = equal to <br>
(!=) = not equale to <br>
(++) = encrement <br>
(--) = decrement <br>
(+=) = add and equal to <br>



## 4/1. If Else 

```
    let age = 5;

    if (age >= 18) {
        console.log("you can drive");
    }

    else {
        console.log("you can not drive yet");
    }
```

If Else means that if 'If' is true so the first statement appear but if 'If' is false its mean the Else is true and the second statement will appear based on the condition written in brackets of If.

## 4/2. If Else short way

```
  let age = 5;

    let pass = age > 18 ? (console.log("you can drive")) : (console.log("you can not drive yet"));
```

This is the short way to write the If Else statement the ? means IF and : means Else and (age > 18) > means the condition. 

## 4/3. If Else If Else ladder

```
    let age = 18;
    let grace = 2;

    if (age >= 18) {
        console.log("you can drive")
    }

    else if ((age + grace) >= 18) {
        console.log("you can drive but be carefull")
    }

    else {
        console.log("you can not drive yet")
    }
```
If Else If Else ladder is also work like a ladder and we can use more than one Else If statement in middle.

## 5. JS LOOPS

### 5/1. For Loop

```
    let a = 1;

    for (let macky = 0; macky < 20; macky++) {
        console.log(a + macky);
    }

```
It will print macky + a till macky < 20 becoms false statement.<br>
0. macky = 0 this is only for only first time <br>
1. macky < 20 =true<br>
2. confirm.log(a+macky)=1<br>
3. macky++ = 1 <br>
:- then repeat from 1 to 3 till macky < 20 = false  <br>

### 5/2. For In Loop

```
let bio = {
        name: "macky",
        role: "programmer",
        comapny: "master"
    }

    for (const key in bio) {
        const element = bio[key];
        console.log(key, element)
    }
```

 Key is the name,role,company side. <br>
 In this loop const is key in bio of let.<br>
 Element are the data like macky, programmer , master side.<br>
 Con.log print key and element of bio as written. <br>


### 5/3. For Of Loop

```
   for (const cop of "macky") {
        console.log(cop)
    }
```

 This loop is just spell each alphabat of the word given in the place of object written itrator place is like name for me i dont what is that but its just work like a name or variable


 ### 5/4. While Loop

 ```
let i = 0;
    while (i < 10) {
        console.log(i)
        i++;
    }
 ```

This is also just like for loop goes till false


### 5/5. Do While Loop

```

    let i = 0;
    do {
        console.log(i)
        i++;
    } while (i < 6);

```

## 6. JS Functions

### 6/1. Function 1

```
function nice(name) {
        console.log("Hey " + name + " you are very nice.")
        console.log("Hey " + name + " your thinking is very nice.")
        console.log("Hey " + name + " your T-sirt is very nice.")
        console.log("Hey " + name + " your friends are so nice.")
    }

    nice("dev")
```

### 6/2. Function 2

```
function sum(a, b) {
        console.log(a + b)
    }

    sum(3, 5)
```

### 6/2.1.  function 2.0 
 
 ```

    function sum(a, b) {
        return a + b
    }

    result = sum(3, 5)

    console.log("The sum of these number is: ", result)
 ```

This is why because of the return value Means 
that the 'sum' of two digits have to come in return from that 
function to 'sum'.

### 6/3. Function 3 

```
  const macky = (x) => {
        console.log("i am a const arrow function number", x)
    }

    macky(1)
    macky(2)
    macky(3)
    macky(4)
    macky(5)
```

this one function is reusable and convenient to code you can use both const or a let

### 6/3.1. Function 3.0

```
 let macky = (x) => {
        console.log("i am a let arrow function number", x)
    }

    macky(1)
    macky(2)
    macky(3)
```

## 7. JS Strings

### 7/1. Template Literals

```
  let name = "Macky"
    let friend = "Krishu"

    console.log("your name is " + name + " and your friend name is " + friend)
    console.log(`your name is ${name} and your friend name is ${friend}`)
```
the lower one is called template literal uses the backtick the button under escape and above tab

### 7/2.  String Functions

```
   console.log(a.toUpperCase())
    console.log(a.toLowerCase())
    console.log(a.length)
    console.log(a.slice(2))
    console.log(a.replace("ma", "11"))
    console.log(a.concat(" pratap"))
```

## 8. JS Arrays

```
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(a);
    console.log(typeof a);
    console.log(a.length);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a.toString());
    console.log(a.join(" and "))
    console.log(a[1]);
    a[1] = 11;
    console.log(a[1]);

    console.log(a.pop())
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

     let a1 = [1,2,3]
    let a2 = [4,5,6]
    let a3 = [7,8,9]

    console.log(a1.concat(a2,a3))
     

    let b = [1,2,5,4,3,7,9,0,8,6]
    for (let index = 0; index < b.length; index++) {
        const element = b[index];
        console.log(element)
```