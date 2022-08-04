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
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any.",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache_2.0",
            "Boost_1.0",
            "BSD_3",
            "BSD_2",
            "CC0_1.0",
            "EPL_1.0",
            "MIT",
            "MPL_2.0"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of your project?"
    },
    {
        type: "input",
        name: "test",
        message: "Enter your project test instructions:"
    },
    {
        type: "input",
        name: "questions",
        message: "Enter frequently asked questions:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github user profile for contact:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address for contact:"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
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
