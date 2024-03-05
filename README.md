first you need to downlode react in your system and ada one extension to your browser that is "React Development Tools"

after installation and of tool you create a folder thats name you choose 

then open the folder in vs code and open terminal 

after opning a terminal you need to install some basic compents of react that automatically added by few lines of command 

Terminal Command is-

command--->   npx create-react-app my-app

this line create the whole app format to your system that contaions folders 
like - node_modules,public,src and some json files like package-lock.json and package.json
and also  create one .gitignore and ne README.md file 

we ignore all these stuffs and only working on src folder
after the src folder you need to open the folder by terminal command

Terminal Commandis-
command--->   cd my-app

and then need to start the react server by terminal command

Terminal Commandis-
command--->   npm start

that command automaticilly open a app.js file in your browser thet is in src folder and open the react UI then we can change the App.js folder code to our code and run our application 

after opening the src folder in vs code they have several files like - App.css, App.js, App.text.js, index.css, index.js, logo.svg, reportWebVitals.js and setupTexts.js
we have only required App.js ,App.css and one HTML file that is in a public folder and file name index.Html
 in this HTML file we add Bootstap Link and Java Script 
 
 <!--Bootstrap Css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
 
 You can copy and paste the bootstrap css link in that index.html file under the header tag and
 
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
You can copy and paste the JavaScript link in the index.html file before end of body tag and save the index.html file 
you can remove all comments from the index.html file for effective code view

Here index.Html file work complete you can save the file as ctr+s

then move to the src folder
open the app.js file remove all code and paste the app.js file content from my github files and save the file ctr+s

then create component folder under the src folder and create 2 javascript file rename with Navbar.js and TextForms.js

open the Navbar.js file paste the code in the file from my github files and save the file ctr+s
open the TextForms.js file paste the code in the file from my github files and save the file ctr+s

and your application is ready to lauch 
