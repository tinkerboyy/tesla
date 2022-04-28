/** @format */

import React from 'react';
import useInventory from '../useInventory';
import './Stats.scss';

const Stats = () => {
	const { models } = useInventory();

	return (
		<div className='tesla-stats'>
			<ul>
				{(models || []).map((stat, index) => (
					<li key={index}>
						<div
							className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
						<p>{stat.miles}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(Stats);
