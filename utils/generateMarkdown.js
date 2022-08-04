const licenses = require("./license");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return ``;
  }
  return `![Github license](` + licenses[license]['image'] + `)`
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == '') {
    return ``;
  }
  return `![License](` + licenses[license]['link'] + `)`
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == '') {
    return ``;
  }
  return `This project is licensed under ${renderLicenseLink(license)}`;
}

function renderTableOfContentsSection() {
  return `## Table of Contents\n` +
  `- [Installation](#installation)\n` +
  `- [Usage](#usage)\n` +
  `- [License](#license)\n` +
  `- [Contributing](#contributing)\n` +
  `- [Tests](#tests)\n` +
  `- [Questions](#questions)\n`;
}

function generateMarkdown(data) {
  return `# ${data.title} ` + renderLicenseBadge(data.license) +
  `\n## Description\n${data.description}\n` +
  renderTableOfContentsSection() +
  `## Installation\n${data.installation}\n` +
  `## Usage\n${data.usage}\n` +
  `## License\n` + renderLicenseSection(data.license) +
  `\n## Contributing\n${data.contributing}\n` +
  `## Tests\n${data.test}\n` +
  `## Questions\n${data.questions}\n` +
  `\nFind me on GitHub:  [${data.github}](https://github.com/${data.github})\n` +
  `\nEmail me - ${data.email}`;
}

module.exports = generateMarkdown;
