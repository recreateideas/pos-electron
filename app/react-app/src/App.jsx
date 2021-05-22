import useHealthCheck from './hooks/use-health-check';
import { Shop } from './features';

function App() {
    const isHealthy = useHealthCheck();
    return (
        <div id="app">{isHealthy ? <Shop /> : 'checking apps health...'}</div>
    );
}

export default App;
