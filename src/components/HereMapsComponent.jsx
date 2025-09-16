import { useRef, useEffect } from 'react';

export default function MapaHEREReactComponent({
    apiKey,
    center = { lat: 19.432608, lng: -99.133209 },
    zoom = 12,
    markers = [],
}) {
    const mapRef = useRef(null);
    const mapObjRef = useRef(null);

    useEffect(() => {
        if (!apiKey) {
            console.error("HERE Maps API key is required (prop: apiKey)");
            return;
        }
        const H = window.H;
        if (!H) {
            console.error("HERE Maps API scripts not loaded (window.H missing)");
            return;
        }

        // Platform and default layers
        const platform = new H.service.Platform({ apikey: apiKey });
        const defaultLayers = platform.createDefaultLayers();

        // Map
        mapObjRef.current = new H.Map(
            mapRef.current,
            defaultLayers.vector.normal.map,
            {
                center,
                zoom,
                pixelRatio: window.devicePixelRatio || 1,
            }
        );

        // Interactions + UI
        new H.mapevents.Behavior(new H.mapevents.MapEvents(mapObjRef.current));
        H.ui.UI.createDefault(mapObjRef.current, defaultLayers);

        // Resize on window size change
        const onResize = () => mapObjRef.current.getViewPort().resize();
        window.addEventListener("resize", onResize);

        // Add markers
        markers.forEach((m) => {
            const marker = new H.map.Marker({ lat: m.lat, lng: m.lng });
            marker.setData(m.label || "");
            if (m.onClick) marker.addEventListener("tap", () => m.onClick(m));
            mapObjRef.current.addObject(marker);
        });

        return () => {
            window.removeEventListener("resize", onResize);
            mapObjRef.current.dispose();
        };
    }, [apiKey, center.lat, center.lng, zoom, markers]);

    return (
        <div style={{ width: "500px", height: "500px" }}  >
            <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
}