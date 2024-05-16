import React, { Component } from 'react';
import styles from '../styles/app.module.scss';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import MarkerOrange from './markerOrange';

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <a className={styles.anchor} id='map' />
        <div style={{ height: '75vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDsXO57NZVMNtNJMNWVOGmwW9y0M-GMK7c'
            }}
            defaultCenter={{
              // Center map on the Puget Sound
              lat: 47.608013,
              lng: -122.335167
            }}
            defaultZoom={9}
          >
            {/* Owen Beach */}
            <Marker
              lat={47.313377}
              lng={-122.528737}
              location='Owen Beach'
              map_link='https://www.google.com/maps/place/Owen+Beach/@47.3133567,-122.529672,18z/data=!3m1!4b1!4m5!3m4!1s0x5490530cf2532fff:0xdf518fbdeabf51dc!8m2!3d47.3133552!4d-122.5287473'
            />
            {/* Alki Point */}
            <Marker
              lat={47.576269}
              lng={-122.420607}
              location='Alki Point'
              map_link='https://www.google.com/maps/place/Alki+Point+Lighthouse/@47.5768976,-122.4171908,14z/data=!4m13!1m7!3m6!1s0x54904089f02ed333:0x9aed4b8c925151c0!2sAlki,+Seattle,+WA+98116!3b1!8m2!3d47.5754629!4d-122.4106578!3m4!1s0x5490409a91d15747:0xbc1d4abecf0530e2!8m2!3d47.5762663!4d-122.4206052'
            />
            {/* Browns Point Lighthouse Park */}
            <Marker
              lat={47.305676}
              lng={-122.443631}
              location='Browns Point Lighthouse Park'
              map_link='https://www.google.com/maps/place/Browns+Point+Lighthouse+Park/@47.3056642,-122.4458238,17z/data=!3m1!4b1!4m5!3m4!1s0x5490541b32b54d35:0x9efd45835ade6ae2!8m2!3d47.3056642!4d-122.4436351'
            />
            {/* Edmonds Marina Beach Park */}
            <Marker
              lat={47.805091}
              lng={-122.393978}
              location='Edmonds Marina Beach Park'
              map_link='https://www.google.com/maps/place/Marina+Beach+Park/@47.8050934,-122.396171,17z/data=!3m1!4b1!4m5!3m4!1s0x54901a572b704fd7:0x7415a90b2ef9f768!8m2!3d47.8050898!4d-122.393977'
            />
            {/* Discovery Park */}
            <Marker
              lat={47.657295}
              lng={-122.405539}
              location='Discovery Park'
              map_link='https://www.google.com/maps/place/Discovery+Park/@47.6573056,-122.40769,17z/data=!3m1!4b1!4m5!3m4!1s0x549015f0e18e409f:0x519842caa4fa6320!8m2!3d47.657302!4d-122.405496'
            />
            {/* Three Tree Point */}
            <Marker
              lat={47.450402}
              lng={-122.382352}
              location='Three Tree Point'
              map_link='https://www.google.com/maps/place/Three+Tree+Point/@47.4503902,-122.3911242,15z/data=!3m1!4b1!4m5!3m4!1s0x549044e3d8a40e0f:0xad1eea0bcfc86b4!8m2!3d47.4503766!4d-122.382348'
            />
            {/* Fay Bainbridge Park */}
            <Marker
              lat={47.703198}
              lng={-122.508646}
              location='Fay Bainbridge Park'
              map_link='https://www.google.com/maps/place/Fay+Bainbridge+Park/@47.7031996,-122.510839,17z/data=!3m1!4b1!4m5!3m4!1s0x54903d6e4f4a84d1:0xa0bf5bf4fd748349!8m2!3d47.703196!4d-122.508645'
            />
            {/* Fort Flagler Historical State Park */}
            <Marker
              lat={48.094929}
              lng={-122.703359}
              location='Fort Flagler Historical State Park'
              map_link='https://www.google.com/maps/place/Fort+Flagler+Historical+State+Park/@48.0949254,-122.7054353,17z/data=!3m1!4b1!4m5!3m4!1s0x548fee38dda50bfd:0xd8170c5473eea13e!8m2!3d48.0949218!4d-122.7032413'
            />
            {/* Westside Preserve */}
            <MarkerOrange
              lat={48.506372}
              lng={-123.142035}
              location='Westside Preserve'
              map_link='https://www.google.com/maps/place/Westside+Preserve/@48.5417595,-123.1408364,12.68z/data=!4m5!3m4!1s0x548f7980587d3095:0x955ec101557d4b4d!8m2!3d48.5063153!4d-123.142014'
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
