/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux'
import s from './Paragraph.css';
import Paragraph from './Paragraph';
import s from './Section.css';

class Section extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        odd: PropTypes.bool.isRequired,
        order: PropTypes.number.isRequired
    }

    render() {
        const {data, odd, order} = this.props
        const {p, visualization} = data
        const paragraphs = p.map((p, i) => <Paragraph key={i} {...p} />)
        const copy = (
            <div className="flex copy">
                <h2 className="heading">{data.heading}</h2>
                <h3 className-="subheading">{data.subheading}</h3>
                {paragraphs}
            </div>
        )
        let contents = copy

        if(typeof visualization !== 'undefined'){
            let containerClass = 'split-pane'
            if (visualization.position === 'left') {
                containerClass += 'reverse'
            }

            let visualizationContent
            switch (visulaization.type) {
                case 'image':
                    visualizationContent = <img src={visualization.imageUrl} role="presentation"/>
                    break;
                case 'map':
                    const {markers, zoom, center, styles} = visulization.map
                    visualizationContent = (
                        <GoogleMapLoader
                            containerElement={
                                <div style={{
                                    height: "100%",
                                    width: "100%"
                                }} />
                            }
                            googleMapElement={
                                <GoogleMap defaultZoom={zoom} defaultCenter={center} defaultOptions={{styles}}>
                                    {markers.map((marker, index) => <Marker {...marker} key={index} />)}
                                </GoogleMap>
                            }
                        />
                    )
                    break;
                default:
                    break;
            }

            contents = (
                <div className={s.containerClass}>
                    {copy}
                    <div className="flex visulization">
                        {visulaization}
                    </div>
                </div>
            )
        }

        return (
            <section ref={e => { this.holder = e }} className={odd ? 'odd' : 'even'} style={{ order: order }}>
                <div className="section-container">
                    {contents}
                </div>
            </section>
        )
    }
}

export default connect(state => ({ scrollState: state.scrollState }))(Section)