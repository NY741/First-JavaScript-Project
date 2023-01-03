
// 1. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

console.log("First Task:");
console.log("\n");


let n = 1000; // Random number

const startNumber = n;

let num = 0; // Iteration Count

for (i = 2; i < 100; i) {

    let result = n/i;

    n = result;

    if (result < 50) break;

    num++

    console.log(result);

}

console.log("\n");
console.log("Iteration count required to divide " + startNumber + " by 2 until 50 is: " + num);

// 2.1. Напишите функцию, создающую объект
// клиента банка, которая задает имя
// клиента, процентную ставку вклада и
// текущий баланс.

console.log("\n");
console.log("Second Task:");
console.log("\n");

function bankClient(name, interest, balance) {
    return {
        name,
        interest,
        balance,
    }
}

// 2.2. Создайте с ее помощью 10 объектов
// клиентов.

const clientArr = [];

clientArr.push(
    bankClient("Yusif", "0.15", 5000),
    bankClient("Elvin", "0.12", 4000), 
    bankClient("Ayan", "0.15", 2500),
    bankClient("Rauf", "0.13", 1000),
    bankClient("Emin", "0.2", 1500),
    bankClient("Nicat", "0.11", 3000),
    bankClient("Hikmat", "0.17", 2400),
    bankClient("Ramin", "0.22", 1600),
    bankClient("Vadim", "0.1", 2800),
    bankClient("Etibar", "0.25", 10000),
    );

console.log(clientArr);

// 2.3. Обновите баланс всех пользователей,
// прибавив к нему проценты за месяц.

let resultArr = clientArr.map((item, index) => {return item.balance = item.balance + (item.balance*item.interest)});

console.log(resultArr);

let resultString = resultArr.join('; <br>');

document.getElementById('balance').innerHTML = resultString;