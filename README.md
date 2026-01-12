# CDR Forecasting Stack Project Webpage

This repository hosts the code for the project webpage. Site is built with plain [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), styled with [Tailwind CSS](https://tailwindcss.com/), and enhanced with some [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for interactivity. 


## Directory structure

```
├── images/
│   └── logos/
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── pages/          # HTML files
├── README.md       # top-level documentation
├── scripts/        # javascripts
└── styles
│    ├── input.css   # tailwind CSS 
│    └── output.css  # compiled CSS file
└── tailwind.config.js
```

## Running locally

1. Install Tailwind CLI via the [npm](https://www.npmjs.com/)
```sh
npm install tailwindcss @tailwindcss/cli
```
2. Run the following from the root directory to create the css file and watch for changes
```sh
npx @tailwindcss/cli -i ./styles/input.css -o ./styles/output.css --watch
```
3. Serve the webpage, I use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code