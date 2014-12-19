# Grunt Quickstart

1. Update `npm` to the latest version. You can get super meta and `npm install npm -g` which does the trick. **May need** `sudo`
1. Install `grunt-cli` globally so you can command-line that sucker: `sudo npm install -g grunt-cli`
1. Clone the repo: `git clone https://github.com/svmatthews/grunt-quickstart` and `cd grunt-quickstart`
1. Install dependencies with `npm install`
1. Install bower packages `bower install`
1. If everything installs correctly, you should be able to run `grunt` to build your site and its assets.

# Tasks

#### build `grunt` & `grunt build`

Combines a few of the processes if you need to build the site in its entirety. Runs in order `bower`, `lint`, `css`, `uglify`

#### bower `grunt bower`

Finds all of your `bower.js` dependencies using [wiredep](http://stephenplusplus.github.io/grunt-wiredep/) and injects them into `dest/index.html`'s `<head>` where `<!-- bower:js -->` is located.

#### css `grunt css`

Compiles all of your [Sass](http://sass-lang.com/) `.scss` files within `src/sass/*.scss` and builds them into `dest/static/css/main.css`. This process defaults to "compacting" the code, but you can change the compression options found in the [Sass docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style).

#### lint `grunt lint`

Lints all of your `.js` files within `src/js/*.js`

#### watch `grunt watch`

Watches for changes within your `src/sass/*.scss` files then runs `grunt css` to compile all of the changes into your `dest/static/main.css` files.