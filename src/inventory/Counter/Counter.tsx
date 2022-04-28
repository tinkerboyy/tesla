/** @format */
import React, { useCallback, MouseEvent } from 'react';
import './Counter.scss';

type Props = {
	title: string;
	unit: string;
	step: number;
	min: number;
	max: number;
	value: number;
	onCounterIncrement: (value: number) => void;
	onCounterDecrement: (value: number) => void;
};

const Counter: React.FC<Props> = ({
	title,
	unit,
	step,
	min,
	max,
	value,
	onCounterIncrement,
	onCounterDecrement,
}) => {
	let count = value;

	const onIncrement = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			event.stopPropagation();

			if (value < max) {
				count = count + step;
				onCounterIncrement(count);
			}
		},
		[onCounterIncrement],
	);

	const onDecrement = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			event.stopPropagation();
			if (value > min) {
				count = count - step;
				onCounterDecrement(count);
			}
		},
		[onCounterDecrement],
	);

	return (
		<div className='tesla-counter'>
			<p className='tesla-counter__title'>{title}</p>
			<div className='tesla-counter__container cf'>
				<div className='tesla-counter__item' tabIndex={0}>
					<p className='tesla-counter__number'>
						{value}
						<span>{unit}</span>
					</p>
					<div className='tesla-counter__controls' tabIndex={1}>
						<button
							onClick={onIncrement}
							tabIndex={-1}
							disabled={value === max}></button>
						<button
							onClick={onDecrement}
							tabIndex={-1}
							disabled={value === min}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Counter);
