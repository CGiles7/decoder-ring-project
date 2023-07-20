// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
    if (!isValidAlphabet(alphabet)) {
      return false; // Invalid alphabet
    }

    const normalizedInput = input.toLowerCase(); // Convert input to lowercase
    const normalizedAlphabet = alphabet.toLowerCase(); // Convert alphabet to lowercase

    if (encode) {
      return [...normalizedInput].map(char => {
        if (char === ' ') {
          return ' '; // Maintain spaces as is
        } else {
          const index = char.charCodeAt(0) - 97; // Get the index of the character in the alphabet
          return normalizedAlphabet[index]; // Replace the character with the corresponding character in the alphabet
        }
      }).join('');
    } else {
      return [...normalizedInput].map(char => {
        if (char === ' ') {
          return ' '; // Maintain spaces as is
        } else {
          const index = normalizedAlphabet.indexOf(char); // Get the index of the character in the alphabet
          return String.fromCharCode(index + 97); // Replace the character with the corresponding character in the lowercase alphabet
        }
      }).join('');
    }
  }

// Helper function to validate the alphabet
function isValidAlphabet(alphabet) {
  if (typeof alphabet !== 'string' || alphabet.length !== 26) {
    return false; // Alphabet must be a string of exactly 26 characters
  }

  const uniqueChars = new Set(alphabet.toLowerCase()); // Create a set of unique lowercase characters in the alphabet

  return uniqueChars.size === 26; // Return true if the set contains 26 characters, i.e., all characters are unique
}



  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
