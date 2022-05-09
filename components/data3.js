import header from "../public/images/projects/header.jpg";
import timestamp from "../public/images/projects/timestamp.jpg";
import calc from "../public/images/projects/calc.jpg";
import metadata from "../public/images/projects/metadata.jpg";

const projectData3 = [
  {id: 13,
    name: "Header Parser",
    image: header,
    altText: "A screenshot of instructions on how to use the header parser microservice",
    text: "Returns your header information",
    gitLink: "https://github.com/Missarachnid/fcc-request-header-parser",
    webLink: "https://header-parser-mmk.herokuapp.com/"
    },
    {id: 14,
    name: "Time Stamp",
    image: timestamp,
    altText: "A screenshot of instructions on how to use the time stamp microservice",
    text: "If a date is input, a unix time stamp is returned",
    gitLink: "https://github.com/Missarachnid/fcc-timestamp",
    webLink: "https://timestamp-mmk.herokuapp.com/"
    },
    {id: 15,
    name: "Calculator",
    image: calc,
    altText: "An interface created to look like an oldschool solar hand-held calculator",
    text: "A handheld calculator",
    gitLink: "https://github.com/Missarachnid/fcc-calculator",
    webLink: "https://missarachnid.github.io/fcc-calculator/"
    },
    {id: 16,
    name: "Meta Data Project",
    image: metadata,
    altText: "A screenshot of instructions on how to use the meta data microservice",
    text: "Reads submitted file's size",
    gitLink: "https://github.com/Missarachnid/file-metadata",
    webLink: "https://kepler.glitch.me/"
    }
];

export default projectData3;