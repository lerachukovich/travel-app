import React, {useState, useEffect} from 'react';

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import Fullscreen from "./Fullscreen";

import Pin from "./Icon";

import './map.scss';
import Spinner from "../Spinner/Spinner";


const MapComponent = (props) => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [mapLoad, setMapLoad] = useState(true);
    const [capital, setCapital] = useState('');
    const [isFullScreen, setFullScreen] = useState(false);

    const getLatLon = () => {
        setTimeout(() => {
            if (props.value.lat && props.value.lon) {
                setLat(props.value.lat);
                setLon(props.value.lon);
                setCapital(props.value.capital);
                setMapLoad(false);
            } else {
                setMapLoad(true);
            }
        }, 200)
    }


    const fullScreenHandler = () => {
        setFullScreen(!isFullScreen);
    }

    useEffect(() => {
        getLatLon();
    })

    if (mapLoad) {
        return (
            <div className='map-wrapper'>
            <Spinner />
            </div>
        )
    } else {
        return (
            <div className={isFullScreen ? 'map-wrapper to-full-screen' : 'map-wrapper'}>
                <MapContainer className={isFullScreen ? 'to-full-screen' : ''} center={[lat, lon]} zoom={6} scrollWheelZoom={false}>
                    <button className="leaflet-container__screen-btn"
                            onClick={fullScreenHandler}
                            title="Full screen On/Off">To Full Screen
                    </button>
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=6da2f080-0b88-4c56-be28-3de3b9c9e2b5">
                    </TileLayer>
                    <Marker position={[lat, lon]}
                            icon={Pin}>
                        <Popup>
                            {capital}
                        </Popup>
                    </Marker>
                    <Fullscreen value={[lat, lon]} />
                </MapContainer>
            </div>
        )
    }
}

export default MapComponent;
