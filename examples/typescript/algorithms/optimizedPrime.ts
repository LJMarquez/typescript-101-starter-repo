function sayPrime(number: number): string[] {
    const numbers: string[] = [];
    let i: number = 1;

    while (i <= number) {
        if (i < 2) {
            numbers.push(i.toString());
        } else if (i === 2 || i === 3) {
            numbers.push("Prime");
        } else if (i % 2 === 0 || i % 3 === 0) {
            numbers.push(i.toString());
        } else {
            const limit = Math.floor(Math.sqrt(i));
            let prime: boolean = true;
            for (let j = 5; j <= limit; j += 6) {
                if (i % j === 0 || i % (j + 2) === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                numbers.push("Prime");
            } else {
                numbers.push(i.toString());
            }
        }
        i++;
    }
    return numbers;
}

console.log(sayPrime(50));