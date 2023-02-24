# :checkered_flag:Team 6:checkered_flag:

# How It's Made :nut_and_bolt: :hammer::wrench::
 This application built with React.js, Express, Node, Webpack, Morgan, CORS & Cookie-Parser.

# How It's Works:white_check_mark::🖥 
 
Your final application does not need to follow the same design, but should be similar in terms of functionality and user experience (e.g., Home page that shows all exams, clicking on an exam will show its details, admin page to add new exams or remove existing ones, etc.).

:arrow_forward: ::construction:	  Create the frontend with fake data


:arrow_forward: ::construction:	 Connect the frontend to our backend and render real data


:arrow_forward: ::construction:	 Write your own backend and connect it to your frontend Deployment


:arrow_forward: ::construction:	 In order to support the building of this application, you’ll need to work on several different tasks. Some of these can be done in parallel, meaning multiple people can work on them at once.

:vertical_traffic_light:	 In the first step:

 :bangbang:	Set up your code repository, using the skeleton we have provided for you.

 :bangbang:	Create all three pages noted above – you can work on these all separately.

:vertical_traffic_light:	In the second step:

 :bangbang:	Add interaction with our API; each page can also be done separately.

:vertical_traffic_light:	In the third and fourth steps:

 :bangbang:	Creating the data models and building their endpoints can also be done in parallel.

:vertical_traffic_light:	This skeleton contains two different applications 

 :bangbang:	-- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express. 

:mortar_board:: In order to make both of them work together:

 :bangbang: you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## Client :triangular_flag_on_post:	
:white_check_mark:	In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```

You should then be able to visit `localchost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

## API :triangular_flag_on_post:	
 :white_check_mark:	 In order to run the server, you'll run the following commands:

```bash
cd api/
npm i
npm start
```

## Run Both :triangular_flag_on_post:	
 :white_check_mark:	 In order to run the server, you'll run the following commands:

```bash
cd /
npm i
npm run dev
```

# :broom::soap:Clean Up Code Before Pushing:soap::broom:
In main directory run:

```bash
npm run prettier &&  rm -rvf */node_modules && rm -rvf package-lock.json && rm -rvf node_modules && git add . && git commit -m "Whatever changes you made" && git push
```

# :heavy_plus_sign::heavy_plus_sign:Merging code:heavy_plus_sign::heavy_plus_sign:

you can do so by:

## 1.) First making sure you're on your branch.
```bash
git branch -a
```
##### if you haven't made a branch:
```
git checkout -b name-of-your-branch
```
## 2.) It will then list all the branches correlated with this repository and a asterisks next to the current branch you're on and a list of read remote branches.
```
git add . && git commit -m "explain whatever the work you did" && git push 
```
## 3.) Add your work then, fetch and pull all the current changes from the branches.
```
git fetch --all && git pull --all
```
## 4.) You would want to merge or rebase to your branch (whatever you are comfortable doing and know better) .
git merge main

### Important: Remember to resolve the conflicts within the files, there will be current and incoming changes, accept the incoming changes from the merge.
### then you would want to commit these changes as well:
```
git add . && git commit -m "Merged main branch into current branch" && git push 
```
# Demo :video_game:

You should then be able to visit `localhost:3000` in your browser and see the server running.
