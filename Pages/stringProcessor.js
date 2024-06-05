// stringProcessor.js

/**
 * Processes an input string according to specified rules:
 * - The output string must not be null or empty.
 * - The output string must have a maximum length of 15 characters.
 * - Contiguous duplicate characters in the same case should be reduced to a single character.
 * - Dollar sign ($) should be replaced with a pound sign (£).
 * - Underscores (_) and the number 4 should be removed.
 *
 * @param {string} input - The input string to be processed.
 * @returns {string|null} - The processed string or null if the input is null or empty.
 */
function processString(input) {
    // Check for null or empty input string
    if (!input || input.trim() === '') {
        return null;
    }

    // Initialize the result string and the previous character tracker
    let result = '';
    let prevChar = '';

    // Iterate through each character of the input string
    for (const char of input) {
        let currentChar = char;

        // Replace dollar sign ($) with pound sign (£)
        if (currentChar === '$') {
            currentChar = '£';
        } 
        // Skip underscores (_) and the number 4
        else if (currentChar === '_' || currentChar === '4') {
            continue;
        }

        // Add the current character to the result if it is not a contiguous duplicate letter
        if (currentChar !== prevChar || !/[a-zA-Z]/.test(currentChar)) {
            result += currentChar;
        }

        // Update the previous character tracker
        prevChar = currentChar;

        // Stop processing if the result string reaches the maximum length of 15 characters
        if (result.length === 15) {
            break;
        }
    }

    // Return the processed result string truncated to 15 characters
    return result.slice(0, 15);
}

module.exports = { processString };
