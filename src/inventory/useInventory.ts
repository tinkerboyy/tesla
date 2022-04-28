/** @format */

import React, { useCallback, useContext, useEffect } from 'react';
import { allModels, results } from './constants';
import { Context, initialState } from './InventoryProvider';

const calculateStats = (models: Array<string>, value = initialState) => {
	return models.map((model: string) => {
		const {
			stats: { speed, temperature, climate, wheels },
		} = value;
		const miles =
			allModels[model][wheels][climate ? 'on' : 'off'].speed[speed][
				temperature
			];
		return {
			model,
			miles,
		};
	});
};

const useInventory = () => {
	const { state, update } = useContext(Context);

	useEffect(() => {
		const models = calculateStats(results, state);
		update({ ...state, models });
	}, [state, update]);

	const onWheelChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const wheels = parseInt(event.target.value, 10);
			const updateState = { ...state, stats: { ...state.stats, wheels } };
			const models = calculateStats(results, updateState);
			update({ ...updateState, models });
		},
		[update, state],
	);

	const onClimateChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const climate = event.target.checked;
			const updateState = { ...state, stats: { ...state.stats, climate } };
			const models = calculateStats(results, updateState);
			update({ ...updateState, models });
		},
		[update, state],
	);

	const tempIncrement = useCallback(
		(temperature: number) => {
			const updateState = { ...state, stats: { ...state.stats, temperature } };
			const models = calculateStats(results, updateState);
			update({ ...updateState, models });
		},
		[update, state],
	);

	const tempDecrement = useCallback(
		(temperature: number) => {
			const updateState = {
				...state,
				stats: { ...state.stats, temperature },
			};
			const models = calculateStats(results, updateState);
			update({ ...updateState, models });
		},
		[update, state],
	);

	const speedIncrement = useCallback(
		(speed: number) => {
			const updateState = {
				...state,
				stats: { ...state.stats, speed },
			};
			const models = calculateStats(results, updateState);
			update({ ...updateState, models });
		},
		[update, state],
	);

	const speedDecrement = useCallback(
		(speed: number) => {
			const updateState = {
				...state,
				stats: { ...state.stats, speed },
			};
			const models = calculateStats(results, updateState);
			update({ ...updateState, models });
		},
		[update, state],
	);

	return {
		speed: state.speed,
		temperature: state.temperature,
		stats: state.stats,
		onWheelChange,
		onClimateChange,
		tempIncrement,
		tempDecrement,
		speedIncrement,
		speedDecrement,
		models: state.models,
	};
};

export default useInventory;
