# QA Automation Tester

## The Brief

A developer was given the following task:


> Write C# code to process a collection of string values which are passed to a method which returns a collection of processed strings. The input strings may be any length and can contain any character. Output strings must not be null or empty string, should be truncated to max length of 15 chars, and contiguous duplicate characters in the same case should be reduced to a single character in the same case. Dollar sign ($) should be replaced with a pound sign (£), and underscores (_) and number 4 should be removed. Code should be test-driven, efficient, re-usable and loosely coupled. The returned collection must not be null.
>
> Example input string:  AAAc91%cWwWkLq$1ci3_848v3d__K

Your task is to write a set of tests around the developers work to prove it has been suitably done to the given specifications.

## The Solution

The solution is a set of C# library projects. These projects contain the developers implementation and a placeholder project for unit tests.

The unit test project  has the following NuGet packages already installed to facilitate writing tests:
- NUnit
- Moq
- Shouldly

The solution has no runnable component (e.g. cannot press F5) and is expected to be run through the Test Runner.

## Submission

Submission of your solution should be as a link to a GitHub, or other Git-based, repo that we are able to access and clone for review.

 # TESTS : 
 * Tech stack used : Playwright with javascript , VScode Editor
 * Instructions : 
 * To run the tests 
 * Node moduls must be installed using command
     * npm install 
 * Command to run test - 
      * npx playwright test ./e2e/stringProcessor.spec.js
 * This tests are ran on windows operating system. if anyone like to run this test on mac OS , then install npm package . To do so use the command to install - npm install from project directory
 * Test are running on on chromium, webkit and firefox
 * Command for view report
    * npx playwright show-report
 # Framework Implementation :
 *  Tests are implemented using component model with playwright using javascript. Framework includes the developer unit tests and e2e test for UAT.
 *  There are two folders called 
      * Pages - stringProcessor.js
      * tests/e2e - stringProcessor.spec.js
 * Tests are validated based on following acceptance criteria for input string
     * The output string must not be null or empty.
     * The output string must have a maximum length of 15 characters.
     * Contiguous duplicate characters in the same case should be reduced to a single character.
     * Dollar sign ($) should be replaced with a pound sign (£).
     * Underscores (_) and the number 4 should be removed.
  
