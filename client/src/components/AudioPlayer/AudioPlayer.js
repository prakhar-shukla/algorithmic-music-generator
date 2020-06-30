import React from 'react'
import classes from './AudioPlayer.module.css'

const AudioPlayer = (props) => {
    let src = props.source || "";
    return (
            <audio className={classes.AudioPlayer} controls src={src} autoPlay></audio>
    )
}

export default AudioPlayer