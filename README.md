# CDR Forecasting Stack Project Webpage

This repository hosts the code for the project webpage. Site is built with plain [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), styled with [Tailwind CSS](https://tailwindcss.com/), and enhanced with some [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for interactivity. 


## Directory structure

```

.
├── images/            # images and logos
├── index.html         # homepage entrypoint
├── LICENSE            # project license
├── node_modules       # installed Node dependencies (generated)
├── package-lock.json  # exact dependency versions (generated)
├── package.json       # project dependencies
├── pages/             # source HTML files
├── posts/             # markdown blog posts
├── README.md          # top-level readme
├── scripts/           # build scripts
├── styles/            # stylesheets
│   ├── input.css      # Tailwind source (edit this)
│   └── output.css     # compiled CSS (do no edit this)
├── tailwind.config.js # Tailwind configuration
└── templates          # HTML templates for pages/posts
```

## Running locally

Make sure you have [Nods.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed

0. Install dependencies
```sh
npm install
```

1. Build posts and watch Tailwind for changes
```sh
npm run build:posts
npm run tailwind:watch 
```
(You can run these in separate terminals, or combine them if you prefer.)

2. Serve the site locally.

Serve the site using a local web server. I use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code

3. Start editing

You can now make changes to the site. 

Note: If you add a new post in ./posts, you will need to re-run:
```sh
npm run build:posts
```

4. Verify that the site builds and renders correctly before pushing any changes