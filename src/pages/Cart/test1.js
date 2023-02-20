let arr = [1, 2, 3, 4]
function odd(arr, n) {
    let result = []
    for (let i = 0; i < n - 1; i++) {
        let val = 0
        for (let j = i; j < n - 1; j++) {
            val += arr[j];
            if (val % 2 != 0) {
                result.push(arr[j])
            }
        }
    }
    return result

}
console.log(odd(arr, 4))


