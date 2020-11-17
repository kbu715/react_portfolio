import movie from '../projects_images/movieMain.png';
import kanbanboard from '../projects_images/KanbanBoard.png';
import mapProject from '../projects_images/mapProject.png';
import movie_search from '../projects_images/movie_search.png';

let projects_store = [
  {
    name: 'Movie Reservation App',
    image: movie,
    url: 'https://github.com/jinwoo6531/nomfilx',
    catagory: ['react.js'],
  },
  {
    name: 'KanbanBoard',
    image: kanbanboard,
    url: 'https://jinwoo6531.github.io/KanbanBoard/',
    catagory: ['react.js'],
  },
  {
    name: 'NaverMap App',
    image: mapProject,
    url: 'https://jinwoo6531.github.io/mapTest/',
    catagory: ['node.js', 'vanila'],
  },
  {
    name: 'Movie_search(Typescript version)',
    image: movie_search,
    url: 'https://jinwoo6531.github.io/typescript_movie_search/',
    catagory: ['react.js', 'typescript'],
  },
];
export default projects_store;
