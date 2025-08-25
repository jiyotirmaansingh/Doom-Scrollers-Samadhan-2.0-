import Crd from './components/crd';
import Crd1 from './components/Crd1';
import Crd2 from './components/Crd2';
import './App.css';
function App() {
    return (
        <div className="card">
            <div className="card-header">
                <Crd />
                <Crd1 />
            </div>
            <Crd2 />
        </div>
    );
}
export default App;