import React, { useState } from "react";
import "./Music.css";
import { LinearProgress, Box, Button, Stack } from "@mui/material";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";

export const MusicPlayer = () => {
  const length = 6;
  const [current, setCurrent] = useState(0);
  console.log(current);

  const HandlePrevious = () => {
    setCurrent(current == 0 ? length : current - 1);
  };
  const HandleNext = () => {
    setCurrent(current == length ? 0 : current + 1);
  };
  return (
    <div className="container">
      <p>Music Player</p>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP._Jpj6VFopIqJHBX6r8eu_gHaE7&pid=Api&P=0&w=272&h=181"
        alt=""
      />
      <Box sx={{ width: "250px", marginLeft: "45px" }}>
        <LinearProgress variant="determinate" className="Progress" value="50" />
      </Box>
      <Stack
        spacing={3}
        direction="row"
        sx={{ marginLeft: "50px", marginTop: "30px" }}
      >
        <Button variant="outlined" onClick={HandlePrevious}>
          <SkipPreviousRoundedIcon />
        </Button>
        <Button variant="outlined">
          <PlayArrowRoundedIcon />
        </Button>
        <Button variant="outlined" onClick={HandleNext}>
          <SkipNextRoundedIcon />
        </Button>
      </Stack>
      <p>Title</p>
      <p>Next up:Emotion</p>
    </div>
  );
};
