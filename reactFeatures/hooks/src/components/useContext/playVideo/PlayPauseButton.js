import React, {useContext} from "react";
import {VideoContext} from "./VideoMainPage";

export default function PlayPauseButton() {
    const {status, togglePlayPause} = useContext(VideoContext);

    const styles = {
        width: '100px',
        height: '5vh',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        marginTop: '20px',
    };

    return (
        <button style={styles} onClick={togglePlayPause}>
            {status === 'playing' ? 'PAUSE' : 'PLAY'}</button>
    );

}
