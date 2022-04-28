/** @format */

import React, { useCallback, useState } from 'react';
import Car from '../Car';
import Climate from '../Climate';
import Counter from '../Counter';
import Stats from '../Stats';
import useInventory from '../useInventory';
import Wheels from '../Wheels';
import './Model.scss';

const Model = () => {
	const {
		speed,
		temperature,
		stats,
		speedIncrement,
		tempIncrement,
		tempDecrement,
		speedDecrement,
	} = useInventory();

	return (
		<React.Fragment>
			<form className='tesla-battery'>
				<h1>Range Per Charge</h1>
				<Car wheelsize={stats.wheels} speed={stats.speed} />
				<Stats />
				<div className='tesla-controls cf'>
					<Counter
						{...speed}
						value={stats.speed}
						onCounterIncrement={speedIncrement}
						onCounterDecrement={speedDecrement}
					/>
					<Counter
						{...temperature}
						value={stats.temperature}
						onCounterIncrement={tempIncrement}
						onCounterDecrement={tempDecrement}
					/>
					<div className='tesla-temp cf'>
						<Climate limit={stats.temperature > 10} climate={stats.climate} />
					</div>
					<Wheels wheels={stats.wheels} />
				</div>
				<div className='tesla-battery__notice'>
					<p>
						The actual amount of range that you experience will vary based on
						your particular use conditions. See how particular use conditions
						may affect your range in our simulation model.
					</p>
					<p>
						Vehicle range may vary depending on the vehicle configuration,
						battery age and condition, driving style and operating,
						environmental and climate conditions.
					</p>
				</div>
			</form>
		</React.Fragment>
	);
};

export default React.memo(Model);
