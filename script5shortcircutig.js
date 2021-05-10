// Short circuting in js 


// let a = parseInt(prompt("enter year of exp in testing"))

// if(a>=0){
//     console.log("training")
// }    
// else{
//     console.log("not eligible")
// }

// falsy values-- 0, null, undefined

// truthy values--- -3,1,2 'A', 'jinu'



// console.log(3 || 'Jonas')
// console.log('' || 'Chinmay')
// console.log(true || 0);
// console.log(null || undefined)
// console.log(undefined || 0 || '' || "Hello" || 23 || null)


// //Nullish coalescing operator (??)

// console.log(3 ?? 'Jonas')
// console.log('' ?? 'Chinmay')
// console.log(true ?? 0);
// console.log(null ?? undefined)
// console.log(undefined ?? 0 ?? '' ?? "Hello" ?? 23 ?? null)

// console.log('-----------')
// console.log(3 && 'Jonas')
// console.log('' && 'Chinmay')
// console.log(true && 0);
// console.log(null && undefined)
// console.log(undefined && 0 && '' && "Hello" && 23 && null)

//  literal object

// var wedding = {

//     numberofGuest: 50,
//     plates: 100,
//     menu: [ {pizza:"mushroom"},
//             {pizza:"paneer"}
//           ],

//     order: function(obj){
//         let {pizza} = obj;
//         console.log(`the order menu is ${pizza}`)
//         return pizza

//     }
// }

// let obj = wedding.menu[2] || {pizza:"spinach"}

// wedding.order(obj)

// let guest = wedding.numberofGuest || 10
// console.log(guest)

// //Nullish coalescing operator (??)

// null or undefined on left side operand then output is right side operand

// const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // expected output: 0



// let arr = ["A", "B", "C", "D", "E"]  // [0,"A"]
// let arr2 = ["F", "G", "H", "I", "J"] // [1,"B"]

// let a = [...arr, ...arr2]
// console.log(a)
// console.log(...a.entries())

// console.log(a.entries())

// for(let [index,value] of a.entries()){
//     console.log(index,value)
// }




// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }


