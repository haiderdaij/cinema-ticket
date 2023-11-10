// Action
import Expend4bles from "../images/action/Expend4bles.jpeg";
import ShadowRecon from "../images/action/Shadow Recon.jpeg";
import CyberHeist from "../images/action/Cyber Heist .jpeg";

// Upcomming
import Aquaman from "../images/upcomming/aquaman.jpeg";
import Napoleon from "../images/upcomming/nap.jpeg";
import Deadpool from "../images/upcomming/dedpol.jpeg";
import Joker from "../images/upcomming/joker.jpeg";

const actionMovies = [
  {
    id: "a/1",
    name: "Expend4bles",
    srcImage: Expend4bles,
    time: "1h 43m",
    type: "Action adventure thriller",
    description:
      "Armed with every weapon they can get their hands on, the Expendables are the world's last line of defense and the team that gets called when all other options are off the table.",
    rate: 4.8,
    director: "Scott Waugh",
    writers: "Kurt Wimmer, Tad Daggerhart, Max Adams",
    cast: [
      { name: "Jason Stratham" },
      { name: "50 Cent" },
      { name: "Megan Fox" },
      { name: "Sylvester Stallone" },
    ],
    trailerLink: "https://www.youtube.com/watch?v=DhlaBO-SwVE",
  },
  {
    id: "a/2",
    name: "Shadow Recon",
    srcImage: ShadowRecon,
    time: "2h 10m",
    type: "Action adventure thriller",
    description:
      "An elite team of soldiers must navigate through dangerous terrain to stop a threat that could change the face of warfare forever.",
    rate: 4.5,
    director: "Jane Doe",
    writers: "John Smith, Alice Johnson",
    cast: [
      { name: "Chris Hemsworth" },
      { name: "Vanessa Kirby" },
      { name: "Idris Elba" },
      { name: "Michelle Rodriguez" },
    ],
    trailerLink: "https://www.fake-trailer-link.com/shadowrecon",
  },
  {
    id: "a/3",
    name: "Cyber Heist",
    srcImage: CyberHeist,
    time: "1h 55m",
    type: "Action adventure thriller",
    description:
      "A group of skilled hackers is recruited for a heist that involves breaking into a high-security virtual vault; what they didn't expect was to have to fight their way out.",
    rate: 4.7,
    director: "Michael Bay",
    writers: "Alex Kurtzman, Roberto Orci",
    cast: [
      { name: "Charlize Theron" },
      { name: "Keanu Reeves" },
      { name: "Scarlett Johansson" },
      { name: "Tom Hardy" },
    ],
    trailerLink: "https://www.fake-trailer-link.com/cyberheist",
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
    trailer: "https://www.youtube.com/watch?app=desktop&v=LIsfMO5Jd_w",
  },
  {
    id: "up/3",
    srcImage: Deadpool,
    name: "Deadpool 3",
    ReleaseDate: "May 3, 2024",
    trailer: "https://www.youtube.com/watch?v=gfMRgap9jWk",
  },
  {
    id: "up/3",
    srcImage: Joker,
    name: "Joker: Folie à Deux",
    ReleaseDate: "October 4, 2024",
    trailer: "https://www.youtube.com/watch?v=FWNvrryaG9M",
  },
];
export { actionMovies, upcommingMovies };
