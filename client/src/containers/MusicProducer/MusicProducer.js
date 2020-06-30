import React from 'react';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import { connect } from 'react-redux';
import { generateMusic } from '../../actions';
import Button from '../../components/UI/Button/Button';
import classes from './MusicProducer.module.css'

class MusicProducer extends React.Component {

    generateNewMusic = () => {
        this.props.generateMusic();
    }

    render() {
        let generateButton = <Button onClick={this.generateNewMusic} disabled={this.props.music.generating || this.props.music.loading} >
            {this.props.music.generating ? "Generating" : (this.props.music.loading ? "Loading" : "Generate New Music")}
        </Button>

        return (
            <React.Fragment>
                {generateButton}
                <div className={classes.AudioContainer}>
                    <AudioPlayer source={this.props.music.objectUrl} />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        music: state.music
    }
}

export default connect(mapStateToProps, {
    generateMusic: generateMusic
})(MusicProducer)