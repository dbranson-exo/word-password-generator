# Word Password Generator

A Node.js password generator that creates memorable passwords using common English words. Instead of random characters, it uses 3-4 common words to create passwords that are both strong and easy to remember.

## Features

- Uses a dictionary of 4,600+ common English words
- Configurable word count (3 or 4 words)
- Optional capitalization, numbers, and symbols
- Command-line interface with multiple options
- Web-based GUI for browser use
- Entropy calculation for security assessment
- Generate multiple passwords at once
- Cryptographically secure random number generation

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Make sure you have Node.js installed (version 14 or higher)

## Usage

### Web GUI

Start the local web server and open the interface in your browser:

```bash
npm run gui
# Then open http://localhost:3000
```

### Basic Usage (CLI)

```bash
# Generate a password with 4 words (default)
node index.js

# Generate a password with 3 words
node index.js -w 3

# Generate 5 passwords with 3 words each
node index.js -w 3 -c 5
```

### Advanced Options

```bash
# Capitalize first letter of each word
node index.js --capitalize

# Add numbers between words
node index.js --numbers

# Add symbols between words
node index.js --symbols

# Use a separator (hyphen in this case)
node index.js --separator "-"

# Show entropy information
node index.js --entropy

# Combine multiple options
node index.js -w 3 --capitalize --numbers --symbols --entropy
```

### Command Line Options

- `-w, --words <count>`: Number of words to use (3 or 4, default: 4)
- `-c, --count <number>`: Number of passwords to generate (default: 1)
- `-s, --separator <char>`: Separator between words (default: none)
- `--capitalize`: Capitalize first letter of each word
- `--numbers`: Add numbers between words
- `--symbols`: Add symbols between words
- `--entropy`: Show entropy information
- `-h, --help`: Show help message

## Examples

### Simple 4-word password
```bash
$ node index.js

Generated Passwords:
===================

1. applejumptimehappy
```

### 3-word password with capitalization and separators
```bash
$ node index.js -w 3 --capitalize --separator "-"

Generated Passwords:
===================

1. Apple-Jumped-Time
```

### Password with numbers and symbols
```bash
$ node index.js --numbers --symbols --entropy

Generated Passwords:
===================

1. apple7jumped@time3happy
   Length: 22 chars | Words: 4 | Entropy: ~52.0 bits
```

## Security

### Entropy Information

The generator calculates approximate entropy for each password:
- **4-word passwords**: ~141.0 bits of entropy (massively increased from ~51.3 bits)
- **3-word passwords**: ~105.8 bits of entropy (massively increased from ~38.5 bits)
- Adding numbers/symbols increases entropy further

### Word Selection

- Uses a curated list of 4,600+ common English words based on Google's frequency analysis
- Words are filtered for memorability and appropriateness
- Words are selected randomly without replacement
- Each word adds approximately 35.3 bits of entropy (massively increased from ~12.8 bits)

## API Usage

You can also use the generator programmatically:

```javascript
const PasswordGenerator = require('./generator');

const generator = new PasswordGenerator();

// Generate a single password
const password = generator.generatePassword(4, {
  capitalize: true,
  numbers: true,
  separator: '-'
});

// Generate multiple passwords
const passwords = generator.generateMultiple(5, 3, {
  symbols: true
});

// Calculate entropy
const entropy = generator.calculateEntropy(password);
console.log(`Entropy: ${entropy.estimatedEntropy} bits`);
```

## Files

- `index.js`: Main command-line interface
- `generator.js`: Core password generation logic
- `words.js`: Dictionary of common words (Node.js)
- `server.js`: Static file server for the web GUI
- `public/index.html`: Web GUI markup
- `public/script.js`: Web GUI logic and browser-side generator
- `public/style.css`: Web GUI styles
- `package.json`: Node.js project configuration
- `README.md`: This documentation

## License

MIT License
