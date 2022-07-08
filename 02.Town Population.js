function solve(input) {

    let towns = {};

    for(let currTown of input) {
        let [town, population] = currTown.split(` <-> `);
        population = Number(population)
        if(!towns.hasOwnProperty(town)) {
            towns[town] = population;
        } else {
            towns[town] = towns[town] + population;
        }
    }
let arrOfTowns = Object.entries(towns);
arrOfTowns.forEach(x => console.log(`${x[0]} : ${x[1]}`));
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])