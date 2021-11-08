 let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
  let myFlat = (arr) => {
    return arr.reduce((pre,cur) =>{
       if(Array.isArray(cur)=== true){
           return [...pre,...myFlat(cur)]
       }else{
           return [...pre, cur]
       }
    },[])
  }
 

 console.log(myFlat(arr));