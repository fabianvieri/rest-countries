import { Grid, Text } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import Spinner from './ui/Spinner';
import CountryItem from './CountryItem';
import useParamsContext from '../hooks/useParamsContext';
import { getCountries } from '../services';

export default function CountryList() {
	const { params } = useParamsContext();
	const { data, isPending, isError } = useQuery({
		queryKey: ['countries'],
		queryFn: () => getCountries('/all'),
	});

	if (isPending) return <Spinner />;
	if (isError)
		return (
			<Text as="p" color="crimson" mt="4">
				Error loading countries data...
			</Text>
		);

	const filteredData = data.filter((country) => {
		const query = params.get('q');
		const filter = params.get('filter');
		const queryCheck =
			!query ||
			country.name.common.toLowerCase().startsWith(query.toLowerCase()) ||
			country.name.official.toLowerCase().startsWith(query.toLowerCase());

		const filterCheck =
			!filter ||
			filter === 'all' ||
			country.region.toLowerCase() === filter.toLowerCase();

		return queryCheck && filterCheck;
	});

	if (filteredData.length === 0)
		return (
			<Text as="p" mt="4" color="bronze" weight="bold">
				No country found
			</Text>
		);

	return (
		<Grid
			columns={{ initial: '1', xs: '2', sm: '3', md: '4' }}
			className="p-0 justify-items-center"
			gap="4"
			mt="5"
		>
			{filteredData.map((country) => (
				<CountryItem key={country.name.official} country={country} />
			))}
		</Grid>
	);
}
