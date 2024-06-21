console.log("hello world")



{
    let a = 5;
    let b = 10;
    console.log(a + b + 10)

    let c = "macky";
    console.log(c)

    console.log(typeof a, typeof b, typeof c)


    const d = 6;
    // const is the constant it can never be changed from anywhere else|




    {
        let a = 66;
        console.log(a)
        // it will show 66 not 7 as written on top because let is the block scope data type and var global scope always in all situation | if i did not write the let with 66 console will take the global vaiable of top |
    }

    {
        console.log(a)
    }
}


{

    let x = "macky bhai";
    let y = 22;
    let z = 3.55;
    const f = true;
    let q = undefined;
    let r = null;

    console.log(x, y, z, f, q, r)
    console.log(typeof x, typeof y, typeof z, typeof f, typeof q, typeof r)

}


{

    let age = 5;

    if (age > 18) {
        console.log("you can drive");
    }

    else {
        console.log("you can not drive yet");
    }
}


{
    // this is the way to write the if else in time saving way

    let age = 5;

    let pass = age > 18 ? (console.log("you can drive")) : (console.log("you can not drive yet"));
}


{

    let first = 10;
    let sec = 10;

    console.log(first)
    console.log(sec)

    console.log(first + sec)
    console.log(first - sec)
    console.log(first / sec)
    console.log(first * sec)
    console.log(first ** sec)
    console.log(first % sec)
    if (first == sec) {
        console.log("true")
    }

    else {
        console.log("false")
    }
}


{
    // ifeslse ladder = if, else if, else

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
}

// from here the loops are starting for loops, for in loops, for of loops, for each loop, while loop, do while loop 

// warning for infinite loop.dont do it.

{
    // this is a for loop

    console.log("the javascript loops")

    let a = 1;

    for (let macky = 0; macky < 100; macky++) {
        console.log(a + macky);
    }

    //     steps of this loop is 
    //    0 macky = 0 this is only for only first time 
    //    1 macky < 100 =true
    //    2 confirm.log(a+macky)=1
    //    3 macky++ = 1 
    //    - then repeat from 1 to 3 till macky<100 = false  

}

{
    // for in loop

    let bio = {
        name: "macky",
        role: "programmer",
        comapny: "master"
    }

    for (const key in bio) {
        const element = bio[key];
        console.log(key, element)
    }

    // key is the name,role,company side 
    // in this loop const is key in bio of let
    // element are the data like macky, programmer , master side
    // con.log print key and element of bio as written 

}

{
    // for of loop

    for (const cop of "macky") {
        console.log(cop)
    }

    // this loop is just spell each alphabat of the word given in the place of object written itrator place is like name for me i dont what is that but its just work like a name or variable

}