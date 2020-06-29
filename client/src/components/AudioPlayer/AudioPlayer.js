import React from 'react'

const AudioPlayer = (props) => {
    let src = props.source || "";
    return (
            <audio controls src={src} autoPlay></audio>
    )
}

export default AudioPlayer