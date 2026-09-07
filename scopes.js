//Global Scopes

// const userName = 'Rakesh';
// function fun1(){
//     console.log(userName);
// }

// fun1()


// =============++=======

//Functional scopes --> A variable declared inside a function is accessible inside that function, but not outside.

// function calculatePrice(price, tax){
//     const amount = price * tax
//     const total = price + amount

//     console.log(total)
// }


// calculatePrice(240, 12)


// ========++++

// Block Scope - This one is extremely important with modern JavaScript. A block is anything surrounded by { }


const age = 17;

if(age >= 18){
    let message = 'Adult'
    console.log(message)
} else{
    let message = 'Minor'
    console.log(message)

}

