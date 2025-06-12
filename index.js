/**
 * Shared Library - Reusable Utility Functions
 * A collection of commonly used utility functions
 */

/**
 * Formats a string by capitalizing the first letter of each word
 * @param {string} str - The string to format
 * @returns {string} - The formatted string
 */
function capitalizeWords(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

/**
 * Generates a random ID string
 * @param {number} length - The length of the ID (default: 8)
 * @returns {string} - A random alphanumeric ID
 */
function generateId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Validates if a string is a valid email address
 * @param {string} email - The email string to validate
 * @returns {boolean} - True if valid email, false otherwise
 */
function isValidEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Formats a date object to YYYY-MM-DD string
 * @param {Date} date - The date object to format
 * @returns {string} - Formatted date string
 */
function formatDate(date = new Date()) {
    if (!(date instanceof Date) || isNaN(date)) {
        return '';
    }
    return date.toISOString().split('T')[0];
}

/**
 * Debounces a function call
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Formats a number as a currency string
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code (default: 'USD')
 * @param {string} locale - The locale for formatting (default: 'en-US')
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return '$0.00';
    }
    
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (error) {
        // Fallback for unsupported currency/locale
        return `${currency} ${amount.toFixed(2)}`;
    }
}

// Export all functions
module.exports = {
    capitalizeWords,
    generateId,
    isValidEmail,
    formatDate,
    debounce,
    formatCurrency
};
