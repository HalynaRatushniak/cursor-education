export function getRandomNumberHW3(N, M) {
    let randomNumber = Math.floor(Math.random() * (M - N+1) + N);
    return randomNumber;
}