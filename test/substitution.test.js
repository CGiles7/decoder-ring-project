const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('Substitution function tests', () => {
  it('Should maintain spaces throughout', () => {
    const input = 'hello world';
    const alphabet = 'xyzabcdefghijklmnopqrstuvw';
    const expectedOutput = 'ebiil tloia';
    expect(substitution(input, alphabet)).to.equal(expectedOutput);
  });

  it('Should ignore capital letters', () => {
    const input = 'Hello World';
    const alphabet = 'xyzabcdefghijklmnopqrstuvw';
    const expectedOutput = 'ebiil tloia';
    expect(substitution(input, alphabet)).to.equal(expectedOutput);
  });

  it('The alphabet parameter must be a string of exactly 26 characters', () => {
    const input = 'hello world';
    const invalidAlphabet = 'xyzabcdefghijklmnopqrstuv'; // Less than 26 characters
    
    expect(substitution(input, invalidAlphabet)).to.equal(false);
  });

  it('All characters in the alphabet parameter must be unique', () => {
    const input = 'hello world';
    const invalidAlphabet = 'xyzabcdefghijklmnopqrstuvwx'; // Contains duplicate 'x'
    
    expect(substitution(input, invalidAlphabet)).to.equal(false);
  });
});