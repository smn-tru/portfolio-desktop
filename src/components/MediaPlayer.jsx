import React, { useEffect, useState, useRef  } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { FaPlay, FaPause, FaBackward, FaForward  } from "react-icons/fa6";
import { IconContext } from "react-icons"; // for customazing the icons

import BTS_SpringDay from '../resources/assets/BTS_SpringDay.mp3';
import SpiritedAway_TheNameOfLife from '../resources/assets/SpiritedAway_TheNameOfLife.mp3';
import Blackpink_Stay from '../resources/assets/Blackpink_Stay.mp3';

function MediaPlayer(){
    const playlist = [
        {
            Artist: "BTS",
            Title: "Spring Day",
            Path: BTS_SpringDay
        },
        {
            Artist: "Ayaka Hirahara",
            Title: "The Name of Life",
            Path: SpiritedAway_TheNameOfLife
        },
        {
            Artist: "Blackpink",
            Title: "Stay",
            Path: Blackpink_Stay
        }
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(playlist[0]);
    const [seconds, setSeconds] = useState(); // current position of the audio in seconds
    const [time, setTime] = useState({
        min: "",
        sec: ""
    });
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
    }); // current position of the audio in minutes and seconds

    const audioRef = useRef(null);
    const [play, { pause, duration, sound }] = useSound(currentSong.Path);

    useEffect(() => {
        if (duration) {
          const sec = duration / 1000;
          const min = Math.floor(sec / 60);
          const secRemain = Math.floor(sec % 60);
          setTime({
            min: min,
            sec: secRemain
          });
        }
    }, [isPlaying]);

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

    const onPlayPauseClick = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.onended = () => setIsPlaying(false); 
        }
      }, [audioRef.current]);

    const onPreviousClick = async () => {
        stop(); 
        sound.unload();
        setIsPlaying(false);

        await resetTime();

        let currentSongIdx = playlist.findIndex(song => song.Path == currentSong.Path);
        let newSong = {};

        if(currentSongIdx == 0){
            //console.log(playlist[playlist.length -1])
            newSong = playlist[playlist.length -1];
        }
        else{
            //console.log(playlist[currentSongIdx -1])
            newSong = playlist[currentSongIdx -1];
        }
        setCurrentSong(newSong);

        const mpEl = document.getElementById("album-cover").innerHTML;
        document.getElementById("album-cover").innerHTML = mpEl;
        
        setTimeout(async() => {
            await onSongChange(newSong);
        }, 5000);
    };

    const resetTime = async () => {
        setTime({
            min: "",
            sec: ""
        });
        setCurrTime({
            min: "",
            sec: "",
        });
    }

    const onSongChange = async (newSong) => {
        const playBtn = document.getElementById("btnPlay");
        playBtn.click();
    };

    const onNextClick = async () => {
        stop(); 
        sound.unload();
        setIsPlaying(false);

        await resetTime();

        let currentSongIdx = playlist.findIndex(song => song.Path == currentSong.Path);
        let newSong = {};

        if(currentSongIdx == playlist.length -1)
            newSong = playlist[0];
        else
            newSong = playlist[currentSongIdx +1];

        setCurrentSong(newSong);
        
        const mpEl = document.getElementById("album-cover").innerHTML;
        document.getElementById("album-cover").innerHTML = mpEl;

        setTimeout(async() => {
            await onSongChange(newSong);
        }, 5000);
    };

    return(
        <div id="musicPlayer" className='card-element grid grid-cols-3 gap-0 d-flex flex-column'>
            <div id="album-cover" className="album-cover align-self-center justify-self-center">
                <img
                    className="musicCover p-2 ms-1"
                    src="https://picsum.photos/150/150"
                />
            </div>
            <div className="music-player-component col-span-2">
                <div>
                    <h2 className="title mb-4">{currentSong.Title} - {currentSong.Artist}</h2>
                </div>
                <div>
                    <button className="playButton" onClick={onPreviousClick}>
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaBackward />
                        </IconContext.Provider>
                    </button>
                    {!isPlaying ? (
                    <button id="btnPlay" className="playButton" onClick={onPlayPauseClick}>
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaPlay />
                        </IconContext.Provider>
                    </button>
                    ) : (
                    <button id="btnPause" className="playButton" onClick={onPlayPauseClick}>
                        <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                            <FaPause />
                        </IconContext.Provider>
                    </button>
                    )}
                    <button className="playButton" onClick={onNextClick}>
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
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MediaPlayer;