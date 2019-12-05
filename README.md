## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After cloning the repository into you machine, access the project directory and run `npm install` to install all the needed packages.

Wait for all the packages to be installed and run `yarn start`.

Now you can access the project in `http://localhost:3000/`, (if possible run it on chrome, i had no time to check if everything was ok in other browsers :S).

This project uses scss for the styles and they are automatically compiled when saved.

The browser window auto-refreshes when you save a change.

Be careful with the CORS policy, i had some trouble sometimes with that. Don't know exactly why but in order to solve it i've runned `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security` in a empty tab on the console and it worked for me.
