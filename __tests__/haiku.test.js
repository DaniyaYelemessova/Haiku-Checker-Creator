import Haiku from '../src/js/haiku.js';

describe('Haiku', () => {

  test('should correctly create an object with three lines', () => {
    const haikuPoem = new Haiku("first line", "second line", "third line");
    expect(haikuPoem.lineOne).toEqual("first line");
    expect(haikuPoem.lineTwo).toEqual("second line");
    expect(haikuPoem.lineThree).toEqual("third line");
  });

  test('should return the correct number of words', () => {
    const haikuInstance = new Haiku();
    expect(haikuInstance.numberOfWords('An old silent pond')).toBe(4);
    expect(haikuInstance.numberOfWords('A frog jumps into the pond')).toBe(6);
    expect(haikuInstance.numberOfWords('Splash! Silence again.')).toBe(3);
  });

  test('should return the correct number of syllables', () => {
    const haikuInstance = new Haiku();
    const numberOfSyllables = haikuInstance.numberOfSyllable('An old silent pond');
    expect(numberOfSyllables).toBe(5); 
  });
});

