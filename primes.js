function main() {
    var l = [];
    for (var i = 0; i < 100; i++)
        if (isPrime(i))
            l.push(i);

    return l;
}

