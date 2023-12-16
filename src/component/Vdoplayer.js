import React, { useState, useEffect } from 'react';
import axios from 'axios';
require("dotenv").config();


const Vdoplayer = () => {
  const [videoId, setVideoId] = useState('');
  const [videoTitle, setVideoTitle] = useState('');

  useEffect(() => {
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const videoUrl = 'https://www.googleapis.com/youtube/v3/videos';

   
    const unlistedVideoId = 'khKoJUpcXUE&list=PLG9aCp4uE-s0bu-I8fgDXXhVLO4qVROGy';


    axios
      .get(videoUrl, {
        params: {
          part: 'snippet',
          id: unlistedVideoId,
          key: apiKey,
        },
      })
      .then((response) => {
        const videoDetails = response.data.items[0].snippet;
        setVideoTitle(videoDetails.title);
        setVideoId(unlistedVideoId);
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
      });
  }, []);

  return (
    <div>
      <h1>{videoTitle}</h1>
      <div>
        {videoId && (
          <iframe
            title={videoTitle}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default Vdoplayer;
