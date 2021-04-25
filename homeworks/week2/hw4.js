function printFactor(n) {
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                console.log(i)
            }
        }
    }
}

printFactor(10);
