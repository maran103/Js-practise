const bill ="abc"; 
const tipPercent =10;
let people = 3;
console.log(bill, tipPercent, people);

const tipAmount = (bill * tipPercent)/100;
const total  = bill + tipAmount;
const perPerson = total / people;

const compare = [bill, tipPercent, people,0];
for (const value of compare){
if(value){
    console.log("this will be printed because compare is truthy");
    console.log(value);
}
else{
    console.log("this will not be printed because compare is falsy");
}
}

if (bill<=0 || Number.isNaN(Number(bill))){
    console.log("invalid bill");
}
else if (tipPercent<0 || tipPercent>100 || Number.isNaN(Number(tipPercent)) || typeof tipPercent !== "number")
{
    console.log("invalid tip percentage");
}
else if (people < 1 || Number.isNaN(Number(people)) || typeof people !== "number")
{
    console.log("invalid number of people");
}
else
{
    console.log(total);
}

const label = tipPercent >=10 ? "generous tip": "good tip";
console.log(label);

//console.log(tipAmount, total, perPerson);

//console.log(perPerson.toFixed(2));
//console.log(typeof perPerson.toFixed(2));

//console.log("5"+3); // output will be 53 because of string concatenation

// console.log("5"-3); // output will be 2 because of type coercion

// console.log(5=="5"); // output will be true because of type coercion

// console.log(5==="5");// output will be false because === checks for both value and type, and here the types are different (number vs string)

// console.log(Number("5")+3); // output will be 8 because "5" is converted to number 5
// console.log(typeof null);
// console.log(typeof undefined);
console.log(Number.isNaN("false"));
