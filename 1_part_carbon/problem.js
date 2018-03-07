const assert = require("assert");

const diagnalDifference = matrix => {
    var lToRDiagonal = 0;
    for(let i = 0; i < matrix.length; i++){
        lToRDiagonal += matrix[i][i];
    }
    var rToLDiagonal = 0;
    for(let i = 0; i < matrix.length; i++){
        rToLDiagonal += matrix[i][matrix.length - (i + 1)];
    }
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


const sixBysix = [
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, -5, 5],
    [6, 6, 6, 6, 6, -6]
]

const nineBynine = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, -5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, -6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, -7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, -8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, -9],
]

assert.equal(diagnalDifference(threeByThree), 0);
assert.equal(diagnalDifference(anotherThreeByThree), 6);
assert.equal(diagnalDifference(sixBysix), 22);
assert.equal(diagnalDifference(nineBynine), 60);
