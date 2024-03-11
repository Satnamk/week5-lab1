//Using map to Extract Lengths of Strings

const words = ["apple", "banana", "cherry", "date"];
const lengths = words.map(function(word) {
  return word.length;
});
console.log(lengths);