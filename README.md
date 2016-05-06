example-of-gulp-less-zero-exit-on-error
=======================================

Example of improper exit code of node/gulp task if there is `pipe()`
after `gulp-less` usage.

1. Run `npm install` to setup project.

2. Run `npm run correct ; echo $?` to see that node/gulp
   task has exited with exit code `1` because of invalid less file.

3. Run `npm run wrong ; echo $?` to see that node/gulp
   task has exited with exit code `0` despite the fact that less file
   is invalid.
    
Same happens when using `./node_modules/.bin/gulp` instead of `npm run`.