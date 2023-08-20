import './App.css';
import Home from './pages/Home';
import Maze from './pages/Maze';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Creativity from './pages/Creativity';

function App() {
	return (
		<div className='dev'>
			<Home />
			<Maze />
			<Projects />
			<Skills />
			<Creativity />
		</div>
	)
}

export default App;
