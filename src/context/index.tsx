import { createContext } from 'react';
import { SetURLSearchParams, useSearchParams } from 'react-router-dom';

interface ParamContext {
	params: URLSearchParams;
	setParams: SetURLSearchParams;
}

export const ParamContext = createContext<ParamContext | undefined>(undefined);

export default function ParamsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [params, setParams] = useSearchParams({ q: '', filter: '' });

	return (
		<ParamContext.Provider value={{ params, setParams }}>
			{children}
		</ParamContext.Provider>
	);
}
