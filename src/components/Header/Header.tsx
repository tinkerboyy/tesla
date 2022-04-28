/** @format */

import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';

const Header = () => (
	<header className='header'>
		<img src={logo} />
	</header>
);

export default React.memo(Header);
