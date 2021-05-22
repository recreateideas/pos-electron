import { Order, Products } from './features';
import useHealthCheck from './hooks/use-health-check';

function App() {
    const isHealthy = useHealthCheck();
    return (
        <div className="App">
            {isHealthy ? (
                <>
                    <Products />
                    <Order />
                </>
            ) : (
                'checking apps health...'
            )}
        </div>
    );
}

export default App;
