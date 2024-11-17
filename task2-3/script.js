////////////Tasks 2//////////

const num=[1,2,3,44,55,66,10]
const calculate =(num)=> {
    if (num.length === 0) {
        return { sum: 0, average: 0 };
    }

    const sum = num.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / num.length;

    return { sum, average };
}

const result = calculate(num);
console.log(`\n --------- Tasks 2 ---------- \n`);
console.log(`Total Sum: ${result.sum}`);
console.log(`Average: ${result.average}`);

///////////////////Tasks 3////////////

const array = ["islam", "Sara", "Ahmed", "islam", "Sara"];

function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    return [...uniqueSet];
}
const uniqueArray = removeDuplicates(array);
console.log(`\n ---------Task 3--------- \n`);
console.log(`array with Duplicate names: ${array}`);
console.log(`array without Duplicate names: ${uniqueArray}`); 




