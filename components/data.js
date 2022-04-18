import puplanta from "../public/images/projects/georgia-corgi.svg";
import calc from "../public/images/projects/calc.jpg";
import header from "../public/images/projects/header.jpg";
import abstract from "../public/images/projects/image-ab.jpg";
import metadata from "../public/images/projects/metadata.jpg";
import weather2 from "../public/images/projects/open-weather.png";
import pomodoro from "../public/images/projects/pomo.jpg";
import restaurant from "../public/images/projects/restaurant.jpg";
import shortener from "../public/images/projects/shortener.jpg";
import simon from "../public/images/projects/simon.jpg";
import tictactoe from "../public/images/projects/tictactoe.jpg";
import timestamp from "../public/images/projects/timestamp.jpg";
import twitch from "../public/images/projects/twitch.jpg";
import wiki from "../public/images/projects/wiki.jpg";
import website from "../public/images/202-sphere.svg";
import github from "../public/images/GitHub-Mark-32px.png";
import exercise from "../public/images/projects/exercise.jpg";
import zap from "../public/images/projects/zap.jpg";
import mmkepler from "../public/images/newestlogo2.png";
import tetris from "../public/images/projects/tetris.jpg";


const projectData = [
{id: 1,
name: "Puplanta",
//image: "/public/images/projects/georgia-corgi.svg",
image: puplanta,
altText: "The state of Georgia colored orange, with a corgi head, a heart and a corgi butt on it",
text: "Dog Park and Shop voting app",
gitLink: "https://github.com/Missarachnid/puplanta2",
webLink: "http://puplanta.com/"
},
{id: 2,
name: "Weather App",
//image: "/public/images/projects/open-weather.png",
image: weather2,
altText: "The forecast for Bartow County Georgia, on a teal card, from 8/8/19",
text: "Your current locations weather forecast",
gitLink: "https://github.com/Missarachnid/open-weather-sass-redo",
weblink: "https://warm-cliffs-12741.herokuapp.com/"
},
{id: 3,
name: "Tic Tac Toe",
//image: "/public/images/projects/tictactoe.jpg",
image: tictactoe,
altText: "A game of tic tac toe, 2 moves in",
text: "The game you remember with webgl effects",
gitLink: "https://github.com/Missarachnid/fcc-tictactoe",
webLink: "https://missarachnid.github.io/fcc-tictactoe/"
}, 
{id: 4,
name: "Simon",
//image: "/public/images/projects/simon.jpg",
image: simon,
altText: "An interface made to look like the Simon matching game, with 4 buttons of different colors around the outside.",
text: "A fun matching game",
gitLink: "https://github.com/Missarachnid/fcc-simon",
webLink: "https://missarachnid.github.io/fcc-simon/"
},
{id: 5,
name: "mmkepler.com",
//image: "/public/images/newestlogo2.png",
image: mmkepler,
altText: "The logo for my website: Melissa Kepler, Full Stack Developer in front of a small moon orbiting a planet",
text: "The code for my website",
gitLink: "https://github.com/Missarachnid/mmkepler.com",
webLink: "https://mmkepler.com/"
},
{id: 6,
name: "URL Shortener",
//image: "/public/images/projects/shortener.jpg",
image: shortener,
altText: "A screenshot of the instructios for using the URL shortener",
text: "Shorten Urls",
gitLink: "https://github.com/Missarachnid/fcc-url-shortener",
webLink: "https://momentous-trick.glitch.me/"
},
{id: 7,
name: "Zapier 'Zap'",
//image: "/public/images/projects/zap.jpg",
image: zap,
altText: "Zapier's logo in red text",
text: "Zapier's API sends form data to a google doc",
gitLink: "https://github.com/Missarachnid/Email-to-GoogleSheets-Zap",
webLink: "https://brave-curie-83cf49.netlify.app/"
},
{id: 8,
name: "Tetris",
//image: "/public/images/projects/tetris.jpg",
image: tetris,
altText: "A screen shot of a tetris gameboard with a space background",
text: "A React version of Tetris",
gitLink: "https://github.com/Missarachnid/FCC-React-Tetris",
webLink: "https://missarachnid.github.io/FCC-React-Tetris/"
},
{id: 9,
name: "Exercise Tracker",
//image: "/public/images/projects/exercise.jpg",
image: exercise,
altText: "A screenshot of a form for creating exercises in the exercise tracker",
text: "Create users and enter exercises",
gitLink: "https://github.com/Missarachnid/boilerplate-project-exercisetracker",
webLink: ""
},
{id: 10,
name: "Image Search",
//image: "/public/images/projects/image-ab.jpg", 
image: abstract,
altText: "A screenshot of instructions for using the image search",
text: "Google API image search",
gitLink: "https://github.com/Missarachnid/fcc-imageSearch",
webLink: "https://corgi.glitch.me/"
},
{id: 11,
name: "Kartoffel",
//image: "/public/images/projects/pomo.jpg",
image: pomodoro,
text: "A potato version of a pomodor timer",
altText: "A cartoon potato with a timer display inside of it",
gitLink: "https://github.com/Missarachnid/fcc-pomodoro",
webLink: "https://missarachnid.github.io/fcc-pomodoro/"
},
{id: 12,
name: "Wikipedia Viewer",
//image: "/public/images/projects/wiki.jpg",
image: wiki,
text: "Wikipedia API project",
alttext: "A screenshot with instructions for using the Wikipedia viewer",
gitLink: "https://github.com/Missarachnid/fcc-wikipedia-viewer",
webLink: "https://missarachnid.github.io/fcc-wikipedia-viewer/"
}, 
{id: 13,
name: "Header Parser",
//image: "/public/images/projects/header.jpg",
image: header,
altText: "A screenshot of instructions on how to use the header parser microservice",
text: "Returns your header information",
gitLink: "https://github.com/Missarachnid/fcc-request-header-parser",
webLink: "https://header-parser-mmk.herokuapp.com/"
},
{id: 14,
name: "Time Stamp",
//image: "/public/images/projects/timestamp.jpg",
image: timestamp,
altText: "A screenshot of instructions on how to use the time stamp microservice",
text: "If a date is input, a unix time stamp is returned",
gitLink: "https://github.com/Missarachnid/fcc-timestamp",
webLink: "https://timestamp-mmk.herokuapp.com/"
},
{id: 15,
name: "Calculator",
//image: "/public/images/projects/calc.jpg",
image: calc,
altText: "An interface created to look like an oldschool solar hand-held calculator",
text: "A handheld calculator",
gitLink: "https://github.com/Missarachnid/fcc-calculator",
webLink: "https://missarachnid.github.io/fcc-calculator/"
},
{id: 16,
name: "Meta Data Project",
//image: "/public/images/projects/metadata.jpg",
image: metadata,
altText: "A screenshot of instructions on how to use the meta data microservice",
text: "Reads submitted file's size",
gitLink: "https://github.com/Missarachnid/file-metadata",
webLink: "https://kepler.glitch.me/"
}

];
export default projectData;