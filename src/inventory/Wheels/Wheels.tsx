/** @format */

import React, { useMemo } from 'react';
import useInventory from '../useInventory';
import './Wheels.scss';

const sizes = [19, 21];

type Props = {
	wheels: number;
};

const Wheels: React.FC<Props> = ({ wheels }) => {
	const { onWheelChange } = useInventory();

	return (
		<div className='tesla-wheels'>
			<p className='tesla-wheels__title'>Wheels</p>
			<div className='tesla-wheels__container cf'>
				{sizes.map((size) => (
					<label
						key={size}
						className={`tesla-wheels__item tesla-wheels__item--${size}
                      ${wheels === size ? 'tesla-wheels__item--active' : ''}
                      tesla-wheels__item--focused
                    `}>
						<input
							type='radio'
							value={size}
							checked={wheels === size}
							onChange={onWheelChange}
						/>
						<p>{size}"</p>
					</label>
				))}
			</div>
		</div>
	);
};

export default React.memo(Wheels);
