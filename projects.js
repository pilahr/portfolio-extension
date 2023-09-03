const projects = [
  {
    name: "This site",
    skills: "HTML SCSS JavaScript",
    message:
      "This site was my first project to show my understanding in creating website by using HTML and CSS. I also added JavaScript to rendering the projects I've done later on.",
    code: "https://github.com/pilahr/portfolio-extension",
    preview: "https://pilahr.github.io/portfolio-extension/",
    image: "./images/projects/portfolio.png",
  },
  {
    name: "Album Render Cards",
    skills: "HTML SCSS JavaScript",
    message:
      "This project I was tasked to create the music album by making a render cards to show the information on HTML page by using JavaScript",
    code: "https://github.com/pilahr/album-render-cards",
    preview: "https://pilahr.github.io/album-render-cards/",
    image: "./images/projects/music-album.jpeg",
  },

  {
    name: "Pokedom",
    skills: "HTML SCSS JavaScript",
    message:
      "This task was a part of a tech test when I was on training with _nology. I was tasked to create the Pokemon cards by making a render cards to show the information of each Pokemon on HTML page by using JavaScript",
    code: "https://github.com/pilahr/pokedom",
    preview: "https://pilahr.github.io/pokedom/",
    image: "./images/projects/pokemon-cards.png",
  },

  {
    name: "Calculator",
    skills: "HTML SCSS JavaScript",
    message:
      "This project I created the calculator with HTML, SCSS and made it functions by implementing JavaScript",
    code: "https://github.com/pilahr/calculator",
    preview: "https://pilahr.github.io/calculator/",
    image: "./images/projects/calculator.png",
  },

  {
    name: "Hangman Game",
    skills: "HTML SCSS JavaScript",
    message:
      "This project I created a classic Hangman Game by using HTML, SCSS, Javascript and Confetti NPM package",
    code: "https://github.com/pilahr/Hangman-Game",
    preview: "https://pilahr.github.io/Hangman-Game/",
    image: "./images/projects/hangman-game.png",
  },

  {
    name: "Morse code translator",
    skills: "HTML SCSS JavaScript",
    message:
      "This task was a tech test to create the Morse Code translator to convert English to Morse Code and Morse Code back to English. It was built with Test Driven Development before created the function of the application",
    code: "https://github.com/pilahr/morse-code-translator",
    preview: "https://pilahr.github.io/morse-code-translator/",
    image: "./images/projects/morse-code-translator.png",
  },
  {
    name: "Ticket Tracker",
    skills: "React",
    message:
      "This project was created to demonstrate my understanding in React by creating the site, mapped the name through and added a function to increment/ decrement the ticket.",
    code: "https://github.com/pilahr/ticket-tracker",
    preview: "https://pilahr.github.io/ticket-tracker/",
    image: "./images/projects/ticket-tracker.png",
  },

  {
    name: "Punk API",
    skills: "HTML SCSS JavaScript React",
    message:
      "This project was built to demonstrate my skills at interacting with an external API. It is built using functional React, utilising hooks such as useState and useEffect",
    code: "https://github.com/pilahr/punk-api",
    preview: "https://pilahr.github.io/punk-api/",
    image: "./images/projects/punk-api.png",
  },

  {
    name: "Client project",
    skills: "JavaScript React Git Github AGILE",
    message:
      "A real world Client Project built over the course. This project involved using an AGILE workflow with the group of 5 people which one of us was a trainer who took a project manager role. Pair programming was used throughout the development also",
    code: "https://github.com/nology-tech/Tahiti-Client-Project",
    preview: "https://tahiti-client-project.firebaseapp.com/",
    image: "./images/projects/client-project.png",
  },

  {
    name: "Java Hangman Game",
    skills: "Java",
    message:
      "I created this game using Java to create the classic Hangman Game to play on the terminal. ",
    code: "https://github.com/pilahr/java-hangman-game",
    preview: "#",
    image: "./images/projects/java-hangman-game.png",
  },

  {
    name: "Java Snap Card Game",
    skills: "Java",
    message:
      "I created this game to demonstrate my understanding in Java programming language.",
    code: "https://github.com/pilahr/java-snap-card-game",
    preview: "#",
    image: "./images/projects/java-snap-card-game.png",
  },

  {
    name: "Recipes (Full Stack Project)",
    skills: "REACT, JAVA, Spring boot",
    message:
      "My first full stack project showing my favourite recipes. I created REST API data, fetched and used it on the website. This project uses REACT in the front-end and uses Java, Spring boot on the back-end. The project is still under the development",
    code: "https://github.com/pilahr/recipes",
    preview: "#",
    image: "./images/projects/recipes.png",
  },
  {
    name: "Geolocation",
    skills: "REACT, Javascript, Firebase",
    message:
      "Front-end project built in REACT with log in authentication. MockUser: tellmetheweather1@gmail.com Password: weather1234 The project display the weather regarding user's location and this project turns into a litter helper for the user in the morning with a to do list for the day",
    code: "https://github.com/pilahr/react-geolocation",
    preview: "https://react-geolocation-project-01.web.app/",
    image: "./images/projects/geolocation.png",
  },
  {
    name: "My Journey",
    skills: "REACT, Javascript, Firebase, nodeJs, Mongodb, Vercel",
    message:
      "Full Stack project Holiday Itinerary application which allows me to share photos with close friends/ family who has a log in access while I am on holiday and let them know what I am up to. MockUser: piyablog11@gmail.com Password: blog1234 The project was built in responsive design. Front-end created in REACT with Firebase Log in authentication and hosting through gitHub action. Back-end and URL endpoints for API created with nodeJs framework, connected to non-relational database (MongoDb) and hosted on Vercel. The user can be able to view, upload, edit and delete the holiday itinerary on the application. BACKEND CODE: https://github.com/pilahr/my-journey-new-backend",
    code: "https://github.https://github.com/pilahr/my-journey/pilahr/react-geolocation",
    preview: "https://my-journey-20eb0.web.app",
    image: "./images/projects/my-journey.png",
  },
  {
    name: "Parking Lot",
    skills: "Java",
    message:
      "Parking lot management built in JAVA. It can hold different vehicles, can tell if the parking lot is empty or full and the number of spots that are available",
    code: "https://github.com/pilahr/java-parking-lot",
    preview: "#",
    image: "./images/projects/parking-lot.png",
  },
  {
    name: "Stocks Crypto Tracker",
    skills: "REACT, Javascript",
    message:
      "Frontend desktop website for stocks and crypto currencies tracking. The search function and the tab showing different companies data are not yet working due to limited API call",
    code: "https://github.com/pilahr/stocks-crypto-tracker",
    preview: "https://stocks-crypto-tracker.web.app",
    image: "./images/projects/stock-crypto-tracker.png",
  },
  {
    name: "Expense Manager",
    skills: "REACT, Javascript, Firebase, nodeJs, Mongodb, Vercel",
    message:
      "Full Stack project mobile phone application which allows me to log in and add a daily expenses MockUser: piyablog11@gmail.com Password: 123456  Backend Code: https://github.com/pilahr/my-journey-new-backend](https://github.com/pilahr/expense-manager-backend",
    code: "https://github.com/pilahr/expense-manager-frontend",
    preview: "https://expense-manager-frontend-e1ae8.web.app",
    image: "./images/projects/expense-manager.jpeg",
  },
  
];

export default projects;
