import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from 'react-google-maps';
import Geocode from 'react-geocode';
import { GoogleMapsAPI } from './../client-config';
import { Card } from '@material-ui/core';
Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();

const  Map = (props)=>  {
    const AsyncMap = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          google={props.google}
          defaultZoom={props.zoom}
          defaultCenter={{
            lat: props.center.lat,
            lng: props.center.lng
          }}
        >
          <Marker
            google={props.google}
            name={'Dolores park'}
            draggable={true}
            position={{
                lat: props.center.lat,
                lng: props.center.lng
            }}
          />
          <Marker />
        </GoogleMap>
      ))
    );
    let map;
    if (props.center.lat !== undefined) {
      map = (
        <div>
          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
            loadingElement={<Card style={{ height: 300}} />}
            containerElement={<Card style={{ height: props.height}} />}
            mapElement={<Card style={{ height: props.height}} />}
          />
        </div>
      );
    } else {
      map = <div style={{ height: props.height }} />;
    }
    return map;
  }
export default Map;
