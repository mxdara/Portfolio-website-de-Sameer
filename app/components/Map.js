'use client';

import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        // Center the projection around Montreal, Canada (lon, lat).
        rotate: [73.5673, -45.5017, 0],
        center: [0, 0],
        scale: 1800
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-73.5673, 45.5017]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round'
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {'Montreal, Canada'}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
