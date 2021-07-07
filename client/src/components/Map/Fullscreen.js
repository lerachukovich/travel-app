import {useMap} from 'react-leaflet';

const Fullscreen = (props) => {
    const map = useMap();
    const html = document.querySelector('html');
    setTimeout(() => {
        map.invalidateSize();
        map.flyTo([props.value[0], props.value[1]]);
    }, 400);
    return null
}

export default Fullscreen;
