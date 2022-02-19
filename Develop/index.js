const prompt = require('prompt-sync')();
const { questions, questionsVerbose } = require('./resources/questions');
const msgs = require('./resources/messages');
const { EOL } = require('os');
const effects = require('./resources/text_effects');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');

/**
 * Create a function to write README file
 * @param {string} file
 * @param {string} content
 */
function writeToFile(file, content) {
    fs.writeFile(file, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Creation of file "' + file + '" was successful.');
    });
}

/**
 *
 * @param {string} key
 * @param {boolean} isVerbose
 * @return {string}
 */
function getReadmeQuestion(key, isVerbose) {
    let ans = EOL + '[Q] ' + questions[key];
    if (!isVerbose || !questionsVerbose[key]) return ans;
    ans += EOL + effects.FgCyan + questionsVerbose[key] + effects.Reset;
    return ans;
}

/**
 * Processes user input and returns answers to readme questions.
 * @param {boolean} isVerbose
 * @return {{}}
 */
function getAnswers(isVerbose) {
    const answers = {};
    for (const [key] of Object.entries(questions)) {
        console.log(getReadmeQuestion(key, isVerbose));
        const ans = prompt('');
        if (ans !== null) answers[key] = ans;
    }
    return answers;
}

/**
 * initialise app
 */
function init() {
    console.log(msgs.helloMsg);
    const answers = getAnswers(process.argv.includes('--verbose'));
    const output = generateMarkdown(answers);
    console.log(output);
    writeToFile(path.join(__dirname, 'Output_README.md'), output);
}

// Function call to initialize app
init();
