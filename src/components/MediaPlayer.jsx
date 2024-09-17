import React, { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
//import qala from "../assets/qala.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { FaPlay, FaPause, FaBackward, FaForward  } from "react-icons/fa6";
import { IconContext } from "react-icons"; // for customazing the icons

function MediaPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound();
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
      }); // current position of the audio in minutes and seconds
    
    const [seconds, setSeconds] = useState(); // current position of the audio in seconds

    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
            min: min,
            sec: secRemain
        };
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([])); // setting the seconds state with the current state
            const min = Math.floor(sound.seek([]) / 60);
            const sec = Math.floor(sound.seek([]) % 60);
            setCurrTime({
              min,
              sec,
            });
          }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
    };

    return(
        <div className='card-element grid grid-cols-3 gap-0 d-flex flex-column'>
            <div className="album-cover align-self-center justify-self-center">
                <img
                    className="musicCover p-2 ms-1"
                    src="https://picsum.photos/150/150"
                />
            </div>
            <div className="music-player-component col-span-2">
                <div>
                    <h2 className="title mb-4">Rubaiyyan - Qala</h2>
                </div>
                <div>
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaBackward />
                        </IconContext.Provider>
                    </button>
                    {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaPlay />
                        </IconContext.Provider>
                    </button>
                    ) : (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaPause />
                        </IconContext.Provider>
                    </button>
                    )}
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaForward />
                        </IconContext.Provider>
                    </button>
                </div>
                <input
                    type="range"
                    min="0"
                    max={duration / 1000}
                    default="0"
                    value={seconds}
                    className="timeline"
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                />
                <div className="time">
                    <p>{currTime.min}:{currTime.sec}</p>
                    <p>
                        {3}:{10}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MediaPlayer;