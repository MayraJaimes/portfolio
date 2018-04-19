var projectHTML;

var projectList = [
  {
    name: 'Disney Trivia', 
    description: 'In this app the user is asked 10 different question about Disney. Once they complete the trivia they get their results displayed and they are given the opportunity to start the trivia again with the questions shuffled.', 
    link: 'https://mayrajaimes.github.io/trivia_game_app/', 
    github: 'https://github.com/MayraJaimes/trivia_game_app',
    image: 'trivia.png', 
    technologies: 'HTML5, CSS, Javascript, JQuery'
  },
  {
    name: 'Chicago Concerts App', 
    description: 'This application shows the user the concerts that are playing at several Chicago venues.', 
    link: 'https://github.com/MattMurn/chi-concert-proj', 
    github: 'https://github.com/MayraJaimes/rpg_game',
    image: 'concerts.png', 
    technologies: 'HTML5, CSS, Javascript, JQuery'
  },
  {
    name: 'RPG Fighting Game', 
    description: 'In this game the app displays 4 heroes and 4 enemies. The user gets to pick a hero and this will be the character they will use for the game. They then choose the first enemy to fight. To win they have to defeat all the enemies\' health points.\'', 
    link: 'https://mayrajaimes.github.io/rpg_game/', 
    github: 'https://github.com/MayraJaimes/rpg_game',
    image: 'rpg.jpeg', 
    technologies: 'HTML5, CSS, HTML5, CSS, Javascript, JQuery'
  },
    {
    name: 'Hangman Game', 
    description: 'The theme for this hangman game is Sports. The user has to guess what sport name is being displayed!', 
    link: 'https://mayrajaimes.github.io/hangman_game/', 
    github: 'https://github.com/MayraJaimes/hangman_game',
    image: 'hangman.png', 
    technologies: 'HTML5, CSS, HTML5, CSS, Javascript, JQuery'
  },
  {
    name: 'Mongo Scraper', 
    description: 'The Mongo Scraper web app lets users view, save, and leave comments on the latest health news.', 
    link: 'https://mongoscrapermj.herokuapp.com/', 
    github: 'https://github.com/MayraJaimes/mongo_scraper',
    image: 'scraper.png', 
    technologies: 'HTML5, CSS, Javascript, Node.js, Express, MongoDB, Mongoose'
  },
  {
    name: 'Eat that Burger', 
    description: 'Eat that Burger is a restaurant app that lets users input the names of burgers they\'d like to eat. Once submitted the name of the burger gets moved to another area where the user has the ability to "devour it" which will then change it to the "devoured section.', 
    link: 'https://secret-dusk-44246.herokuapp.com/', 
    github: 'https://github.com/MayraJaimes/burger_app',
    image: 'burger.png', 
    technologies: 'HTML5, CSS, Javascript, Node.js, Express, MySQL'
  },
  {
    name: 'Friend Finder', 
    description: '', 
    link: 'https://friend-finder-survey-may.herokuapp.com/', 
    github: 'https://github.com/MayraJaimes/friend_match',
    image: 'friendFinder.png', 
    technologies: 'HTML5, CSS, Javascript, Node.js, Express, MySQL'
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
          <div class= "icons">
          <a href="${projectList[i].github}">
            <img src="assets/images/github.png" alt="Github Icon">
          </a>
          <a href="${projectList[i].link}">
            <img src="assets/images/link2.png" alt="Link Icon">
          </a>
        </div>
          <p>Technologies Used: HTML5, CSS, Javascript, JQuery</p> 
        </div>
      </div>
      </a>
    </div>
   `
  $(".projects").append(projectHTML);
}