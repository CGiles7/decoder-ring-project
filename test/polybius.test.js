const { expect } = require('chai');
const { polybius } = require("../src/polybius");

describe('Polybius Function', function () {
  it('Should return a string when encoding', function () {
    const encoded = polybius('hello', true);
    expect(encoded).to.be.a('string');
  });

  it('Should return a string with even number of characters', function () {
    const decoded = polybius('5254 4234', false);
    expect(decoded.length % 2).to.equal(1);
  });

  it('Spaces should be maintained throughout', function () {
    const encoded = polybius('hello world', true);
    const decoded = polybius('3251131343 2543241341', false);
    expect(encoded).to.equal('3251131343 2543241341');
    expect(decoded).to.equal('hello world');
  });

  it('Capital letters can be ignored', function () {
    const encoded = polybius('HeLLo WoRLD', true);
    const decoded = polybius('3251131343 2543241341', false);
    expect(encoded).to.equal('3251131343 2543241341');
    expect(decoded).to.equal('hello world');
  });

  it('Letters I and J should be encoded to 42', function () {
    const encoded = polybius('ij', true);
    expect(encoded).to.equal('4242');
  });

  it('Letters I and J should be decoded from 42 into both letters', function () {
    const decoded = polybius('4242', false);
    expect(decoded).to.equal('(i/j)(i/j)');
  });
});
