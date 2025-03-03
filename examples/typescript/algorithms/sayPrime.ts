function sayPrime(n: number): string[] {
    const result: string[] = [];
    // for (let i = 1; i <= n; i++) {
    //     if (i % 2 === 0 && i !== 2) {
    //         result.push(i.toString());
    //     } else if (i % 3 === 0 && i !== 3) {
    //         result.push(i.toString());
    //     } else if (i % 5 === 0 && i !== 5) {
    //         result.push(i.toString());
    //     } else if (i % 7 === 0 && i !== 7) {
    //         result.push(i.toString());
    //     } else {
    //         result.push("Prime");
    //     }
    // }

    const primes: number[] = [2, 3, 5, 7];
    for (let i = 1; i <= n; i++) {
        let isPrime: boolean = true;
        for (let j = 0; j <= primes.length - 1; j++) {
            if (i !== primes[j] && i % primes[j] === 0) {
                isPrime = false;
            }
        }
        isPrime ? result.push("Prime") : result.push(i.toString());
    }

    return result;
}

console.log(sayPrime(50));