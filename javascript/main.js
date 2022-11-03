for (let i = 1; i <= 100; i++) {
    const multiplo3 = i % 3 === 0;
    const multiplo5 = i % 5 === 0;
    const multiplo15 = i % 3 === 0 && i % 5 === 0;

    // i = 15

    if (multiplo15) {

        console.log(`fizzbuzz`);
    }
    else if (multiplo5) {

        console.log(`buzz`);
    }
    else if (multiplo3) {

        console.log(`fizz`);
    }
    else {
        console.log(i);
    }
}