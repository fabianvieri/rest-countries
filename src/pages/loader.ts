import { ActionFunctionArgs, Params, ParamParseKey } from 'react-router-dom';
import { getCountryById } from '../services';
import { QueryClient } from '@tanstack/react-query';

const Paths = {
	countryDetail: '/country/:id',
} as const;

interface CountryLoaderArgs extends ActionFunctionArgs {
	params: Params<ParamParseKey<typeof Paths.countryDetail>>;
}

export const countryDetailQuery = (id: string) => ({
	queryKey: ['country', id],
	queryFn: async () => getCountryById(id),
});

export const countryLoader =
	(queryClient: QueryClient) =>
	async ({ params }: CountryLoaderArgs) => {
		const query = countryDetailQuery(params.id ?? '');

		return (
			queryClient.getQueryData(query.queryKey) ??
			(await queryClient.fetchQuery(query))
		);
	};
