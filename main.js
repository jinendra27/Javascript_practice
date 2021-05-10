var person={

        name:"chinmay",
        age:20,
        skills:["java","javascript","css","css3","html"],
        family:{

            father:"shirish",
            mother:"kanchan",
            sister:"dhanashree",
            location:["chandrapur","nagpur","hyderabad"]
        }
   
}
for(var key in person){
    if(key=='family'){
        var a= person[key] 
        for(var keya in a)
        console.log(keya, a[keya])
    }
}
for(var a in person){
    if(a=='family'){
        var v= person[a]
        for(var c in v){
            if(c=='location'){
                var arr= v[c]
                for(var i=0;i<arr.length;i++){
                    console.log(arr[i])
                }

            }
        }
    }
}
let x;
console.log(x)
// var students = [

//     {
//         firstName:'Chinmay',
//         lastName:'deshpande',
//         age:40,
//         languages:'Marathi',
//         skills:['python','django','c','cypress','c++','selenium','java']

//     },

//     {
//         firstName:'Shirish',
//         lastName:'deshpande',
//         age:36,
//         languages:'English',
//         skills:['python','django2','c','cypress3','c++','selenium2','python2','python3']

//     },

//     {
//         firstName:'Manohar',
//         lastName:'deshpande',
//         age:32,
//         languages:'Hindi',
//         skills:['python','django','c','cypress','c++','selenium3','java3']

//     },

//     {
//         firstName:'Sayli',
//         lastName:'deshpande',
//         age:33,
//         languages:'Urdu',
//         skills:['django','c','cypress','c++','selenium3','java3']

//     },

//     {
//         firstName:'Sarika',
//         lastName:'Pansare',
//         age:35,
//         languages:'Urdu',
//         skills:['django','c','cypress','c++','selenium3','java3']

//     }

// ]

// var userPython = []
// for(let i = 0 ;i < students.length;i++){
// var a = students[i]
// if('django' in a.skills){
//     console.log(a.firstName)
// }
// }