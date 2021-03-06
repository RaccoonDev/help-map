import BingMapsReact from "bingmaps-react"
import settings from "../../settings"

export interface ViewOption {
    center: {
        latitude: Number,
        longitude: Number
    }
    zoom: Number
}

export interface MyReactAppProps {
    pushPins: Microsoft.Maps.Pushpin | Microsoft.Maps.Pushpin[]
    viewOptions: ViewOption
}

const apiKey = settings.bing.map.key

const mapReady = m => {
    Microsoft.Maps.Events.addHandler(
        m.map.current,
        'viewchange', 
        e => { 
            // This is a good place to query for more data on scroll.
            // just make sure that it is done efficiently: with a short delay
            // after scrolling is done
            console.log('view changed', e, m.map.current.getBounds()) 
        }
    );
};

export default function MyReactApp({pushPins, viewOptions}: MyReactAppProps) {
    return <BingMapsReact 
        bingMapsKey={apiKey} 
        pushPins={pushPins}
        viewOptions={viewOptions}
        onMapReady={mapReady}
    ></BingMapsReact>
}