import Header from './components/Header'
import Navigation from './components/Navigation'
import TapTempo from './components/TapTempo'
import './App.scss'

const App = () => {
	return (
		<div className="GLWN">
			<div className='v-align'>
				<Header />
				{/* <Navigation /> */}
				<TapTempo />
			</div>
		</div>
	);
}	

export default App;
