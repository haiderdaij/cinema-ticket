// Action
import Expend4bles from "../images/action/Expend4bles.jpg";
import Extraction2 from "../images/action/Extraction2.jpg";
import CyberHeist from "../images/action/Cyber_heist.jpg";

// Horro
import FiveNights from "../images/horror/five_nights.jpg";
import EvilDeadRise from "../images/horror/Evil_Dead_Rise.jpg";

// Comedy
import AntMan from "../images/comedy/antMan.jpg";
import Vacation from "../images/comedy/Vacation.jpeg";
import Chicken from "../images/comedy/Chicken_Run.jpg";

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
const horrorMovies = [
  {
    id: "h-1",
    name: "five nights at freddy's",
    srcImage: FiveNights,
    time: "1h 49m",
    type: "Horror",
    description:
      "troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through.",
    rate: 5.6,
    director: "Emma Tammi",
    writers: [
      { name: "Scott Cawthon" },
      { name: "Seth Cuddeback" },
      { name: "Emma Tammi" },
    ],
    cast: [
      { name: "Josh Hutcherson" },
      { name: "Piper Rubio" },
      { name: "Elizabeth Lail" },
      { name: "Matthew Lillard" },
    ],
    trailerLink: "https://www.youtube.com/watch?v=0VH9WCFV6XQ",
  },
  {
    id: "h-2",
    name: "Evil Dead Rise",
    srcImage: EvilDeadRise,
    time: "1h 36m",
    type: "Horror",
    description:
      "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    rate: 5.6,
    director: "Lee Cronin",
    writers: [{ name: "Lee Cronin" }],
    cast: [
      { name: "Mirabai Pease" },
      { name: "Richard Crouchley" },
      { name: "Anna-Maree Thomas" },
      { name: "Lily Sullivan" },
    ],
    trailerLink: "https://youtu.be/smTK_AeAPHs?si=d1SUrIdb9DR0pXJo",
  },
];
const comedyMovies = [
  {
    id: "c-1",
    name: "Ant-Man and the Wasp",
    srcImage: AntMan,
    time: "2h 4m",
    type: "Comedy",
    description:
      "Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mother hiding? And who is the mysterious Kang?",
    rate: 6.1,
    director: "Peyton Reed",
    writers: [
      { name: "Jeff Loveness" },
      { name: "Stan Lee" },
      { name: "Larry Lieber" },
    ],
    cast: [
      { name: "Paul Rudd" },
      { name: "Evangeline Lilly" },
      { name: "Michael Douglas" },
      { name: "Michelle Pfeiffer" },
    ],
    trailerLink: "https://youtu.be/ZlNFpri-Y40?si=l5IAQ6C_5U04lIyX",
  },
  {
    id: "c-2",
    name: "Vacation Friends 2",
    srcImage: Vacation,
    time: "1h 46m",
    type: "Comedy",
    description:
      "A couple who meets up with another couple while on vacation in Mexico sees their friendship take an awkward turn when they get back home.",
    rate: 5.3,
    director: "Clay Tarver",
    writers: [{ name: "Clay Tarver" }, { name: "Tom Mullen" }],
    cast: [
      { name: "Lil Rel Howery" },
      { name: "Yvonne Orji" },
      { name: "John Cena" },
      { name: "Meredith Hagner" },
    ],
    trailerLink: "https://youtu.be/lMUu-ag9ofk?si=GO5MRjQcnj0FOExu",
  },
  {
    id: "c-3",
    name: "Chicken Run",
    srcImage: Chicken,
    time: "1h 46m",
    type: "Comedy",
    description:
      "Having pulled off an escape from Tweedy's farm, Ginger has found a peaceful island sanctuary for the whole flock. But back on the mainland the whole of chicken-kind faces a new threat, and Ginger and her team decide to break in.",
    rate: 6.4,
    director: "Sam Fell",
    writers: [
      { name: "Karey Kirkpatrick" },
      { name: "John O'Farrell" },
      { name: "Rachel Tunnard" },
    ],
    cast: [
      { name: "Thandiwe Newton" },
      { name: "Zachary Levi" },
      { name: "Bella Ramsey" },
      { name: "Imelda Staunton" },
    ],
    trailerLink: "https://youtu.be/_-Kz67kea8Q?si=FLKLrFTsIlBmPPnz",
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
    trailer: "https://www.youtube.com/watch?v=JNYIM0wl3wA",
  },
];

const combinedMovies = [...actionMovies, ...horrorMovies, ...comedyMovies];

export {
  actionMovies,
  horrorMovies,
  comedyMovies,
  combinedMovies,
  upcommingMovies,
};
