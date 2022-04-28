/** @format */

import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Provider } from './inventory/InventoryProvider';
import Model from './inventory/Model';

function App() {
	return (
		<Provider>
			<div className='app'>
				<Header />
			</div>
			<div className='wrapper'>
				<Model />
			</div>
		</Provider>
	);
}

export default React.memo(App);
