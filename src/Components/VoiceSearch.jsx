import {
  ClearAllOutlined,
  ClearOutlined,
  PauseCircleFilledOutlined,
  PlayCircleFilledOutlined,
  Search,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceSearch = () => {
  const [start, setStart] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("results?search_query=" + transcript);
    window.location.reload();
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleStart = () => {
    SpeechRecognition.startListening();
    setStart(!start);
  };
  const handleStop = () => {
    SpeechRecognition.stopListening();
    setStart(!start);
  };

  const [speaking, setSpeaking] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  console.log(transcript);

  return (
    <div className="items-center">
      <p>Microphone: {listening ? "on" : "off"}</p>
      <br />
      {!start && (
        <div className="rounded-full my-2 items-center self-center text-center origin-center justify-center min-h-10">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnU0YTd3a2FuYWNkZ3R5a2dxcmF1YmU0NXB5MnJ3NW1nOXYwcHIzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o1YuwnczQIcc3ZGlbq/giphy.gif"
            alt="audio"
            className="w-36 "
          />
        </div>
      )}

      {start ? (
        <Button onClick={handleStart} color="success" variant="outlined">
          <PlayCircleFilledOutlined /> Start
        </Button>
      ) : (
        <Button onClick={handleStop} color="error" variant="outlined">
          <PauseCircleFilledOutlined /> Stop
        </Button>
      )}
      <Button
        onClick={resetTranscript}
        sx={{ marginLeft: "5px" }}
        color="warning"
        variant="outlined"
      >
        <ClearOutlined /> Reset
      </Button>
      <div>
        <p className="text-wrap ">
          {transcript.length > 0 && "Search for " + '"'} {transcript}
          {transcript.length > 0 && '"'}
        </p>
      </div>
      <br />

      <Button
        variant="contained"
        disabled={transcript.length == 0}
        onClick={handleNavigate}
        sx={{ marginLeft: "25%" }}
      >
        <Search></Search> Search
      </Button>
    </div>
  );
};
export default VoiceSearch;
