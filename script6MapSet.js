// Map 


// let map1 = new Map([[1,2],[2,3],[3,4],[4,5]])
// console.log(map1)
// let map2 = new Map([["firstname","jinendra"],["lastname","gandhi"],["age",24]])
// console.log(map2)
// let map3 = new Map([["wholenumber",[1,2,3,4,5]],["decimal",[0.2,2.5,3.6,5.5]],["negative",[-1,-2,-3,-4]]])
// console.log(map3)


// let quiz = new Map([
//     ["question","answer"],
//     ["capital of MH","mumbai"],
//     ['capital of MP','bhopal'],
//     ['capital of UP','Lucknow']
// ])

// console.log(quiz)
// quiz.set("capital of rajasthan","jaipur")
// console.log(quiz)
// console.log(quiz.get("question"))
// console.log(quiz.size)

// quiz.delete("question")
// console.log(quiz)
// quiz.clear()
// console.log(quiz)
// console.log(quiz.has("capital of MH"))



// let a = quiz.entries()
// console.log(a)

// let b = [...quiz.entries()]
// console.log(b)
// console.log(b[0])
// console.log(b[0][0])


// // console.log(...quiz.entries())

// for(let [key,value] of quiz.entries()){
//     console.log(key,value)
// }

// for(let key of quiz.keys()){
//     console.log(key)
// }

// for(let value of quiz.values()){
//     console.log(value)
// }

//  Set--datastructure

const menu = new Set([
    
    'dosa',
    'wada',
    'dosa',
    'samosa',
    'pulav',
    'biryani'

])

console.log(menu)
console.log(menu.add("paper dosa")) 
console.log(menu.size)
// console.log(menu.clear())
console.log(menu.size)
console.log(menu)
console.log(menu.has("dosa"))
menu.delete("samosa")
console.log(menu)

for(let order of menu){
    console.log(order)
}

let b = ['A','B','C','B','C']
let unique = [...new Set(b)]
console.log(unique)
