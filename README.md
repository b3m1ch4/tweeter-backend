# Tweeter ReadMe
Tweeter is an application that allows users to track bird sightings. I built it using React, Express and MongoDB during General Assembly's Web Development Immersive.

![LandingPage](https://i.imgur.com/CeYEFs9.png)

## Links
<li>Web application: https://b3m1ch4.github.io/tweeter-frontend/#/</li>
<li>Frontend repo: https://github.com/b3m1ch4/tweeter-frontend</li>
<li>Backend remote: https://git.heroku.com/tweeter-remote-0808.git</li>
<li>Backend repo: https://github.com/b3m1ch4/tweeter-backend</li>

## Tweeter's Stack
<li> React </li>
<li> Express </li>
<li> MongoDB </li>
<li> GitHub </li>
<li> Heroku </li>

## Plan
This is a ReadMe for my fourth and final project from General Assembly's Web Development
Immersive program and it is more personal and reflective than most ReadMe's you may encounter. For the casual or technical reader, I will summarise my appliction thus: Tweeter is a fullstack, JS application that allows users to share their avian interactions and learn more about birds; for more technical instruction, please see the Setup header below.

Back to the introspection... I carved out a very ambitious MVP for this project, but I was not able to successfully achieve that goal within four days. I was able to successfully build a working React design that I intend to expand upon in the coming days.

I chose to work with React for my capstone project because it is a new technology, it
is very much in demand and it builds on material that we focused on in WDI. I can't
believe that I'm saying this, because I was such a fan of Ruby, but I am falling in love
with Javascript. React uses JSX, so that makes it all the more appealing.

I planned to integrate a third party data store, similar to my third project in WDI, so that users can upload photos. I was able to create this successfully, but I was unfortunately not able to integrate this with the client and is therefore not in production.

React is trickier than it may seem. Whilst it is very similar to JQuery, there are a
number of things I took for granted in JQuery that I couldn't (or shouldn't) have with
React. One major component I learned about in React is routering. React has been presented
to me as a good frontend framework because it has a robust routering system. This is true,
but in exchange it requires much finer routering tuning. It is straightforward, but it did
catch me off guard.

Overall, React is my favourite frontend library and I think it is because it is a very 'back end seeming' library. While I generally leaned towards the backend, this project truly confirmed that this is my direction in web development.

### (Known) Problems
  <li> I would like to improve the user experience in form population </li>
  <li> I would like to create a virtual model in order for users to see who posted what </li>
  <li> I would like to fix how React passes the data stream, so users can upload images to my API </li>
  <li> I would like to add styling to the page </li>

### User Stories and future development
Entity Relationship Diagram (ERD):
![ERD](https://i.imgur.com/DTRBLDy.jpg)

As a user, I should be able to:

<li> sign-up, sign-in, sign-out and change my possword </li>
<li> create a bird sighting log </li>
<li> a bird sighting log </li>
<li> a bird sighting log </li>
<li> see all bird sightings on Tweeter other users have made </li>
<li> be informed when I've used the application correctly </li>
<li> be informed when I've used the application incorrectly </li>

As a user, I would some day like to be able to:

<li> manage my own resources specifically </li>
<li> learn more about birds through encyclopedia entries </li>
<li> post, view and delete images of birds I've seen in real life </li>
<li> view images other users have posted </li>
<li> make friends with other bird watchers </li>

<details>
<summary>My wireframes and brainstorm: </summary>

![Brainstorm1](https://i.imgur.com/K8zL3pM.jpg)
![Brainstorm2](https://i.imgur.com/cN5mEgR.jpg)
![Brainstorm3](https://i.imgur.com/4aLzgS7.jpg)
![Brainstorm4](https://i.imgur.com/olnhwvj.jpg)
![Brainstorm5](https://i.imgur.com/PDXRQ0r.jpg)
![Brainstorm6](https://i.imgur.com/teETgQB.jpg)
![Brainstrom7](https://i.imgur.com/Lo4fdg1.jpg)

</details>

<blockquote>
Sightings
<p> POST: /sightings sightings#create (client -> API -> client) </p>
<p> GET: /sightings/ sightings#index (client -> API -> client) </p>
<p> PATCH: /sightings/:id sightings#update (client -> API -> client) </p>
<p> DELETE: /sightings/:id sightings#destroy (client -> API -> client) </p>
</blockquote>

### Setup
Thank you for reading about Tweeter! If you'd like to use my code to make your
own bird watching app, please fork and clone the backend and frontend repos listed
above. Additionally, you'll need to setup:

<li>node modules in package.json with the terminal command ```npm install```</li>
<li>a react application with the terminal command ```create-react-app```</li>
<li>setup a remote server (I suggest Heroku)</li>
