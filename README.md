# README Generator
## About the repository

This repository contains changes to refactor code as part of University of Washington's Coding [bootcamp](https://bootcamp.uw.edu/coding/). There are two types of challenges in this course:

* On-the-job ticket or feature request challenges give a starter code in a folder called Develop, which we'll modify to complete the challenge.

* Job-seeking coding assessments or take-home assignments don't provide starter code. We'll build these from scratch.

A node.js application that uses user input from command line using inquirer to populate a README.md file for user repository. 

## User story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

`npm install`

`npm init -y`

`node index.js`

## Result

[Walkthrough Video](https://drive.google.com/file/d/1Rv0--AgNQh7WANNlfY0xP1BXLp2KQCEu/view)