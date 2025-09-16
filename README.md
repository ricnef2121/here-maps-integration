# MapaHEREReactComponent.jsx
  -------------------------
## Componente React (default export) para mostrar un mapa usando HERE Maps JavaScript API v3.1.
 - Usa Tailwind para estilos (sin necesidad de importar Tailwind aquí; asume que tu proyecto ya lo tiene).
 - Carga los scripts y CSS de HERE dinámicamente.
 
## Props:
 - apiKey (string) -> YOUR_HERE_API_KEY (requerido)
 - center ({ lat: number, lng: number }) -> coordenadas iniciales (default { lat: 19.4326, lng: -99.1332 })
 - zoom (number) -> nivel de zoom inicial (default 12)
 - markers (array) -> [{ id, lat, lng, label, onClick }] (opcional)
 - height (string) -> altura CSS del contenedor (default 'h-96')
 
## Ejemplo de uso:
```
 <MapaHEREReactComponent 
 apiKey={process.env.NEXT_PUBLIC_HERE_API_KEY} 
 center={{lat:19.43,lng:-99.13}} 
 zoom={13} 
 markers={[{id:'m1',lat:19.43,lng:-99.13,label:'CDMX'}]} 
 />
```