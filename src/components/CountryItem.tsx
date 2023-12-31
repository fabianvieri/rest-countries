import { useNavigate } from 'react-router-dom';
import { Card, Inset, Heading } from '@radix-ui/themes';

import { Country } from '../types';
import DetailText from './DetailText';

interface Props {
	country: Country;
}

export default function CountryItem({ country }: Props) {
	const navigate = useNavigate();

	const navigateDetail = (country: Country) => {
		navigate(`/country/${country.cca3}`, { state: country });
	};

	return (
		<Card
			onClick={() => navigateDetail(country)}
			size="2"
			variant="classic"
			className="w-[250px] cursor-pointer hover:opacity-80 dark:bg-dark"
		>
			<Inset clip="padding-box" side="top" pb="current">
				<img
					src={country.flags.svg}
					alt={country.name.common}
					className="block object-cover w-full h-[130px]"
				/>
			</Inset>
			<Heading as="h3" size="4" mb="3">
				{country.name.common}
			</Heading>
			<DetailText
				label="Population"
				value={country.population.toLocaleString()}
			/>
			<DetailText label="Region" value={country.region} />
			<DetailText label="Capital" value={country.capital} />
		</Card>
	);
}
