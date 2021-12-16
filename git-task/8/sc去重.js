function newArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}

// function newArr(arr) {
//     // return Array.from(new Set(a))
//     return [...new Set(arr)];
// }



// function newArr(arr) {
//     var arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr2.indexOf(arr[i] == -1)) {
//             arr2.push(arr[i])
//             arr2.sort();
//         }
//     } return arr2
// }//这个没实现
let arr = [1, 2, 5, 5, 4, 4, 9, 9, 5, 4, 3, 2, 1];
arr.sort(function (a, b) {
    return a - b
});

console.log(newArr(arr));