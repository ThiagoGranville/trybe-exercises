const longestWord = string => {
  const splicedString = string.split(' ');
  const sortedArray = splicedString.sort((a , b) => a.length - b.length);

  return sortedArray[sortedArray.length - 1];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));