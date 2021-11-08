// function factorialize(num) {
//   var result = 1;
//   for(var i = 1;i<=num;i++){
//       result *= i;
//   }  
//   return result;
// } 
// console.log(factorialize(8));
function factorialize(num) {
    if(num == 1||num === 0){
        return 1;
    }
    else{
        return (num * factorialize(num-1));
    }
}
console.log(factorialize(5));