import React, {useState, useEffect} from 'react';

import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';

import Fullscreen from "./Fullscreen";

import Pin from "./Icon";

import './map.scss';

import Countries from './countries.json';

import Spinner from "../Spinner/Spinner";


const MapComponent = (props) => {
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [mapLoad, setMapLoad] = useState(true);
    const [capital, setCapital] = useState('');
    const [isFullScreen, setFullScreen] = useState(false);
    const [borderLine, setBorderLine] = useState(null);

    const getLatLon = () => {
        setTimeout(() => {
            if (props.value.lat && props.value.lon) {
                setLat(props.value.lat);
                setLon(props.value.lon);
                setCapital(props.value.capital);
                setCountry(props.value.country_en);
                setMapLoad(false);
            } else {
                setMapLoad(true);
            }
        }, 200)
    }


    const fullScreenHandler = () => {
        setFullScreen(!isFullScreen);
    }

    const countryStyle = {
        fillColor: "red",
        fillOpacity: 0.2,
        color: '#1a1a1a'
    }

    const getBorder = () => {
        setBorderLine(Countries.features.filter(it => it.properties.ADMIN === country));
    }

    useEffect(() => {
        getLatLon();
    })
    useEffect(() => {
        getBorder()
    }, [mapLoad])

    if (mapLoad) {
        return (
            <div className='map-wrapper'>
            <Spinner />
            </div>
        )
    } else {
        return (
            <div className={isFullScreen ? 'map-wrapper to-full-screen' : 'map-wrapper'}>
                <MapContainer className={isFullScreen ? 'to-full-screen' : ''} center={[lat, lon]} zoom={5} scrollWheelZoom={false}>
                    <button className="leaflet-container__screen-btn"
                            onClick={fullScreenHandler}
                            title="Full screen On/Off">To Full Screen
                    </button>
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=6da2f080-0b88-4c56-be28-3de3b9c9e2b5">
                    </TileLayer>
                    <GeoJSON style={countryStyle} data={borderLine} />
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
