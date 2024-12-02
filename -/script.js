// let name = "noona's fruit store";
// let fruits = ["banana", "apple", "mango"];
// let address = "Seoul";

// let store = {
//     name,
//     fruits,
//     address,
// };
// console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다.`);

// function calculate(obj) {
//     let { a, b, c } = obj;
//     return a + b + c;
// }

// calculate({ a: 1, b: 2, c: 3 });

// let name = "noona store";
// let fruits = ["banana", "apple", "mango"];
// let address = {
//     country: "Korea",
//     city: "Seoul",
// };

// function findStore(obj) {
//     return (name = "noona store" && city == "Seoul");
// }

// console.log(findStore({ name, fruits, address }));

function sumNumber() {
    //여기를 바꾸시오
    let addNumber = (a) => (b) => (c) => a + b + c;
    return addNumber(1)(2)(3);
}

console.log(sumNumber());
