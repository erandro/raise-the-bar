import React from "react";
import "./MusicButton.css";
import Music from "./All_I_Need_Is_Money.mp3";
import soundOn from "./soundOn.png";
import soundOff from "./soundOff.png";
import Sound from 'react-sound';

const MusicButton = (props) => {
    return (
        <div onClick={props.changMusicState}>
            <img className="music-box" src={props.playmusic === "STOPPED" ? soundOff : soundOn} alt="music button" />
            <Sound
                url={Music}
                playStatus={Sound.status[props.playmusic]}
                loop={true}
            />
        </div>
    )
}

export default MusicButton;