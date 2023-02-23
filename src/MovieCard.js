import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <Box display="flex" p={2} justifyContent="center">
      <Card>
        <Typography>{movie.Year}</Typography>

        <CardMedia
          component="img"
          height="600"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
        <CardContent>
          <Typography>{movie.Type}</Typography>
          <Typography>{movie.Title}</Typography>
        </CardContent>
      </Card>
    </Box>

    // <>
    // <div className='movie'>
    //     <p>{movie.Year}</p>
    // </div>

    // <div>
    //     <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
    // </div>

    // <div>
    //     <span>{movie.Type}</span>
    //     <h3>{movie.Title}</h3>
    // </div>
    // </>
  );
};

export default MovieCard;
