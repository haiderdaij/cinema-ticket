// Action
import Expend4bles from "../images/action/Expend4bles.jpg";
import FullExpend4bles from "../images/action/fullExpend4bles.jpg";
import Extraction2 from "../images/action/Extraction2.jpg";
import FullExtraction2 from "../images/action/fullExtraction2.jpg";
import CyberHeist from "../images/action/Cyber_heist.jpg";
import FullCyberHeist from "../images/action/fullCyber_heist.jpg";

// Upcomming
import Aquaman from "../images/upcomming/aquaman.jpeg";
import Napoleon from "../images/upcomming/nap.jpeg";
import Deadpool from "../images/upcomming/dedpol.jpeg";
import Joker from "../images/upcomming/joker.jpeg";

const actionMovies = [
  {
    id: "a-1",
    name: "Expend4bles",
    srcImage: Expend4bles,
    fullImage: FullExpend4bles,
    time: "1h 43m",
    type: "Action adventure thriller",
    description:
      "Armed with every weapon they can get their hands on, the Expendables are the world's last line of defense and the team that gets called when all other options are off the table.",
    rate: 4.8,
    director: "Scott Waugh",
    writers: [
      { name: "Kurt Wimmer" },
      { name: "Tad Daggerhart" },
      { name: "Max Adams" },
    ],
    cast: [
      { name: "Jason Stratham" },
      { name: "50 Cent" },
      { name: "Megan Fox" },
      { name: "Sylvester Stallone" },
    ],
    trailerLink: "https://www.youtube.com/watch?v=DhlaBO-SwVE",
  },
  {
    id: "a-2",
    name: "Extraction 2",
    srcImage: Extraction2,
    fullImage: FullExtraction2,
    time: "2h 3m",
    type: "Action/Thriller",
    description:
      "Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family.",
    rate: 7,
    director: "Sam Hargrave",
    writers: [{ name: "William Hoy" }, { name: "Álex Rodríguez" }],
    cast: [
      { name: "Chris Hemsworth" },
      { name: "Adam Bessa" },
      { name: "Tinatin Dalakishvili" },
      { name: "Daniel Bernhardt" },
    ],
    trailerLink: "https://www.youtube.com/watch?v=Y274jZs5s7s",
  },
  {
    id: "a-3",
    name: "Cyber Heist",
    srcImage: CyberHeist,
    fullImage: FullCyberHeist,
    time: "1h 55m",
    type: "Action adventure thriller",
    description:
      "A group of skilled hackers is recruited for a heist that involves breaking into a high-security virtual vault; what they didn't expect was to have to fight their way out.",
    rate: 4.7,
    director: "Michael Bay",
    writers: [{ name: "Alex Kurtzman" }, { name: "Roberto Orci" }],
    cast: [
      { name: "Charlize Theron" },
      { name: "Keanu Reeves" },
      { name: "Scarlett Johansson" },
      { name: "Tom Hardy" },
    ],
    trailerLink: "https://www.youtube.com/watch?v=Z6Wf5QwjyIA",
  },
];
const upcommingMovies = [
  {
    id: "up/1",
    srcImage: Aquaman,
    name: "Aquaman and the Lost Kingdom",
    ReleaseDate: "December 22, 2023",
    trailer: "https://www.youtube.com/watch?v=FV3bqvOHRQo",
  },
  {
    id: "up/2",
    srcImage: Napoleon,
    name: "Napoleon",
    ReleaseDate: "November 22, 2023",
    trailer: "https://www.youtube.com/watch?v=OAZWXUkrjPc",
  },
  {
    id: "up/3",
    srcImage: Deadpool,
    name: "Deadpool 3",
    ReleaseDate: "May 3, 2024",
    trailer: "https://www.youtube.com/watch?v=gfMRgap9jWk",
  },
  {
    id: "up/4",
    srcImage: Joker,
    name: "Joker: Folie à Deux",
    ReleaseDate: "October 4, 2024",
    trailer: "https://www.youtube.com/watch?v=FWNvrryaG9M",
  },
];
export { actionMovies, upcommingMovies };
