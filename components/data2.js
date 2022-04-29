import zap from "../public/images/projects/zap.jpg";
import tetris from "../public/images/projects/tetris.jpg";
import exercise from "../public/images/projects/exercise.jpg";
import abstract from "../public/images/projects/image-ab.jpg";
import pomodoro from "../public/images/projects/pomo.jpg";
import wiki from "../public/images/projects/wiki.jpg";

const projectData2 = [
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
altText: "A screenshot with instructions for using the Wikipedia viewer",
gitLink: "https://github.com/Missarachnid/fcc-wikipedia-viewer",
webLink: "https://missarachnid.github.io/fcc-wikipedia-viewer/"
}
];

export default projectData2;