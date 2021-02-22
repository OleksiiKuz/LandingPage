Download and Installation
To begin watching or correcting this landing, choose one of the following options to get started:

Fork, Clone, or Download on GitHub: git clone https://github.com/OleksiiKuz/LandingPage.git
Install dependencies, run "npm i"

Usage

After installation, run "gulp" which will open up a preview of the landing in your default browser, watch for changes to files, and live reload the browser when changes are saved. You can view the gulpfile.js to see which tasks are included with the dev environment.

Gulp Tasks
gulp the default task watch browserSync opens the project in your default browser and live reloads when changes are made
gulp build - that builds everything in dist directory

gulp vendor copies dependencies from node_modules to the vendor directory
You must have npm installed globally in order to use this build environment.
