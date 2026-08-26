class PasswordGenerator {
  constructor() {
    this.words = commonWords.filter(w => w.length >= 3);
    this.symbols = '!@#$%^&*+=?';
  }

  getRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  generatePassword(wordCount = 4, options = {}) {
    if (!Number.isInteger(wordCount) || wordCount < 3) {
      throw new Error('Word count must be at least 3');
    }

    const {
      capitalize = false,
      capitalizeFirst = false,
      numberCount = 0,
      symbolCount = 0,
      separator = '',
      placement = 'end'
    } = options;

    const selectedWords = [];
    const usedIndices = new Set();

    while (selectedWords.length < wordCount) {
      const randomIndex = this.getRandomInt(this.words.length);
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
      const j = this.getRandomInt(i + 1);
      [extras[i], extras[j]] = [extras[j], extras[i]];
    }

    if (placement === 'between' && extras.length > 0) {
      // Distribute extras randomly across the gaps between words
      const gapExtras = Array.from({ length: wordCount - 1 }, () => []);
      for (const extra of extras) {
        gapExtras[this.getRandomInt(wordCount - 1)].push(extra);
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

  generateMultiple(count, wordCount = 4, options = {}) {
    const passwords = [];
    for (let i = 0; i < count; i++) {
      passwords.push(this.generatePassword(wordCount, options));
    }
    return passwords;
  }

  getRandomNumber() {
    return this.getRandomInt(10).toString();
  }

  getRandomSymbol() {
    return this.symbols[this.getRandomInt(this.symbols.length)];
  }

  // Entropy from the actual random choices the generator made (which words,
  // which digits, which symbols) rather than from the output string's
  // character set — the latter assumes brute-force character guessing, which
  // wildly overstates real entropy for a dictionary-word-based password.
  calculateEntropy({ wordCount, numberCount = 0, symbolCount = 0 }) {
    const wordEntropy = Math.log2(this.words.length) * wordCount;
    const numberEntropy = numberCount * Math.log2(10);
    const symbolEntropy = symbolCount * Math.log2(this.symbols.length);
    const estimatedEntropy = wordEntropy + numberEntropy + symbolEntropy;

    return {
      wordCount,
      wordEntropy: Math.round(wordEntropy * 100) / 100,
      numberEntropy: Math.round(numberEntropy * 100) / 100,
      symbolEntropy: Math.round(symbolEntropy * 100) / 100,
      estimatedEntropy: Math.round(estimatedEntropy * 100) / 100
    };
  }
}

// Presets mapping a named entropy level to the word/digit/symbol mix that
// guarantees it: each word contributes ~12.15 bits (log2 of the word list),
// so word count alone is enough to floor the target entropy.
const ENTROPY_PRESETS = {
  fair: { wordCount: 3, numberCount: 0, symbolCount: 0 },
  good: { wordCount: 4, numberCount: 1, symbolCount: 0 },
  strong: { wordCount: 5, numberCount: 1, symbolCount: 1 },
  veryStrong: { wordCount: 7, numberCount: 2, symbolCount: 1 }
};

// GUI Controller
class PasswordGUI {
  constructor() {
    this.generator = new PasswordGenerator();
    this.currentPasswords = [];
    this.activeEntropyLevel = 'custom';
    this.initializeElements();
    this.attachEventListeners();
  }

  initializeElements() {
    this.elements = {
      entropyLevels: Array.from(document.getElementsByName('entropyLevel')),
      wordCountHint: document.getElementById('wordCountHint'),
      numberCountHint: document.getElementById('numberCountHint'),
      symbolCountHint: document.getElementById('symbolCountHint'),
      wordCount3: document.getElementById('words3'),
      wordCount4: document.getElementById('words4'),
      passwordCount: document.getElementById('passwordCount'),
      separator: document.getElementById('separator'),
      capNone: document.getElementById('capNone'),
      capFirst: document.getElementById('capFirst'),
      capAll: document.getElementById('capAll'),
      numberCount: document.getElementById('numberCount'),
      symbolCount: document.getElementById('symbolCount'),
      posEnd: document.getElementById('posEnd'),
      posBetween: document.getElementById('posBetween'),
      generateBtn: document.getElementById('generateBtn'),
      generateBtnBottom: document.getElementById('generateBtnBottom'),
      passwordsContainer: document.getElementById('passwordsContainer'),
      stats: document.getElementById('stats'),
      totalCount: document.getElementById('totalCount'),
      avgLength: document.getElementById('avgLength'),
      avgEntropy: document.getElementById('avgEntropy'),
      entropyRange: document.getElementById('entropyRange'),
      copyAllBtn: document.getElementById('copyAllBtn'),
      clearBtn: document.getElementById('clearBtn')
    };
  }

  attachEventListeners() {
    this.elements.generateBtn.addEventListener('click', () => this.generatePasswords());
    this.elements.generateBtnBottom.addEventListener('click', () => this.generatePasswords());
    this.elements.copyAllBtn.addEventListener('click', () => this.copyAllPasswords());
    this.elements.clearBtn.addEventListener('click', () => this.clearPasswords());

    this.elements.entropyLevels.forEach(radio => {
      radio.addEventListener('change', () => this.applyEntropyLevel(radio.value));
    });

    // Add enter key support for inputs
    this.elements.passwordCount.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.generatePasswords();
    });
    this.elements.separator.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.generatePasswords();
    });
  }

  applyEntropyLevel(level) {
    this.activeEntropyLevel = level;
    const preset = ENTROPY_PRESETS[level];
    const manualControlsDisabled = !!preset;

    this.elements.wordCount3.disabled = manualControlsDisabled;
    this.elements.wordCount4.disabled = manualControlsDisabled;
    this.elements.numberCount.disabled = manualControlsDisabled;
    this.elements.symbolCount.disabled = manualControlsDisabled;

    [this.elements.wordCountHint, this.elements.numberCountHint, this.elements.symbolCountHint]
      .forEach(hint => { hint.style.display = manualControlsDisabled ? 'block' : 'none'; });

    if (preset) {
      this.elements.wordCountHint.textContent = `Set to ${preset.wordCount} words by the ${level} entropy level.`;
      this.elements.numberCountHint.textContent = `Set to ${preset.numberCount} by the ${level} entropy level.`;
      this.elements.symbolCountHint.textContent = `Set to ${preset.symbolCount} by the ${level} entropy level.`;
    }
  }

  getOptions() {
    const capValue = this.elements.capFirst.checked ? 'first'
      : this.elements.capAll.checked ? 'all'
      : 'none';

    const preset = ENTROPY_PRESETS[this.activeEntropyLevel];

    return {
      wordCount: preset ? preset.wordCount : parseInt(this.elements.wordCount4.checked ? '4' : '3'),
      count: parseInt(this.elements.passwordCount.value),
      separator: this.elements.separator.value,
      capitalize: capValue === 'all',
      capitalizeFirst: capValue === 'first',
      numberCount: preset ? preset.numberCount : parseInt(this.elements.numberCount.value),
      symbolCount: preset ? preset.symbolCount : parseInt(this.elements.symbolCount.value),
      placement: this.elements.posBetween.checked ? 'between' : 'end',
      entropyRange: this.elements.entropyRange.value
    };
  }

  generatePasswords() {
    const options = this.getOptions();
    
    // Validate input
    if (options.count < 1 || options.count > 20) {
      this.showError('Please enter a number between 1 and 20 for password count');
      return;
    }

    try {
      const genOptions = {
        capitalize: options.capitalize,
        capitalizeFirst: options.capitalizeFirst,
        numberCount: options.numberCount,
        symbolCount: options.symbolCount,
        separator: options.separator,
        placement: options.placement
      };

      const passwords = [];
      const maxAttempts = 500;
      for (let i = 0; i < options.count; i++) {
        let pwd;
        let attempts = 0;
        do {
          pwd = this.generator.generatePassword(options.wordCount, genOptions);
          attempts++;
        } while (options.entropyRange !== 'any' && !this.meetsEntropyRange(pwd, options.entropyRange) && attempts < maxAttempts);

        if (options.entropyRange !== 'any' && !this.meetsEntropyRange(pwd, options.entropyRange)) {
          this.showError(`Could not generate a password in the ${options.entropyRange} bits range with the current settings. Try adding more words, digits, or symbols.`);
          return;
        }


      this.updateStats();
    } catch (error) {
      this.showError(error.message);
    }
  }

  meetsEntropyRange(password, range) {
    const { estimatedEntropy } = this.generator.calculateEntropy(password);
    if (range === '60-80') return estimatedEntropy >= 60 && estimatedEntropy < 80;
    if (range === '80-100') return estimatedEntropy >= 80 && estimatedEntropy < 100;
    if (range === '100+') return estimatedEntropy >= 100;
    return true;
  }

  displayPasswords(showEntropy) {
    const container = this.elements.passwordsContainer;
    container.innerHTML = '';

    this.currentPasswords.forEach((password, index) => {
      const passwordItem = document.createElement('div');
      passwordItem.className = 'password-item';

      const passwordText = document.createElement('div');
      passwordText.className = 'password-text';
      passwordText.textContent = password;

      const passwordMeta = document.createElement('div');
      passwordMeta.className = 'password-meta';

      let metaInfo = `#${index + 1} • ${password.length} chars`;

      if (showEntropy) {
        metaInfo += ` • ${this.currentEntropy.estimatedEntropy} bits`;

        const entropyIndicator = this.createEntropyIndicator(this.currentEntropy.estimatedEntropy);
        passwordMeta.appendChild(entropyIndicator);
      }

      const metaText = document.createElement('span');
      metaText.textContent = metaInfo;
      passwordMeta.appendChild(metaText);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = '📋 Copy';
      copyBtn.addEventListener('click', () => this.copyToClipboard(password));

      passwordMeta.appendChild(copyBtn);

      passwordItem.appendChild(passwordText);
      passwordItem.appendChild(passwordMeta);
      container.appendChild(passwordItem);
    });

    // Show action buttons
    this.elements.copyAllBtn.style.display = 'inline-block';
    this.elements.clearBtn.style.display = 'inline-block';
  }

  createEntropyIndicator(entropy) {
    const indicator = document.createElement('span');
    indicator.className = 'entropy-indicator';
    
    if (entropy < 40) {
      indicator.classList.add('entropy-low');
      indicator.textContent = 'Weak';
    } else if (entropy < 60) {
      indicator.classList.add('entropy-medium');
      indicator.textContent = 'Fair';
    } else if (entropy < 80) {
      indicator.classList.add('entropy-high');
      indicator.textContent = 'Good';
    } else {
      indicator.classList.add('entropy-very-high');
      indicator.textContent = 'Strong';
    }
    
    return indicator;
  }

  updateStats() {
    if (this.currentPasswords.length === 0) return;

    const totalLength = this.currentPasswords.reduce((sum, pwd) => sum + pwd.length, 0);
    const avgLength = Math.round(totalLength / this.currentPasswords.length);

    this.elements.totalCount.textContent = this.currentPasswords.length;
    this.elements.avgLength.textContent = avgLength;
    this.elements.avgEntropy.textContent = `${Math.round(this.currentEntropy.estimatedEntropy)} bits`;
    this.elements.stats.style.display = 'grid';
  }

  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.showSuccess('Password copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.showSuccess('Password copied to clipboard!');
    }
  }

  async copyAllPasswords() {
    if (this.currentPasswords.length === 0) return;
    
    const allPasswords = this.currentPasswords.join('\n');
    await this.copyToClipboard(allPasswords);
    this.showSuccess('All passwords copied to clipboard!');
  }

  clearPasswords() {
    this.currentPasswords = [];
    this.elements.passwordsContainer.innerHTML = `
      <div class="placeholder">
        <p>Click "Generate Passwords" to create your secure passwords</p>
      </div>
    `;
    this.elements.stats.style.display = 'none';
    this.elements.copyAllBtn.style.display = 'none';
    this.elements.clearBtn.style.display = 'none';
  }

  showError(message) {
    this.showNotification(message, 'error');
  }

  showSuccess(message) {
    this.showNotification(message, 'success');
  }

  showNotification(message, type) {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
      existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
      ${type === 'error' ? 'background: #ef4444;' : 'background: #10b981;'}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Add slide out animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideOut {
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(style);

// Initialize the GUI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PasswordGUI();
});
