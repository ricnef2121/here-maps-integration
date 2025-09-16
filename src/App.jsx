import MapaHEREReactComponent from "./components/HereMapsComponent.jsx"
import { ErrorBoundary } from "react-error-boundary";

function App() {
  console.warn('App rendered', import.meta.env.VITE_HERE_API_KEY)
  const markers = [
    {
      id: 'm1',
      lat: 19.4326,
      lng: -99.1332,
      label: 'CDMX',
      onClick: (m) => alert(`Clic en marcador: ${m.label}`),
    },
    {
      id: 'm2',
      lat: 19.427,
      lng: -99.167,
      label: 'Otro punto',
    },
  ];
  function fallbackRender({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>       
      <ErrorBoundary fallback={fallbackRender}>
        <MapaHEREReactComponent
          apiKey={import.meta.env.VITE_HERE_API_KEY} // o directamente tu key 'xxxx'
          center={{ lat: 19.4326, lng: -99.1332 }}
          zoom={12}
          markers={markers}
        />
      </ErrorBoundary>
    </div>
  )
}

export default App
