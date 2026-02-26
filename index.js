#!/usr/bin/env node

const PasswordGenerator = require('./generator');

function printUsage() {
  console.log(`
Word Password Generator

Usage:
  node index.js [options]

Options:
  -w, --words <count>          Number of words to use (3 or 4, default: 4)
  -c, --count <number>         Number of passwords to generate (default: 1)
  -s, --separator <char>       Separator between words (default: none)
  --capitalize                 Capitalize first letter of every word
  --capitalize-first           Capitalize first letter of the first word only
  --numbers <count>            Number of digits to append (default: 0)
  --symbols <count>            Number of symbols to append (default: 0)
  --entropy                    Show entropy information
  -h, --help                   Show this help message

Examples:
  node index.js                                         # Generate 1 password with 4 words
  node index.js -w 3 -c 5                               # Generate 5 passwords with 3 words each
  node index.js --capitalize-first --separator "-"      # Capitalize first word, use hyphens
  node index.js --numbers 2 --symbols 1 --entropy       # Append 2 digits + 1 symbol, show entropy
  node index.js --capitalize --numbers 3 --symbols 2    # All caps + 3 digits + 2 symbols
`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    wordCount: 4,
    count: 1,
    separator: '',
    capitalize: false,
    capitalizeFirst: false,
    numberCount: 0,
    symbolCount: 0,
    entropy: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '-h':
      case '--help':
        printUsage();
        process.exit(0);
        break;
        
      case '-w':
      case '--words': {
        const wordCount = parseInt(args[++i]);
        if (wordCount !== 3 && wordCount !== 4) {
          console.error('Error: Word count must be 3 or 4');
          process.exit(1);
        }
        options.wordCount = wordCount;
        break;
      }

      case '-c':
      case '--count': {
        const count = parseInt(args[++i]);
        if (isNaN(count) || count < 1) {
          console.error('Error: Count must be a positive number');
          process.exit(1);
        }
        options.count = count;
        break;
      }
        
      case '-s':
      case '--separator':
        options.separator = args[++i] || '';
        break;
        
      case '--capitalize':
        options.capitalize = true;
        break;

      case '--capitalize-first':
        options.capitalizeFirst = true;
        break;

      case '--numbers': {
        const numberCount = parseInt(args[++i]);
        if (isNaN(numberCount) || numberCount < 0) {
          console.error('Error: --numbers count must be a non-negative integer');
          process.exit(1);
        }
        options.numberCount = numberCount;
        break;
      }

      case '--symbols': {
        const symbolCount = parseInt(args[++i]);
        if (isNaN(symbolCount) || symbolCount < 0) {
          console.error('Error: --symbols count must be a non-negative integer');
          process.exit(1);
        }
        options.symbolCount = symbolCount;
        break;
      }
        
      case '--entropy':
        options.entropy = true;
        break;
        
      default:
        console.error(`Error: Unknown option ${arg}`);
        printUsage();
        process.exit(1);
    }
  }
  
  return options;
}

function main() {
  const options = parseArgs();
  const generator = new PasswordGenerator();
  
  try {
    const passwords = generator.generateMultiple(
      options.count,
      options.wordCount,
      {
        capitalize: options.capitalize,
        capitalizeFirst: options.capitalizeFirst,
        numberCount: options.numberCount,
        symbolCount: options.symbolCount,
        separator: options.separator
      }
    );
    
    console.log('\nGenerated Passwords:');
    console.log('===================\n');
    
    passwords.forEach((password, index) => {
      console.log(`${index + 1}. ${password}`);
      
      if (options.entropy) {
        const entropy = generator.calculateEntropy(password);
        console.log(`   Length: ${entropy.passwordLength} chars | Words: ${entropy.wordCount} | Entropy: ~${entropy.estimatedEntropy} bits`);
      }
      console.log('');
    });
    
    if (passwords.length > 1) {
      console.log(`Generated ${passwords.length} passwords with ${options.wordCount} words each.`);
    }
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, parseArgs };
