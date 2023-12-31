import { useContext } from 'react';
import { ParamContext } from '../context';

export default function useParamsContext() {
	const context = useContext(ParamContext);
	if (context == null)
		throw new Error('Must use param context inside provider');
	return context;
}
