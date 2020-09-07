import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { OurTeam } from './Pages/OurTeam/OurTeam';
import { HomePage } from './Pages/HomePage/HomePage';
import { NavLink } from 'react-router-dom';
import gs from './Assets/imgs/gs-hd2.png';
// import { LazyPage } from "./Pages/LazyPage";
import { Events } from './Pages/Events/Events';
import Navbar from './Components/NavBar';

// import Lazy from "./Components/Lazy";
import SideMenu from './Components/SideMenu';
import './App.css';
// This is temporary - to be removed when replaced with original testimonials
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter basename='/Girlscript-Hubli-Dwd'>
				<SideMenu />
				<div className='dummyNav'>
					<NavLink to='/'>
						<span>
							<img
								src={gs}
								alt=''
								className='img -img-fluid navImage '
								style={{}}
							/>
						</span>
					</NavLink>
				</div>

				{/* <Navbar/>     */}
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>

					<Route path='/our-team' exact>
						<OurTeam />
					</Route>
					<Route path='/events' exact>
						<Events />
					</Route>
					{/* <Route path="/lazy-page" exact>
            <Lazy />
          </Route> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
