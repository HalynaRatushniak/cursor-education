
let N = Number(prompt("Enter your first number"));
while (N <= 0 || isNaN(N) || !Number.isInteger(N)) {
    alert("Enter an integer");
    N = Number(prompt("Enter your first number again"));
}

let M = Number(prompt("Enter your second number"));
while (M <= N || isNaN(M) || !Number.isInteger(M)) {
    alert("Enter an integer and bigger than first number");
    M = Number(prompt("Enter your second number again"));
}

let numberToSkip = confirm("Do you want to skip even numbers?");

let sum = 0;

for (N; N <= M; N++) {
    if (numberToSkip) {
            sum += (N % 2 === 0) ? 0 : N; 
    }
        else {
            sum += N;
        }
    }
        document.writeln(`<h1>`, `Sum of numbers is: ${sum}`, `</h1`);

