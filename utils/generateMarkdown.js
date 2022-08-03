// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTableOfContentsSection() {
  return `## Table of Contents\n` +
  `- [Installation](#installation)\n` +
  `- [Usage](#usage)\n` +
  `- [Contributing](#contributing)\n` +
  `- [Tests](#tests)\n` +
  `- [Questions](#questions)\n`;
}

function generateMarkdown(data) {
  return `# ${data.title}\n` + 
  `## Description\n${data.description}\n` +
  renderTableOfContentsSection() +
  `## Installation\n${data.installation}\n` +
  `## Usage\n${data.usage}\n` +
  `## Contributing\n${data.contributing}\n` +
  `## Tests\n${data.test}\n` +
  `## Questions\n${data.questions}\n` +
  `\nFind me on GitHub:  [${data.github}](https://github.com/${data.github})\n` +
  `\nEmail me - ${data.email}`;
}

module.exports = generateMarkdown;
