// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  
  function polybius(input, encode = true) {
  const polybiusSquare = {
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
    12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
    14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
  };

  // Helper function to check if a character is a letter
  function isLetter(char) {
    return /[a-z]/i.test(char);
  }

  if (encode) {
    return [...input.toLowerCase()].map(char => {
      if (char === 'i' || char === 'j') {
        return '42'; // Convert both 'i' and 'j' to '42'
      } else if (isLetter(char)) {
        const key = Object.keys(polybiusSquare).find(key => polybiusSquare[key] === char);
        return key ? key.toString() : ''; // Find the corresponding key in the polybiusSquare
      } else {
        return char; // Maintain spaces and other characters as is
      }
    }).join('');
  } else {
    const withoutSpacesCount = input.replace(/\s/g, '').length;
    if (withoutSpacesCount % 2 !== 0) {
      return false; // Return false if the input has an odd number of characters (excluding spaces)
    }

    let decodedText = '';
    let i = 0;
    while (i < input.length) {
      const char = input[i];
      if (char === ' ') {
        decodedText += ' ';
        i++;
      } else {
        const key = input.slice(i, i + 2); // Extract the two-digit key
        if (key in polybiusSquare) {
          const decodedChar = polybiusSquare[key];
          decodedText += decodedChar === '(i/j)' ? '(i/j)' : decodedChar; // Convert '42' to '(i/j)'
          i += 2;
        } else {
          return false; // Return false if the key is not found in the polybiusSquare
        }
      }
    }

    return decodedText.toLowerCase();
  }
}



  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
