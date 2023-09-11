// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'project',
    message: 'What is the name of the project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe the application.',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?',
},
{
    type: 'input',
    name: 'credits',
    message: 'List any collaborators with their link, third party assets, tutorials, sources.',
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
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
    name: 'github',
    message: 'Leave a link to your Github page here.',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on user's input
      const readmeContent = generateMarkdown(answers);
     // Write README file
      writeToFile('README.md', readmeContent);

      console.log('README file generated successfully!');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
