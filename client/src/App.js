import React from 'react'
import Layout from './containers/Layout/Layout'
import MusicProducer from './containers/MusicProducer/MusicProducer.js'

export default class App extends React.Component {
    //

    render() {

        return (
            <Layout>
                <MusicProducer />
            </Layout>

        )
    }
}