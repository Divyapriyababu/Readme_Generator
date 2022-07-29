const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      }
  ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile("divya.md",generateMarkdown(data));
    });
}

// Function call to initialize app
init();
