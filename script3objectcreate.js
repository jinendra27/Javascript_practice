
// class user {

//     constructor(fullname, aadharcard) {

//         this.fullname = fullname;
//         this.aadharcard = aadharcard
//     }

// }

// class account extends user {

//     constructor(fullname, aadharcard, bal, accountnumber, pin) {
//         super(fullname, aadharcard)
//         this.bal = bal
//         this.accountnumber = accountnumber
//         this.pin = pin
//         this.transaction1 = []

//     }

//     gettransaction(){

//         if(this.transaction1.length === 0){
//             console.log('no transactions')
//         }
//         else{
//             for(var i = 0; i < this.transaction1.length; i++){
//                 if(i === 5){
//                     break;
//                 }
//                 console.log(this.transaction1[i])
//             }
//             // let [a,b,c,d,e] = this.transaction1
//             // console.log(`first transaction is ${a}`)
//             // console.log(`second transaction is ${b}`)
//             // console.log(`third transaction is ${c}`)
//             // console.log(`forth transaction is ${d}`)
//             // console.log(`fifth transaction is ${e}`)
//         }
//     }

//     deposit(amt){
//         this.bal += amt;
//         this.transaction1.unshift(amt);
//     }

//     withdraw(amt){
//         var userpass = parseInt(prompt('enter the pin'))
//         if(userpass === this.pin){
//             this.bal -= amt;
//             this.transaction1.unshift(-amt);
//           }
//         else{
//             console.log('incorrect pin');
//         }
//     }
    
//     balance(){
//         console.log(this.bal)
//     }

//     requestloan(value){
//         if(this.approveloan()){
//             this.deposit(value)
//         }
//     }

//     approveloan(){
//         return true
//     }

//     totaltran(){
//         let totalTrans = this.transaction1.reduce((acc, vl)=>{
//             acc += vl;
//             return acc
//         })
//         return totalTrans;
//     }

//     static help(){
//         console.log('create acc')
//         console.log('call on no 7058220277')
//         console.log('welcome to minskole')

//     }

// }

// let jinendra = new account(fullname = 'jinendra gandhi', aadharcard = 'AB111', bal = 10000, accountnumber= 234, pin = 2020)
// jinendra.deposit(2000)
// // jinendra.deposit(4000)
// // jinendra.deposit(4000)
// // jinendra.deposit(4000)
// // jinendra.deposit(6000)
// jinendra.withdraw(1000)
// jinendra.balance()

// jinendra.requestloan(50000)
// jinendra.balance()
// jinendra.gettransaction()
// console.log(jinendra.totaltran())
// account.help()
