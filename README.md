# PROJECT THREE

##Charlottesvino
###An app helping streamline wine tasting trips along Charlottesville's Monticello Wine Trail. The app details featured wineries, lists their portfolio of wines, and shares which local restaurants their wines may be found in. Additionally, the app lets users create accounts and build a collection of notes, where they can document ideas as they read through the site.

## User Stories, Wireframes, and ERDs:
* [User Stories](https://trello.com/b/Fp7SEAV6/wdi-project-3)
* [Wireframes](https://marvelapp.com/25ff82c)
* ERD
<img src="/images/wdi-project-3-erd.jpg">


## LINKS TO APP
* [Deployed to Heroku](https://desolate-spire-84354.herokuapp.com/) 
* [GitHub](https://github.com/ebhinch/project_three) 

## PORTFOLIO SITE LINK
* [Portfolio](http://scheduler-hare-37153.bitballoon.com/)

## TECHNOLOGIES USED
* Charlottesvino was built using React, styled-components, NodeJS, Concurrently, BodyParser, Axios, Express, MongoDB, Mongoose. Heroku, Google Fonts, CSS, JavaScript, Trello, Marvel, draw.io, and more.
* Styling was accomplished through the use of styled components exclusively. In this project, I chose to do all styling independently to grow my understanding of CSS and sharpen my skills.

## APPROACH TAKEN
* I focused a lot on planning and getting my wireframes, user models, and user stories thoughtfully setup before I started coding. More than in past projects, I found myself referecing these documents as a guide and reworking them as my user models changed and evolved as the app grew.
* I also focused on using my own CSS styled components rather than bringing in a framework. This allowed me to continue sharpening my styling skills. I felt that this was important because in talking with professional developers, it seems front-end frameworks are rarely used for styling in the workplace. 
* I thoughtfully organized pages, including links and buttons where they seemed most logical. I went through my app daily asking myself if I was able to navigate it easily, without having to look around too much. 
* I also focused on using as much front-end routing as possible and am pleased that so much of my app is functional with exclusively dynamic, front-end routing. 

## REACH GOALS
* Adding an array of restaurants to the VineyardSchema was a reach goal I was pleased to tackle. This added a second array within the schema and allowed me opportunity to continue working with nested components. 
* I also added an array of notes within the UserSchema and built out a full notes component, where I enabled dynamic editing to create, edit and delete edits all with front-end capabilities. 
* Within the user component, I used only front-end routing to edit user content. Utilizing booleans and toggle methods, I was able to switch views dynamicalluy without having to establish new back-end routes. 
* Within the wine component, I used similar front-end toggling to display specific wines' information, also without creating new back-end routing. Instead, all rendering was done exclusively from the front-end vineyard component. 

## UNSOLVED PROBLEMS & TASKS FOR FUTURE
* I am frustrated I could not get the notes on the notes-show page to align as I wanted them to. I spent a great deal of time and referenced several past examples to no avail. I would like to succesfully get these to render in a grid-like pattern.
* Because I was so focused on utilizing strictly styled components and my own CSS, I was not able to make the app fully responsive. I would like to better understand media queries within React and improve this functionality in the future.

## NOTES
* I did want to note that with our TA, Matt's, suggestion, I added inline styling to my index.html files. Using relative positioning and "height=100%," I was able to force my footer to stay at the bottom of the browser's screen regardless of the amount of content rendered on that particular page. I know we typically avoid inline styling at all costs, but Matt noted that this was really the only way to create a footer that would stay in place. 

## RESOURCES
* Class notes and code-along examples
* Classmate collaboration
* TA support from Burns and Matt