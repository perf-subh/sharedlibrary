const { 
    capitalizeWords, 
    generateId, 
    isValidEmail, 
    formatDate, 
    debounce,
    formatCurrency
} = require('./index.js');

console.log('Testing Shared Library Utilities...\n');

// Test capitalizeWords
console.log('1. Testing capitalizeWords:');
console.log(`   Input: "hello world" -> Output: "${capitalizeWords('hello world')}"`);
console.log(`   Input: "JAVASCRIPT is AWESOME" -> Output: "${capitalizeWords('JAVASCRIPT is AWESOME')}"`);

// Test generateId
console.log('\n2. Testing generateId:');
console.log(`   Generated ID (8 chars): ${generateId()}`);
console.log(`   Generated ID (12 chars): ${generateId(12)}`);

// Test isValidEmail
console.log('\n3. Testing isValidEmail:');
console.log(`   "test@example.com" is valid: ${isValidEmail('test@example.com')}`);
console.log(`   "invalid-email" is valid: ${isValidEmail('invalid-email')}`);

// Test formatDate
console.log('\n4. Testing formatDate:');
console.log(`   Current date formatted: ${formatDate()}`);
console.log(`   Custom date formatted: ${formatDate(new Date('2025-12-25'))}`);

// Test debounce
console.log('\n5. Testing debounce:');
let counter = 0;
const incrementCounter = () => {
    counter++;
    console.log(`   Counter: ${counter}`);
};
const debouncedIncrement = debounce(incrementCounter, 100);

console.log('   Calling debounced function 3 times quickly...');
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();

// Test formatCurrency
console.log('\n6. Testing formatCurrency:');
console.log(`   $1234.56 formatted: ${formatCurrency(1234.56)}`);
console.log(`   €500.75 formatted: ${formatCurrency(500.75, 'EUR', 'de-DE')}`);
console.log(`   ¥1000 formatted: ${formatCurrency(1000, 'JPY', 'ja-JP')}`);
console.log(`   Invalid input: ${formatCurrency('not-a-number')}`);
console.log(`   Zero amount: ${formatCurrency(0)}`);

setTimeout(() => {
    console.log('   Final counter value after debounce:', counter);
    console.log('\n✅ All tests completed successfully!');
}, 200);
