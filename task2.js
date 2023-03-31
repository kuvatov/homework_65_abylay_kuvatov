function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum / list.length;
}

let first = average([1, 5, 12, 4, 3]);
let second = average([2, 3, 4, 5, 6, 7, 8, 9, 10]);
let third = average([3, 10, 17]);

console.log(first);
console.log(second);
console.log(third);