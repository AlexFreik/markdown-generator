const { EOL } = require('os');
const headers = require('../resources/headers');
const tocGenerator = require('markdown-toc');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

/**
 * Generates TOC for .md file
 * @param {string} markdown file content
 * @return {string}
 */
function getTOC(markdown) {
    return tocGenerator(markdown).content;
}

function generateMarkdownHelper(data) {
    let ans = '';
    for (let key in data) ans += headers[key] + EOL + data[key] + EOL + EOL;
    return ans;
}
/**
 * Uses user's answers to generate markdown
 * @param data
 * @return {string}
 */
function generateMarkdown(data) {
    const title = '# ' + data.title + EOL;
    delete data.title;

    const isTOC = data.tableOfContent === 'y';
    delete data.tableOfContent;

    const toc = isTOC ? headers.tableOfContent + EOL + getTOC(generateMarkdownHelper(data, false)) : '';

    return title + toc + EOL + EOL + generateMarkdownHelper(data);
}

module.exports = generateMarkdown;
