// ^20. Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions.

// ^a) The First element is replaced by the multiplication of the first and second.
// ^b) The last element is replaced by multiplication of the last and second last.

// ^Example:

// ^Input  : arr[] = {2, 3, 4, 5, 6}
// ^Output : arr[] = {6, 8, 15, 24, 30}

let arr = [2, 3, 4, 5, 6]

let result = new Array(arr.length)

for (let i = 0; i < arr.length ; i++) {
    if (i == 0) result[i] = arr[i] * arr[i + 1]
    else if (i < arr.length - 1) {
        result[i] = arr[i - 1] * arr[i + 1]
    } else {

        result[i] = arr[arr.length - 2] * arr[arr.length - 1]
    }
}
console.log(result);
