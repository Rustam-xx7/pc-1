Telwind CSS

to set up Tailwind CSS folow this following commands,

### How to set up 

step 1: Install Tailwind CSS, run the command in terminal
```
npm install tailwindcss @tailwindcss/cli
```
step 2:Import Tailwind in your CSS, create src/input.css and write this line 
```
@import "tailwindcss";
```
step 3:Start the Tailwind CLI build process, run the command in terminal.
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
step 4:Start using Tailwind in your HTML, add output.css in src/index.html
```
<link href="./output.css" rel="stylesheet">
```