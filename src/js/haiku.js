export default class Haiku{
  constructor(lineOne, lineTwo, lineThree){
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }

  numberOfWords(line){
    const words = line.split(" ");
    const wordsResult =  words.filter(word => word !== "");
    return wordsResult.length;
  }

  numberOfSyllable(line){
    const words = line.split(" ");
    let totalSyllableCount = 0;
    for(let i = 0; i < words.length; i++){
      const word = words[i];
      let matchResult =  word.match(/[aeiouy]{1,2}/gi);
      const syllableCount = matchResult ? matchResult.length : 0;
      totalSyllableCount += syllableCount;
    }
    return totalSyllableCount;
  } 
}