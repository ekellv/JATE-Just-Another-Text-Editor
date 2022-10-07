# JATE: Just Another Text Editor

## Description

A text editing app with offline functionality.

![Github license](http://img.shields.io/badge/License-MIT-yellow.svg)

[A version of the deployed website can be viewed here.](https://github.com/ekellv/JATE-Just-Another-Text-Editor)

## Contents

1. [About](#about)
   1. [User Story](#user%20story)
   2. [Acceptance Criteria](#acceptance%20criteria)
   3. [Visuals](#visuals)
   4. [Technologies](#technologies)
2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

JATE is a text editor that runs in the browser and meets PWA criteria. It features data persistence techniques to serve as a redundancy in case one of the options is not supported by the user's current browser. The application can also be installed to run offline.

## User Story

AS A developer

I WANT to create notes or code snippets with or without an internet connection

SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application

WHEN I open my application in my editor

THEN I should see a client server folder structure

WHEN I run `npm run start` from the root directory

THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal

THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins

THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application

THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor

THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window

THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it

THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button

THEN I download my web application as an icon on my desktop

WHEN I load my web application

THEN I should have a registered service worker using workbox

WHEN I register a service worker

THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

WHEN I deploy to Heroku

THEN I should have proper build scripts for a webpack application

## Visuals:

## Technologies

- ![Node.js](https://nodejs.org/en/)
- ![Express.js](https://expressjs.com/)
- ![IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- ![Webpack](https://webpack.js.org/)

## Installation

Please run the following dependencies to install the application:

`npm i`

## License

This reposititory is licensed under the MIT license.

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Usage

After installing the dependencies using `npm i` and then `npm run start:dev` to write the files necessary to run the application. To start the server run `npm start` and open http://localhost:3000/ on your preferred browser.

To install the application, click the `install` button and then the install icon in your browser's address bar.

## Contributing

This repository is currently not accepting contributions.

## Testing

No tests are currently configured for this application.

## Authors and Acknowledgements

Built by: Erin Voelker

## Contact Information

- GitHub: [ekellv](https://github.com/ekellv)
- Email: [erinkvoelker@gmail.com](mailto:erinkvoelker@gmail.com)
