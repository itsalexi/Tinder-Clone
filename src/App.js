import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import './css/App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    );
}

export default App;
