function solve(input) {
let result = {};

for(let i = 0; i < input.length; i+=2) {
    let  product = input[i];
    let  grams = input[i + 1];
    result[product] = Number(grams);
}
console.log(result)

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])