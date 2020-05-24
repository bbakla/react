import React, {createContext, useState} from "react";
import VideoClip from "./videoClip";
import Controls from "./ControlsComponent";

/*
1- Create Context
2- Declare the values within the Context by defining a Provider
3- When you want to use a variable in the context, call that variable by calling the hook useContext
 */
export   const VideoContext = createContext({});

export default function VideoMainPage() {

    const [status, setStatus] = useState('paused');
    const togglePlayPause = () => setStatus(status === 'playing' ? 'paused' : 'playing');

    return (
        <div>
            <VideoContext.Provider value={{status, togglePlayPause}}>
                <VideoClip/>
                <Controls/>
            </VideoContext.Provider>
        </div>

    );
}
