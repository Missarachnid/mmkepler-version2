import puplanta from "../public/images/projects/georgia-corgi.svg";
import weather2 from "../public/images/projects/open-weather.png";
import zap from "../public/images/projects/zap.jpg";
import tetris from "../public/images/projects/tetris.jpg";
import simon from "../public/images/projects/simon.jpg";
import tictactoe from "../public/images/projects/tictactoe.jpg";

const projectData = [
{id: 1,
name: "Puplanta",
image: puplanta,
altText: "The state of Georgia colored orange, with a corgi head, a heart and a corgi butt on it",
text: "Dog Park and Shop voting app",
gitLink: "https://github.com/Missarachnid/puplanta2",
webLink: "http://puplanta.com/"
},
{id: 2,
name: "Weather App",
image: weather2,
altText: "The forecast for Bartow County Georgia, on a teal card, from 8/8/19",
text: "Your current locations weather forecast",
gitLink: "https://github.com/Missarachnid/open-weather-sass-redo",
weblink: "https://warm-cliffs-12741.herokuapp.com/"
},
{id: 3,
name: "Tic Tac Toe",
image: tictactoe,
altText: "A game of tic tac toe",
text: "Tic Tac Toe & webgl effects",
gitLink: "https://github.com/Missarachnid/fcc-tictactoe",
webLink: "https://missarachnid.github.io/fcc-tictactoe/"
}, 
{id: 4,
name: "Simon",
image: simon,
altText: "An interface made to look like the Simon matching game, with 4 buttons of different colors around the outside.",
text: "A fun matching game",
gitLink: "https://github.com/Missarachnid/fcc-simon",
webLink: "https://missarachnid.github.io/fcc-simon/"
},
{id: 5,
  name: "Zapier 'Zap'",
  image: zap,
  altText: "Zapier's logo in red text",
  text: "Zapier's API sends form data to a google doc",
  gitLink: "https://github.com/Missarachnid/Email-to-GoogleSheets-Zap",
  webLink: "https://brave-curie-83cf49.netlify.app/"
  },
  {id: 6,
  name: "Tetris",
  image: tetris,
  altText: "A screen shot of a tetris gameboard with a space background",
  text: "A React version of Tetris",
  gitLink: "https://github.com/Missarachnid/FCC-React-Tetris",
  webLink: "https://missarachnid.github.io/FCC-React-Tetris/"
  }
];
export default projectData;
