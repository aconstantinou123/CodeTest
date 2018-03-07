const assert = require("assert");

const diagnalDifference = matrix => {
    const lToRDiagonal = matrix[0][0] + matrix[1][1] + matrix[2][2];
    const rToLDiagonal = matrix[0][2] + matrix[1][1] + matrix[2][0];
    return Math.abs(lToRDiagonal - rToLDiagonal);
};

const threeByThree = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];

const anotherThreeByThree = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, -3]
];

const extraTest1 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

const extraTest2 = [
    [12.7, 200, 55.76],
    [99.565, 3, -1500],
    [56799, 122.544, -127965]
]

assert.equal(diagnalDifference(threeByThree), 0);
assert.equal(diagnalDifference(anotherThreeByThree), 6);
assert.equal(diagnalDifference(extraTest1), 15);
assert.equal(diagnalDifference(extraTest2), 184807.06);
