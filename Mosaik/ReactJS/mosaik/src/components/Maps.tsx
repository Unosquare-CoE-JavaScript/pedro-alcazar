import React from "react";
import GoogleMapReact from 'google-map-react';

const Maps = () => {

    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact 
            bootstrapURLKeys={{ key: "AIzaSyAzhh4Muwn-Onz86oKXLZ-1_OoXW1Y-5C8" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            />
        </div>
    )
}

export default Maps;