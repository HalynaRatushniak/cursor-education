
let N = Number(prompt("Enter your first number"));
while (isNaN(N) || !Number.isInteger(N)) {
    alert("Enter an integer");
    N = Number(prompt("Enter your first number again"));
}

let M = Number(prompt("Enter your second number"));
while (isNaN(M) || !Number.isInteger(M)) {
    alert("Enter an integer");
    M = Number(prompt("Enter your second number again"));
}

let numberToSkip = confirm("Do you want to skip even numbers?");
let sum = 0;
for (N; N <= M; N++) {
    if (numberToSkip) {
        if (!(N % 2 === 0)) {
            sum += N;
        }
    } else {
        sum += N;
    }
    console.log(`Sum is: = ${sum}`);
}
