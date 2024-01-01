import { MoveLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';

import NotFound from './not-found';
import { getDynamicProps } from '../utils';
import { countryDetailQuery } from './loader';
import DetailText from '../components/DetailText';

export default function CountryDetail() {
	const navigate = useNavigate();
	const params = useParams();
	const { data } = useQuery(countryDetailQuery(params.id ?? ''));

	if (!data) return <NotFound message="Country Not Found" />;

	const country = data[0];

	const nativeNames = getDynamicProps(country.name, 'nativeName');
	const languages = getDynamicProps(country, 'languages')
		.map((l) => country.languages[l])
		.join(', ');
	const currencies = getDynamicProps(country, 'currencies')
		.map((c) => country.currencies[c].name)
		.join(', ');

	return (
		<Box>
			<Button
				onClick={() => navigate(-1)}
				variant="soft"
				className="p-4 my-4 bg-white shadow-lg cursor-pointer dark:bg-dark dark:text-white hover:opacity-80 text-neutral-900"
			>
				<MoveLeft /> Back
			</Button>
			<Flex gap="5" direction={{ initial: 'column', md: 'row' }}>
				<Box className="lg:w-1/2">
					<img
						src={country.flags.svg}
						alt={country.name.official}
						className="max-w-full"
					/>
				</Box>
				<Box>
					<Heading mb="4">{country.name.common}</Heading>
					<Flex gap="5" direction={{ initial: 'column', sm: 'row' }}>
						<Box>
							<DetailText
								label="Native Name"
								value={country.name.nativeName[nativeNames[0]].official}
							/>
							<DetailText
								label="Population"
								value={country.population.toLocaleString()}
							/>
							<DetailText label="Region" value={country.region} />
							<DetailText label="Sub Region" value={country.subregion} />
							<DetailText label="Capital" value={country.capital} />
						</Box>
						<Box>
							<DetailText label="Top Level Domain" value={country.tld} />
							<DetailText label="Currencies" value={currencies} />
							<DetailText label="Languages" value={languages} />
						</Box>
					</Flex>
					{country.borders && (
						<Flex
							gap="4"
							align={{ initial: 'start', xs: 'center' }}
							mt="4"
							direction={{ initial: 'column', xs: 'row' }}
						>
							<Text as="p" weight="bold">
								Border Countries:
							</Text>
							<Flex wrap="wrap" gap="2">
								{country.borders.map((border) => (
									<Link
										key={border}
										to={`/country/${border}`}
										className="px-6 py-[2px] dark:bg-dark  rounded-md shadow-md ring-1 ring-neutral-500 hover:opacity-80"
									>
										{border}
									</Link>
								))}
							</Flex>
						</Flex>
					)}
				</Box>
			</Flex>
		</Box>
	);
}
