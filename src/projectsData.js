import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import image6 from './img/image6.png';
import image7 from './img/image7.png';
import image8 from './img/image8.png';
import image9 from './img/image9.png';
import image10 from './img/image10.png';
import image11 from './img/image11.png';
import image12 from './img/image12.avif';
import image13 from './img/image13.avif';
import image14 from './img/image14.avif';
import image15 from './img/image15.avif';
import image16 from './img/image16.avif';

const projectsData = [
  {
    title: 'File and folder management system',
    description:
      'Create folders, add files, have your own file management online',
    stack: ['Angular', 'Express', 'Node', 'MongoDB'],
    code: 'https://github.com/GigiDev7/file-management-back',
    source: 'https://fs-front.netlify.app',
    image: image16,
  },
  {
    title: 'Online Realtime Poker Game',
    description:
      'Play poker 1vs1 with friend online realtime, register or login as a guest, create table,send id to friend and enjoy game(At first it may seem laggy because hosting server goes to sleep mode after 30min of innactivity)',
    stack: [
      'React',
      'Tailwind CSS',
      'Node',
      'Express',
      'Typescript',
      'MongoDB',
      'WebSockets',
      'SocketIO',
    ],
    code: 'https://github.com/GigiDev7/poker-back',
    source: 'https://react-wsop.netlify.app/',
    image: image15,
  },
  {
    title: 'Airbnb',
    description: 'Find a place to visit, book, rate, leave a review',
    stack: [
      'React',
      'Tailwind CSS',
      'Node',
      'Express',
      'Typescript',
      'MongoDB',
    ],
    code: 'https://github.com/GigiDev7/airbnb-frontend',
    source: 'https://airbnbg.netlify.app/',
    image: image14,
  },
  {
    title: 'Find Pet Sitters',
    description:
      'Register as a sitter or owner,find your pet sitter, rate, comment',
    stack: ['React', 'Redux', 'Tailwind CSS', 'Node', 'Express', 'MongoDB'],
    code: 'https://github.com/GigiDev7?tab=repositories',
    source: 'https://pet-sitter-pr.netlify.app/',
    image: image12,
  },
  {
    title: 'Airline Reservation',
    description: 'Find your airline tickets,filter,book',
    stack: [
      'Angular',
      'Tailwind CSS',
      'Angular Material',
      'Node',
      'Express',
      'MongoDB',
    ],
    code: 'https://github.com/GigiDev7?tab=repositories',
    source: 'https://airline-reservation-pr.netlify.app/',
    image: image13,
  },
  {
    title: 'Jobs-Gi',
    description: 'Search jobs,register and post your own jobs, update, delete',
    stack: [
      'React',
      'Redux',
      'Tailwind CSS',
      'Node',
      'Express',
      'MongoDB',
      'JWT',
    ],
    code: 'https://github.com/GigiDev7?tab=repositories',
    source: 'https://jobs-gi.netlify.app/',
    image: image11,
  },
  {
    title: 'React-Movies',
    description: 'Search for movies,movie review',
    stack: ['React', 'JavaScript', 'Styled Components', 'React-Router', 'API'],
    code: 'https://github.com/GigiDev7/rmdb-movies',
    source: 'https://rmdb-movies-ge.netlify.app/',
    image: image1,
  },
  {
    title: 'Google Clone',
    description: 'Search news,info,images like google',
    stack: ['React', 'React Context', 'React-router', 'Tailwind CSS', 'API'],
    code: 'https://github.com/GigiDev7/Google-Clone',
    source: 'https://googlee-clone.netlify.app/search',
    image: image10,
  },
  {
    title: 'MERN Project',
    description: 'Authorization,Authentication,CRUD,',
    stack: [
      'Node',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'React',
      'Redux',
      'MaterialUI',
    ],
    code: 'https://github.com/GigiDev7/mern-project-memories',
    source: 'https://mern-project-memory.netlify.app/',
    image: image9,
  },
  {
    title: 'Jobs-API',
    description: 'REST API, CRUD, Authentication,Authorization',
    stack: ['NodeJs', 'ExpressJs', 'MongoDB', 'Mongoose', 'JWT'],
    code: 'https://github.com/GigiDev7/Jobs-API',
    source: 'https://jobs-api-node-project.herokuapp.com/',
    image: image8,
  },
  {
    title: 'E-commerce',
    description: 'Phone E-commerce Web Site',
    stack: ['React', 'JavaScript', 'Styled Components', 'React-Router'],
    code: 'https://github.com/GigiDev7/phone-e-commerce-react',
    source: 'https://phone-e-commerce-react.netlify.app/',
    image: image2,
  },
  {
    title: 'Forkify',
    description: 'Web site for food searching,adding to cart',
    stack: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'API'],
    code: 'https://github.com/GigiDev7/Forkify',
    source: 'https://forkify-ge.netlify.app/',
    image: image3,
  },
  {
    title: 'Music Player',
    description: 'Simple music player app',
    stack: ['JavaScript', 'CSS', 'HTML'],
    code: 'https://github.com/GigiDev7/Music-Player-',
    source: 'https://musicplayer-app-gigi.netlify.app/',
    image: image4,
  },
  {
    title: 'Who wants to be a millionaire',
    description: 'Who wants to be a millionaire game show',
    stack: ['React', 'JavaScript', 'Styled Components', 'CSS'],
    code: 'https://github.com/GigiDev7/react-who-wants-to-be-a-millionaire',
    source: 'https://react-millionaire.netlify.app/',
    image: image5,
  },
  {
    title: 'Cocktails-DB',
    description: 'Cocktails search and review web site',
    stack: ['React', 'JavaScript', 'Styled Components', 'React-Router', 'API'],
    code: 'https://github.com/GigiDev7/react-cocktails-project',
    source: 'https://cocktails-project-dev.netlify.app/',
    image: image6,
  },
  {
    title: 'Quiz',
    description: 'Simple quiz game',
    stack: ['JavaScript', 'HTML', 'CSS'],
    code: 'https://github.com/GigiDev7/Question-Quiz',
    source: 'https://quiz-app-gigi.netlify.app/',
    image: image7,
  },
];

export default projectsData;
