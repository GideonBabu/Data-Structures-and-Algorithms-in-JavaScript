function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// O(1 + 1 + 1 + n/2 + 100)
// O(3 + n/2 + 100)
// O(103 + n/2) ---> 103 can be removed as it's constants
// O(n/2) --> 2 can be removed as it's constants
// O(n) 