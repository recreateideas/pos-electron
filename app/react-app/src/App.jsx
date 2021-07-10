import { useHealthCheck, useServicePorts } from './hooks';
import { Loader } from './ui-core';
import { Shop } from './features';

function App() {
    const servicePorts = useServicePorts();
    const isHealthy = useHealthCheck();
    const isChecking = isHealthy === undefined;
    return (
        <div id="app">
            {isHealthy ? (
                <Shop />
            ) : !servicePorts ? (
                <Loader
                    {...{ color: 'green', message: 'setting up services...' }}
                />
            ) : isChecking ? (
                <Loader
                    {...{ color: '#6b5b95', message: 'checking services...' }}
                />
            ) : (
                <Loader
                    {...{
                        color: 'red',
                        freeze: true,
                        message:
                            'Services are not responding. Cmd + R to retry.'
                    }}
                />
            )}
        </div>
    );
}

export default App;
