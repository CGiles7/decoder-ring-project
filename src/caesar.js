// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  // Check if shift value is valid
  if (!shift || shift < -25 || shift > 25) {
    return false;
  }

  // Define the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Convert the input to lowercase
  const lowerInput = input.toLowerCase();

  let result = '';
    
  for (let i = 0; i < lowerInput.length; i++) {
    const currentChar = lowerInput[i];

    // Handle non-alphabetic characters
    if (!alphabet.includes(currentChar)) {
      result += currentChar;
      continue;
    }

    const currentIndex = alphabet.indexOf(currentChar);

    let shiftedIndex;

    // Calculate the shifted index based on encode flag
    if (encode) {
      shiftedIndex = (currentIndex + shift) % 26;
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }
    } else {
      shiftedIndex = (currentIndex - shift) % 26;
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }
    }

    const shiftedChar = alphabet[shiftedIndex];
    result += shiftedChar;
  }

  return result;
}

  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
