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
   * @param {boolean} options.capitalize - Whether to capitalize first letter of every word
   * @param {boolean} options.capitalizeFirst - Whether to capitalize only the first word
   * @param {number} options.numberCount - How many random digits to include (0-9)
   * @param {number} options.symbolCount - How many random symbols to include (0-9)
   * @param {string} options.separator - Character to separate words
   * @param {string} options.placement - Where to place digits/symbols: 'end' (default) or 'between'
   * @returns {string} Generated password
   */
  generatePassword(wordCount = 4, options = {}) {
    if (wordCount !== 3 && wordCount !== 4) {
      throw new Error('Word count must be 3 or 4');
    }

    const {
      capitalize = false,
      capitalizeFirst = false,
      numberCount = 0,
      symbolCount = 0,
      separator = '',
      placement = 'end'
    } = options;

    // Select random words
    const selectedWords = [];
    const usedIndices = new Set();

    while (selectedWords.length < wordCount) {
      const randomIndex = crypto.randomInt(this.words.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        let word = this.words[randomIndex];
        const isFirst = selectedWords.length === 0;

        if (capitalize || (capitalizeFirst && isFirst)) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        selectedWords.push(word);
      }
    }

    // Build extras: shuffled mix of requested numbers and symbols
    const extras = [];
    for (let i = 0; i < numberCount; i++) extras.push(this.getRandomNumber());
    for (let i = 0; i < symbolCount; i++) extras.push(this.getRandomSymbol());
    for (let i = extras.length - 1; i > 0; i--) {
      const j = crypto.randomInt(i + 1);
      [extras[i], extras[j]] = [extras[j], extras[i]];
    }

    if (placement === 'between' && extras.length > 0) {
      // Distribute extras randomly across the gaps between words
      const gapExtras = Array.from({ length: wordCount - 1 }, () => []);
      for (const extra of extras) {
        gapExtras[crypto.randomInt(wordCount - 1)].push(extra);
      }
      let password = selectedWords[0];
      for (let i = 0; i < wordCount - 1; i++) {
        password += gapExtras[i].join('') + separator + selectedWords[i + 1];
      }
      return password;
    }

    // Default: append extras as suffix
    return selectedWords.join(separator) + extras.join('');
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
