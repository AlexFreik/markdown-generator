const { EOL } = require('os');

const questions = {
    title: 'What is your project title?',
    description: 'Provide a short description explaining the what why, ' + 'and how of your project.',
    tableOfContent: 'Do you want to generate TOC? [y|n]',
    installation: 'Provide installation instructions.',
    usage: 'Provide instructions and examples for use. Include screenshots as needed.',
    credits: 'List your collaborators, if any, with links to their GitHub profiles.',
    licence: 'Provide your licence information.',
    badges: 'Provide badges. (Example: ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) )',
    features: 'If your project has a lot of features, list them here.',
    contribute: 'Provide contribute information.',
    tests: 'Provide tests information.',
};

const questionsVerbose = {
    description:
        'Use the following questions as a guide: ' +
        EOL +
        '   - What was your motivation?' +
        EOL +
        '   - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") ' +
        EOL +
        '   - What problem does it solve? ' +
        EOL +
        '   - What did you learn?',
    tableOfContent: 'If your README is long, add a table of contents to make it easy for users to find what they need.',
    installation:
        'What are the steps required to install your project? ' +
        EOL +
        'Provide a step-by-step description of how to get the development environment running.',
    usage:
        'To add a screenshot, create an `assets/images` folder in your repository ' +
        'and upload your screenshot to it. Then, using the relative filepath, add it to your ' +
        'README using the following syntax: ' +
        EOL +
        '![alt text](assets/images/screenshot.png)',
    credits:
        'If you used any third-party assets that require attribution, list the ' +
        'creators with links to their primary web presence in this section.' +
        EOL +
        'If you followed tutorials, include links to those here as well.',
    licence:
        'The last section of a high-quality README file is the license. ' +
        'This lets other developers know what they can and cannot do with your project. ' +
        'If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
    badges:
        "Badges aren't necessary, per se, but they demonstrate street cred. Badges let other " +
        "developers know that you know what you're doing. " +
        'Check out the badges hosted by [shields.io](https://shields.io/). You may not understand ' +
        'what they all represent now, but you will in time.',
    features: '',
    contribute:
        'If you created an application or package and would like other developers ' +
        'to contribute it, you can include guidelines for how to do so. ' +
        'The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, ' +
        "but you can always write your own if you'd prefer.",
    tests: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
};

module.exports = { questions, questionsVerbose };
