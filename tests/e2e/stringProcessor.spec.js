// Import Playwright's test runner functions
const { test, expect } = require('@playwright/test');
// Import the processString function to be tested
const { processString } = require('../../Pages/stringProcessor');

// Tests for the StringProcessor handler
test.describe('StringProcessor', () => {
    // Defining test case for processing strings according to the given acceptance criteria
    test('should process strings according to the given specifications', async ({}) => {
        // Array of input strings to be processed
        const inputStrings = [
            'EEvb82&uVvNsTj$3ij5_352d7b__Y', // A typical input string with various characters
            null,                           // A null input string
            '',                             // An empty input string
            'AAA111bbb$$$ccc___444',        // A string with duplicates, special characters, and numbers
            'abcd1234efgh5678ijkl'          // A string exceeding 15 characters in length
        ];

        // Array of expected output strings after processing
        const expectedOutputs = [
            'Evb82&uVvNsTj£3',  // Processed output for the first input string
            null,               // Expected output for a null input string
            null,               // Expected output for an empty input string
            'A111b£££c',        // Processed output for the fourth input string
            'abcd123efgh5678'   // Processed output for the fifth input string (truncated to 15 characters)
        ];

        // Iterate over each input string and its corresponding expected output
        inputStrings.forEach((input, index) => {
            // Check if the processed string matches the expected output
            expect(processString(input)).toBe(expectedOutputs[index]);
        });
    });
});
