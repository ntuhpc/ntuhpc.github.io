# NTU HPC Website

This is the source code of the NTU HPC website available at [ntuhpc.org](http://ntuhpc.org).

## Development

First, clone this repo

```bash
$ git clone git@github.com:ntuhpc/ntuhpc.github.io.git
```

Then install all the node modules (make sure you have node.js)

```bash
$ npm install
$ (sudo) npm install -g gulp-cli
```

Now you can use gulp to execute the `dev` task, which monitors all the files and refresh 
your browser automatically.

```bash
$ gulp dev
```

## Deployment

After you modified the website, run the following command

```bash
$ gulp
```

This minifies all the files for you. Now you can commit and push it to GitHub.
