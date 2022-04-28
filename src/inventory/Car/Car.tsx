/** @format */

import React from 'react';
import './Car.scss';

type Props = {
	wheelsize: number;
	speed: number;
};

const Car: React.FC<Props> = ({ wheelsize, speed }) => {
	return (
		<div className='tesla-car'>
			<div className='tesla-wheelss'>
				<div
					className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheelsize}--${speed}`}></div>
				<div
					className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelsize}--${speed}`}></div>
			</div>
		</div>
	);
};

export default React.memo(Car);
