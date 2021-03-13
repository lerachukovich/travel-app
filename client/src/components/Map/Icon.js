import L from 'leaflet';
import icon from '../../assets/images/pin.svg';
import iconShadow from '../../assets/images/marker-shadow.png'

const Pin = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize:     [40, 130], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [17, 72],  // the same for the shadow
    popupAnchor:  [0, -70]// point from which the popup should open relative to the iconAnchor
});

export default Pin;
