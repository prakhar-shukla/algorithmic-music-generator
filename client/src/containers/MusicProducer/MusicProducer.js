import React from 'react';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import { connect } from 'react-redux';
import { generateMusic } from '../../actions';
import Button from '../../components/UI/Button/Button'

class MusicProducer extends React.Component {

    generateNewMusic = () => {
        this.props.generateMusic();
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.generateNewMusic}>Generate New Music</Button>
                <AudioPlayer source={this.props.music.objectUrl}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        music : state.music
    }
}

export default connect(mapStateToProps, {
    generateMusic: generateMusic
})(MusicProducer)