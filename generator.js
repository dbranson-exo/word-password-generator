const crypto = require('crypto');
const commonWords = require('./words');

class PasswordGenerator {
  constructor() {
    this.words = commonWords.filter(w => w.length >= 3);
  }

  /**
   * Generate a random password using common words
   * @param {number} wordCount - Number of words to use (3 or 4)
   * @param {Object} options - Additional options
   * @param {boolean} options.capitalize - Whether to capitalize first letter of each word
   * @param {boolean} options.numbers - Whether to add numbers between words
   * @param {boolean} options.symbols - Whether to add symbols between words
   * @param {string} options.separator - Character to separate words
   * @returns {string} Generated password
   */
  generatePassword(wordCount = 4, options = {}) {
    if (wordCount !== 3 && wordCount !== 4) {
      throw new Error('Word count must be 3 or 4');
    }

    const {
      capitalize = false,
      numbers = false,
      symbols = false,
      separator = ''
    } = options;

    // Select random words
    const selectedWords = [];
    const usedIndices = new Set();

    while (selectedWords.length < wordCount) {
      const randomIndex = crypto.randomInt(this.words.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        let word = this.words[randomIndex];
        
        if (capitalize) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        
        selectedWords.push(word);
      }
    }

    // Build password with separators
    let password = '';
    for (let i = 0; i < selectedWords.length; i++) {
      password += selectedWords[i];
      
      // Add separator if not last word
      if (i < selectedWords.length - 1) {
        if (numbers && symbols) {
          // Alternate between numbers and symbols
          const useNumber = i % 2 === 0;
          password += useNumber ? this.getRandomNumber() : this.getRandomSymbol();
        } else if (numbers) {
          password += this.getRandomNumber();
        } else if (symbols) {
          password += this.getRandomSymbol();
        } else {
          password += separator;
        }
      }
    }

    return password;
  }

  /**
   * Generate multiple passwords
   * @param {number} count - Number of passwords to generate
   * @param {number} wordCount - Number of words per password
   * @param {Object} options - Additional options
   * @returns {Array} Array of generated passwords
   */
  generateMultiple(count, wordCount = 4, options = {}) {
    const passwords = [];
    for (let i = 0; i < count; i++) {
      passwords.push(this.generatePassword(wordCount, options));
    }
    return passwords;
  }

  /**
   * Get a random digit (0-9)
   * @returns {string} Random digit
   */
  getRandomNumber() {
    return crypto.randomInt(10).toString();
  }

  /**
   * Get a random symbol
   * @returns {string} Random symbol
   */
  getRandomSymbol() {
    const symbols = '!@#$%^&*+=?';
    return symbols[crypto.randomInt(symbols.length)];
  }

  /**
   * Calculate password entropy (approximate)
   * @param {string} password - Password to analyze
   * @returns {Object} Entropy information
   */
  calculateEntropy(password) {
    const wordCount = password.split(/[^a-zA-Z]/).filter(word => word.length > 0).length;
    const wordEntropy = Math.log2(this.words.length) * wordCount;
    
    let charSet = 26; // lowercase letters
    if (/[A-Z]/.test(password)) charSet += 26; // uppercase
    if (/[0-9]/.test(password)) charSet += 10; // numbers
    if (/[^a-zA-Z0-9]/.test(password)) charSet += 10; // symbols (approximate)
    
    const charEntropy = password.length * Math.log2(charSet);
    
    return {
      wordCount,
      passwordLength: password.length,
      wordEntropy: Math.round(wordEntropy * 100) / 100,
      charEntropy: Math.round(charEntropy * 100) / 100,
      estimatedEntropy: Math.round(Math.max(wordEntropy, charEntropy) * 100) / 100
    };
  }
}

module.exports = PasswordGenerator;
