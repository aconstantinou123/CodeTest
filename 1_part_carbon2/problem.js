const assert = require("assert");

const countWords = wordList => {
    var result = wordList.reduce(function (allWords, word) {
        var lowerCaseWord = word.toLowerCase();
        if(lowerCaseWord in allWords){
            allWords[lowerCaseWord]++;
        }
        else {
            allWords[lowerCaseWord] = 1;
        }
        return allWords;
    }, {});
    var stringResult = [];
    for (let prop in result){
        stringResult.push(` ${prop} ${result[prop]}`);
    }
    return stringResult.sort().toString().trim();
};

const simpleList = ["Cannellini", "baked", "cannellini", "kidney"];
const simpleList2 = ["Pig", "dog", "Cat", "cat"];

assert.equal(countWords(simpleList), "baked 1, cannellini 2, kidney 1");
assert.equal(countWords(simpleList2), "cat 2, dog 1, pig 1");
