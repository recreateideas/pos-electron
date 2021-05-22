import useHealthCheck from './hooks/use-health-check';
import { Loader } from './ui-core';
import { Shop } from './features';

function App() {
    const isHealthy = useHealthCheck();
    const isChecking = isHealthy === undefined;
    return (
        <div id="app">
            {isHealthy ? (
                <Shop />
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
