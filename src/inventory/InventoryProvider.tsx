/** @format */

import React, { useState } from 'react';

export function createCtx<A>(defaultValue: A) {
	type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
	const defaultUpdate: UpdateType = () => defaultValue;
	const ctx = React.createContext({
		state: defaultValue,
		update: defaultUpdate,
	});
	function Provider(props: React.PropsWithChildren<{}>) {
		const [state, update] = React.useState(defaultValue);
		return <ctx.Provider value={{ state, update }} {...props} />;
	}
	return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

type Props = {
	children: React.ReactChild[];
};

type Model = {
	model: string;
	miles: number;
};

type State = {
	speed: {
		step: number;
		max: number;
		min: number;
		title: string;
		unit: string;
	};
	temperature: {
		step: number;
		max: number;
		min: number;
		title: string;
		unit: string;
	};
	stats: {
		speed: number;
		temperature: number;
		climate: boolean;
		wheels: number;
	};
	models: Model[];
};

export const initialState: State = {
	speed: {
		step: 5,
		max: 70,
		min: 45,
		title: 'Speed',
		unit: 'mph',
	},
	temperature: {
		step: 10,
		max: 40,
		min: -10,
		title: 'Outside Temperature',
		unit: '°',
	},
	stats: {
		speed: 55,
		temperature: 20,
		climate: true,
		wheels: 19,
	},
	models: [],
};
// const Context = React.createContext([{}, () => {}]);

const [ctx, InventoryProvider] = createCtx(initialState);
const Context = ctx;

const Provider: React.FC<Props> = ({ children }) => {
	return <InventoryProvider>{children}</InventoryProvider>;
};

export { Context, Provider };
