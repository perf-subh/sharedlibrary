# Shared Utils Library

A collection of reusable utility functions for common JavaScript tasks.

## Installation

```bash
npm install @nkedia/shared-utils
```

## Usage

```javascript
const { 
    capitalizeWords, 
    generateId, 
    isValidEmail, 
    formatDate, 
    debounce,
    formatCurrency
} = require('@nkedia/shared-utils');

// Capitalize words in a string
console.log(capitalizeWords('hello world')); // "Hello World"

// Generate random ID
console.log(generateId(10)); // "A1b2C3d4E5"

// Validate email
console.log(isValidEmail('test@example.com')); // true

// Format date
console.log(formatDate(new Date())); // "2025-06-06"

// Format currency
console.log(formatCurrency(1234.56)); // "$1,234.56"
console.log(formatCurrency(500.75, 'EUR', 'de-DE')); // "500,75 €"

// Debounce function calls
const debouncedFn = debounce(() => console.log('Called!'), 300);
```

## API Reference

### `capitalizeWords(str)`
Formats a string by capitalizing the first letter of each word.
- **str** (string): The string to format
- **Returns**: Formatted string

### `generateId(length)`
Generates a random alphanumeric ID.
- **length** (number, optional): Length of the ID (default: 8)
- **Returns**: Random ID string

### `isValidEmail(email)`
Validates if a string is a valid email address.
- **email** (string): The email to validate
- **Returns**: Boolean indicating validity

### `formatDate(date)`
Formats a date object to YYYY-MM-DD string.
- **date** (Date, optional): Date object (default: current date)
- **Returns**: Formatted date string

### `formatCurrency(amount, currency, locale)`
Formats a number as a currency string.
- **amount** (number): The amount to format
- **currency** (string, optional): Currency code (default: 'USD')
- **locale** (string, optional): Locale for formatting (default: 'en-US')
- **Returns**: Formatted currency string

### `debounce(func, delay)`
Creates a debounced version of a function.
- **func** (Function): The function to debounce
- **delay** (number): Delay in milliseconds
- **Returns**: Debounced function

## Testing

```bash
npm test
```

## License

MIT