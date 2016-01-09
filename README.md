# React Setup
Install Node.js https://nodejs.org/en/download/

Go to project root and type the following command in the terminal to install dependencies: `npm install`  
When done, type `npm start` and open a web-browser at <http://localhost:3333/>  

Start messing around with the example component by editing `./src/js/components/App.js`.  
The browser will keep track of your updates after saving so `ctrl + s` is your friend here.

# ES6 Examples
Go to `./src/js/es6/` folder to try some new es6 features.  
To add a webpack watcher go to the `./<feature-name>` folder of the desired feature and run the following command in the terminal: `webpack -w`
The transpiled output file will now update on `save`  

# Linux configuration
On Ubuntu-based distros: node is named nodejs so we need to make a symlink: `sudo ln -s /usr/bin/nodejs /usr/bin/node` 
Need to manually install `webpack-dev-server` and `babel-loader`. After installing them need to run `npm install`. These steps can probably be eliminated by a better config.
