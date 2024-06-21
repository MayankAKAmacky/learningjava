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


