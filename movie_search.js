import axios from "axios";
const name = process.argv[2];

async function getData(link) {
  const response = await axios.get(link);
  return response.data;
}

async function movieSearch(movieName) {
  const OMDB_API = `http://www.omdbapi.com/?s=${movieName}%20man&apikey=f0eb5ec0`;

  try {
    let data = await getData(OMDB_API);

    const movies = data.Search;
    movies.forEach((movie) => console.log(movie.Poster));
  } catch (error) {
    console.log(error);
  }
}
// let inputEl = document.querySelectorAll("input");
//     inputEl.forEach((node) => (node.onchange = movieSearch));

//     async function movieSearch(event) {
//       const OMDB_API = `http://www.omdbapi.com/?s=${event.srcElement.value}&apikey=8bf835a0`;

//       await fetch(OMDB_API)
//         .then((response) => response.json())
//         .then((data) => {
//           const movies = data.Search;
//           movies.forEach(
//             (movie) =>
//               (document.getElementById("movie_grid").innerHTML =
//                 movies[0].Poster)
//           );
//         });
//     }

movieSearch(name);
