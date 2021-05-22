import useHealthCheck from './hooks/use-health-check';
import { Loader } from './ui-core';
import { Shop } from './features';

function App() {
    const isHealthy = useHealthCheck();
    return (
        <div id="app">
            {isHealthy ? (
                <Shop />
            ) : (
                <Loader
                    {...{ color: '#6b5b95', message: 'checking services...' }}
                />
            )}
        </div>
    );
}

export default App;
