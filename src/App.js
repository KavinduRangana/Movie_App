import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  InputBase,
  Stack,
  styled,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import MovieCard from "./MovieCard";
//import './App.css';
//import SearchIcon from "./search.svg";
// 1e126066

const API_URL = "http://www.omdbapi.com?apikey=1e126066";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  //   useEffect(() => {
  //     searchMovies("batman");
  //   }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Container maxWidth="lg">
            <Stack>
              <Box
                display="flex"
                flexDirection="column"
                //justifyItems="center"
                alignItems="center"
              >
                <Typography
                  variant="h3"
                  color="secondary"
                  marginTop={5}
                  marginBottom={3}
                >
                  Movie World
                </Typography>
                <Toolbar>
                  <TextField
                    id="outlined-search"
                    lable="Search Field"
                    type="search"
                    name="searchKey"
                    placeholder="Type Here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    // sx={{ color: "red" }}
                  ></TextField>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ height: 56 }}
                    onClick={() => searchMovies(searchTerm)}
                  >
                    <SearchIcon />
                  </Button>
                </Toolbar>
                <Divider />
              </Box>

              <Grid
                Container
                columns={2}
                direction="column"
                display="flex"
                // justifyContent="center"
              >
                {movies?.length > 0 ? (
                  <div className="container">
                    {movies.map((movie) => (
                      <MovieCard movie={movie} />
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    <h2>No movies found</h2>
                  </div>
                )}
              </Grid>
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
    </>
    // <div className="app">
    //   <h1>MovieWorld</h1>

    //   <div className="search">
    //     <input
    //       placeholder="Search for movies"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <img
    //       src={SearchIcon}
    //       alt="search"
    //       onClick={() => searchMovies(searchTerm)}
    //     />
    //   </div>

    //   {movies?.length > 0 ? (
    //     <div className="container">
    //       {movies.map((movie) => (
    //         <MovieCard movie={movie} />
    //       ))}
    //     </div>
    //   ) : (
    //     <div className="empty">
    //       <h2>No movies found</h2>
    //     </div>
    //   )}
    // </div>
  );
};

export default App;
