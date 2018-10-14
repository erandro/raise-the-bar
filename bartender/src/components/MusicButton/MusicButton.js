import React from "react";
import "./MusicButton.css";
import Music from "./All_I_Need_Is_Money.mp3";
import Sound from 'react-sound';

const MusicButton = (props) => {
    return (
        <div className="music-box" onClick={props.changMusicState}>
            <Sound
                url={Music}
                playStatus={Sound.status[props.playmusic]}
                loop={true}
            />
        </div>
    )
}






export default MusicButton;