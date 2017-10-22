# modernfrontend.io

Built with love for the modern developer.

* Source: [github.com/justyn-clark/modernfrontend.io](https://github.com/justyn-clark/modernfrontend.io)
* Author: [Justyn Clark](http://justynclark.com)
* Homepage: [modernfrontend.io](http://www.modernfrontend.io)

## Run the site

1. **Clone the project**. `git clone http://github.com/justyn-clark/initiator.git`.
2. **Install local dependancies**. run `[sudo] yarn install` (first time users)
3. **Run the project**. `yarn start`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files.


## Features

Made using Initiator THE modern front-end boilerplate and workflow.
* Source: [github.com/justyn-clark/initiator](http://github.com/justyn-clark/initiator)
* Author: [Justyn Clark](http://justynclark.com)
* Homepage: [initiator.justynclark.com](http://initiator.justynclark.com)

These are some of the main features and modern technologies used:
* Built-in npm build scripts for auto-compilation and auto-minification of CSS and JavaScript files for production
* BEM - Block Element Modifier method as style convention for CSS naming  
* ES6 Module Pattern setup with Browerify module bundling
* ES6 newest features including: fetch and promises, etc...     
* CSS Grid display for page layouts
* HTML5 framework and HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* Encourages one-file CSS/JS in the view (HTML) for performance
* Browsersync live reloading the browser upon changes
* Includes .editorconfig for consistent coding styles in IDEs
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting
* Extremely lightweight footprint

## Project Structure

````
├── app
│   ├── img
│   ├── js
|   |   └── eventemitter2.js
│   ├── app.css
|   ├── bundle.js
│   |   ├── bundle.min.js
│   |   └── bundle.min.js.map
|   └── scripts.js
|       ├── scripts.min.js
│       └── scripts.min.js.map
├── src
│   └── js
│   │   ├── modules
│   │   └── scripts
│   ├── app.js
│   └── scss
│       ├── base
│       ├── mixins
│       ├── modules
│       ├── partials
│       └── style.scss
├── .babelrc
├── .editoronfig
├── .gitignore
├── favicon.ico
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── .jshintrc
````
