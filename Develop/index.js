// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'whats your project title?',
    validate: title => {
        if (title) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project?',
    validate: description => {
        if (description) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
    validate: installation => {
        if (installation) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?',
    validate: usage => {
        if (usage) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: 'list',
    choices: [
        {
            key: "Apache 2.0",
            value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        },

        {
            key: "IPL 1.0",
            value: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        },
        {
            key: "MIT",
            value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
            key: "ISC",
            value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        },
    ],
    name: 'license',
    message: 'Put license information here'
},
{
    type: 'input',
    name: 'contributing',
    message: 'please inter the details for contributing to your project',
    validate: contributing => {
        if (contributing) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Please enter the details for testing your project',
    validate: tests => {
        if (tests) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'Leave a link to your Github page here.',
    validate: github => {
        if (github) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},
{
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log('this is required');
            return false;
        }
    }
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise ((resolve, reject) => {
     fs.writeFile(`./dist/${fileName}.md`, generateMarkdown(data), err => {
        if(err)  {
            reject(err);
            return
        } else {
            resolve({
                ok: true,
                message: 'README created'
            })
        }
     })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
        .then(readMeData => {
            const {title} = readMeData
            return writeToFile(title, readMeData)
        })
        .then(result => {
            console.log(result);
        })
}

// Function call to initialize app
init();
