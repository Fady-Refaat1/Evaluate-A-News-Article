## Evaluate News Articles 
# Project description
The user want to analyze an article so he can put the URL in the input field,
the app makes a validation check on the URL if succecfull so the app will fetch the data from "MeaningCloud API"
and load some of this returned data and display it to the user.
some data like .
<ul>
<li>model</li>
<li>score_tag</li>
<li>agreement</li>
<li>subjectivity</li>
<li>confidence</li>
<li>irony</li>
</ul>

# Tools to build

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Node</li>
<li>Jest</li>
<li>Workbox</li>
<li>meaningcloud API</li>
<li>Express</li>
<li>Webpack</li>
</ul>

# How to run 

1. clone the project
2. cd "project directory"
3. in the terminal run ( npm install)
4. make an account in meaningcloud API to get API_KEY
5. make .env file set API_KEY = your key ( in the root directory of the project)
6. run npm build-prod
7. run npm start
8. open it in the brawser on "http://localhost:8083"