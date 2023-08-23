"use client";

import { useBingLayer } from "@ericsison/mapspot/hooks/map/use-bing-layer";
import { useLayer } from "@ericsison/mapspot/hooks/map/use-layer";
import { useOsmLayer } from "@ericsison/mapspot/hooks/map/use-osm-layer";
import { FunctionComponent } from "react";

export const AddDefaultLayer: FunctionComponent = () => {
  const { addLayer } = useLayer();

  const osm = useOsmLayer({ visible: true });

  const bingMap = useBingLayer({
    visible: true,
    placeholderTiles: false,
  });

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => {
          addLayer(osm);
          console.log(osm);
        }}
      >
        Add OSM
      </button>
      <button
        onClick={() => {
          addLayer(bingMap);
          console.log(JSON.stringify(bingMap));
        }}
      >
        Add Bing
      </button>
    </div>
  );
};
