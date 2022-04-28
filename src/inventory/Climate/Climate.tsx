/** @format */

import React, { useCallback, useState } from 'react';
import useInventory from '../useInventory';
import './Climate.scss';

type Props = {
	limit: boolean;
	climate: any;
};

const Climate: React.FC<Props> = ({ limit, climate }) => {
	const { onClimateChange } = useInventory();
	const [focus, seFocus] = useState(false);

	const onFocusChange = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
		seFocus(true);
	}, []);

	const onBlurChange = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
		seFocus(false);
	}, []);

	return (
		<div className='tesla-climate'>
			<label
				className={`tesla-climate__item
            ${climate ? 'tesla-climate__item--active' : ''}
            ${focus ? 'tesla-climate__item--focused' : ''}
            ${!limit ? 'tesla-heat' : ''} 
          `}>
				<p>{limit ? 'ac' : 'heat'}</p>
				<i className='tesla-climate__icon'></i>
				<input
					type='checkbox'
					name='climate'
					checked={climate}
					value={climate}
					onChange={onClimateChange}
					onFocus={onFocusChange}
					onBlur={onBlurChange}
				/>
			</label>
		</div>
	);
};

export default React.memo(Climate);
