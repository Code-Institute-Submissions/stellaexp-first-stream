# Stream One - The Thali Rooms

'The Thali Rooms' was created for the Code Institute Stream One project. We were assigned the the task of creating a website, using Front-End Technologies. There were two options given in the brief - I went for the latter option of creating a project of my choosing. I decided to base this on a fictional restaurant, which I named The Thali Rooms.

## UX

### Scope

My UX process was to acertain what a user would expect to see from a restaurant website. I started by researching what similar restaurants included on their websites and constructed some wireframes based on my research and knowledge.

The website was aimed at a fictional audience, who are interested in Indian food, with a particular focus on vegetarian and vegan cuisine, with a green ethos. The website should mainly be an information platform, with the restaurants location, and a booking form that submits for a specified number of people. It was integral that the site was simple, clean and intuitive.

### User stories

As a user, I want to:
1. Access the website to read about the restaurant, to see what ethos they have etc
2. I want to read the menu to see what food they have available
3. I need to see where the restaurant is 
4. I would like to be able to book a table via a form (or similar)

### Wireframes

Are in wireframes folder of project

## Features
1. Sticky Navbar
* However far the user scrolls down, they will always have navigation at the top of their screen.
** On mobile, it utilises Bootstraps responsive 'Hamburger' menu
2. Fontawesome
* The Fontawesome library creates a visual element to the site and communicates to the user through icons.
3. CSS on hover button
* This entices users to click on the button, to entice them to find out more about the restaurant.
4. jQuery Toggle Functionality
* Invited users to click on each block, revealing more about the restaurant.
5. Google Maps API
* This lets users see where the fictional restaurant is using Google Maps and allows them to interact with the map in real-time.
6. Menu
* The menu was created using Photoshop and utilises bootstrap 'thumbnail' class for responsiveness.
7. Form validation
* This requires users to input a value before submition, meaning the form will be complete on submission.
8. Bootstrap
* Bootstrap has responsive functionality that was particularly useful when it came to the images on the 'Menu' section of the site.

## Features Left to Implement
Instead of a form, a live booking calander which shows what availability the restaurant has. I'd also like to include an events calanders that users can look up what's going on in the coming weeks and months. 

## Technologies Used
1. Bootstrap
2. Fontawesome
3. Google Fonts
4. Google Maps API
5. jQuery

## List of pages

1. Index/home page
2. Vision
3. Menu
4. Contact


## Testing
I decided to test the website manually, I approached this from the viewpoint of a user and created a checklist via a table so that any future tester can follow - and add to - the testing manual.

### Index (Home page)

| Section       | Functionality | Is it working? Y/N  | If N, has it been fixed? |
| ------------- |:-------------:| -------------------:| ------------------------:|
|  Navbar       | Links to relevant page | Y | na |
|  Navbar sticky | Always at top of screen when scrolling | Y | |
| Navbar responsive     |  Works in responsive mode | Y | |
| Jumbotron image | Loaded      |  Y | |
| Button | Links to vision.html      |  Y | |
| Fontawesome icons | Loaded     |  Y | |
| Button| Links to contact.html      |  Y | |
| Responsive| Responds on all different mobile sizes |  Y | |

### Vision

| Section       | Functionality | Is it working? Y/N  | If N, has it been fixed? |
| ------------- |:-------------:| -------------------:| ------------------------:|
|  Navbar       | Links to relevant page | Y | na |
|  Navbar sticky | Always at top of screen when scrolling | Y | na |
| Navbar responsive     |  Works in responsive mode | Y | na |
| Jumbotron image | Loaded      |  Y | na |
| Video | Youtube video loaded      |  Y | na |
| jQuery | on toggle, reveals more   |  Y | na |
| Button| Links to contact.html      |  Y | na |
| Responsive| Responds on all different mobile sizes |  Y | na |

### Menu

| Section       | Functionality | Is it working? Y/N  | If N, has it been fixed? |
| ------------- |:-------------:| -------------------:| ------------------------:|
|  Navbar       | Links to relevant page | Y | na |
|  Navbar sticky | Always at top of screen when scrolling | Y | na |
| Navbar responsive     |  Works in responsive mode | Y | na |
| Jumbotron image | Loaded      |  Y | na |
| Menu | Image loaded to page size      |  Y | na |
| Gallery | Images loaded and responsive   |  Y | na |
| Responsive| Responds on all different mobile sizes |  Y | na |

### Contact

| Section       | Functionality | Is it working? Y/N  | If N, has it been fixed? |
| ------------- |:-------------:| -------------------:| ------------------------:|
|  Navbar       | Links to relevant page | Y | na |
|  Navbar sticky | Always at top of screen when scrolling | Y | na |
| Navbar responsive     |  Works in responsive mode | Y | na |
| Form | Is it validated     |  Y | na |
| Google Maps API | Google Maps loaded     |  N | Fixed this assigning API key |
| Gallery | Images loaded and responsive   |  Y | na |
| Responsive| Responds on all different mobile sizes |  Y | na |


### Bugs
The Google Maps API originally worked, and then stopped working towards the end of development. This was fixed by signing up to Google Developers and assigning an API key in the script.

## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits
Code Institute and W3 schools

## Content
All content is fictional and created by myself. The location of The Thali Rooms is a random location in Hackney, East London.

## Media
* All images are my own, taken from a trip to India in 2017.

* I have embedded an Action Against Hunger Youtube video on the 'Vision' section of the site.

* The menu image is my own design, created using Photoshop

## Acknowledgements
I received inspiration for this project from looking at these vegetarian and thali inspired websites

* https://www.thethalirestaurant.co.uk/
* http://annajones.co.uk/

I used Bootstrap documentation and W3 schools tutorials to look up best coding practices. I have included links via comments for specific tutorials followed.