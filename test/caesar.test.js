const { expect } = require('chai');
const { caesar } = require('../src/caesar'); 

describe('Caesar Cipher Function', function () {
  it('Should return false if the shift value is not present', function () {
    expect(caesar('hello', undefined)).to.be.false;
  });

  it('Should return false if the shift value is equal to 0', function () {
    expect(caesar('hello', 0)).to.be.false;
  });

  it('Should return false if the shift value is less than -25', function () {
    expect(caesar('hello', -26)).to.be.false;
  });

  it('Should return false if the shift value is greater than 25', function () {
    expect(caesar('hello', 26)).to.be.false;
  });

  it('Spaces and non-alphabetic symbols should be maintained throughout', function () {
    const input = 'hello, world!';
    const shifted = caesar(input, 3);
    expect(shifted).to.equal('khoor, zruog!');
  });

  it('Capital letters should be ignored', function () {
    const input = 'Hello World';
    const shifted = caesar(input, 5);
    expect(shifted).to.equal('mjqqt btwqi');
  });

  it('Shifted letters should wrap around the alphabet', function () {
    const input = 'xyz';
    const shifted = caesar(input, 3);
    expect(shifted).to.equal('abc');
  });

  it('Shifted letters should wrap around the alphabet in reverse when decoding', function () {
    const input = 'abc';
    const decoded = caesar(input, 3, false);
    expect(decoded).to.equal('xyz');
  });
});
