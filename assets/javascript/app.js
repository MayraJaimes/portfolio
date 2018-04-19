var projectHTML;

var projectList = [
  {
    name: 'Disney Trivia', 
    description: 'In this app the user is asked 10 different question about Disney. Once they complete the trivia they get their results displayed and they are given the opportunity to start the trivia again with the questions shuffled.', 
    link: 'https://mayrajaimes.github.io/trivia_game_app/', 
    image: 'trivia.png', 
    technologies: 'HTML5, CSS, Javascript, JQuery'
  },
  {
    name: 'Chicago Concerts App', 
    description: 'This application shows the user the concerts that are playing at several Chicago venues.', 
    link: 'https://github.com/MattMurn/chi-concert-proj', 
    image: 'concerts.png', 
    technologies: 'HTML5, CSS, Javascript, JQuery'
  },
  {
    name: 'RPG Fighting Game', 
    description: 'In this game the app displays 4 heroes and 4 enemies. The user gets to pick a hero and this will be the character they will use for the game. They then choose the first enemy to fight. To win they have to defeat all the enemies\' health points.\'', 
    link: 'https://mayrajaimes.github.io/rpg_game/', 
    image: 'rpg.jpeg', 
    technologies: 'HTML5, CSS, HTML5, CSS, Javascript, JQuery'
  },
    {
    name: 'Hangman Game', 
    description: 'The theme for this hangman game is Sports. The user has to guess what sport name is being displayed!', 
    link: 'https://mayrajaimes.github.io/hangman_game/', 
    image: 'hangman.png', 
    technologies: 'HTML5, CSS, HTML5, CSS, Javascript, JQuery'
  },
  {
    name: 'Mongo Scraper', 
    description: 'The Mongo Scraper web app lets users view, save, and leave comments on the latest health news.', 
    link: 'https://mongoscrapermj.herokuapp.com/', 
    image: 'scraper.png', 
    technologies: 'HTML5, CSS, Javascript, Node.js, Express, MongoDB, Mongoose'
  },
  {
    name: 'Eat that Burger', 
    description: 'Eat that Burger is a restaurant app that lets users input the names of burgers they\'d like to eat. Once submitted the name of the burger gets moved to another area where the user has the ability to "devour it" which will then change it to the "devoured section.', 
    link: 'https://secret-dusk-44246.herokuapp.com/', 
    image: 'burger.png', 
    technologies: 'HTML5, CSS, Javascript, Node.js, Express, MySQL'
  },
  {
    name: 'Loteria Click Game', 
    description: 'This is a memory game created with React. The app displays 16 cards and the goal of the game is to click as many different cards as possible. If they click on the same image twice they lose.', 
    link: 'https://loteria-mtj.herokuapp.com/', 
    image: 'loteria.jpg', 
    technologies: 'HTML5, CSS, Javascript, React, Node.js'
  }
];

for (i = 0; i<projectList.length; i++) {
 projectHTML = 
 `
 <div class="container" style="background-image: url(assets/images/${projectList[i].image});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;">
    <a href="${projectList[i].link}">
      <div class="overlay">
        <div class="text">
          <h3>${projectList[i].name.toUpperCase()}</h3>
          <p class="links"> <a href="${projectList[i].link}"> Github </a> | <a href="${projectList[i].link}"> Web </a> </p>
          <p>Technologies Used: HTML5, CSS, Javascript, JQuery</p> 
        </div>
      </div>
      </a>
    </div>
   `

  $(".projects").append(projectHTML);
}

// <p>${projectList[i].description}</p>