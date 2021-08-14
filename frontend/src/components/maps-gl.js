import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Room from '@material-ui/icons/Room';

const mapboxgl = require('mapbox-gl');
mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js', null, true);




const Map = (props) => {

    useEffect(() => {
        return () => {
            mapboxgl.clearStorage();
        }
    }, [])


    const [viewport, setViewport] = useState({
        height: 300,
        width: 840,
        latitude: props.lat,
        longitude: props.lng,
        zoom: 14
    });

    return (
        <div style={{ height: "100%", width: "800px" }}>

            <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1Ijoid2FsZWRkIiwiYSI6ImNrcDE2N3l5MzB3azUyd21yYWJ6cmprODEifQ.Y9q08TELlzNWxl6V4kh5MA"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/waledd/ckp1dyuin236917n0qx6geons"
                onDblClick={props.onDblClick}
            >
                <Marker latitude={props.lat} longitude={props.lng} offsetLeft={-20} offsetTop={-50}>
                    <div>
                        <Room style={{ fontSize: 50 }} />
                    </div>
                </Marker>
            </ReactMapGL>
        </div >


    );
}
export default Map