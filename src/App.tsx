import { Box, Flex } from '@radix-ui/themes';

import ParamsProvider from './context';
import Search from './components/Search';
import Filter from './components/Filter';
import CountryList from './components/CountryList';

export default function App() {
	return (
		<ParamsProvider>
			<Flex
				gap="3"
				justify="between"
				direction={{ initial: 'column', sm: 'row' }}
			>
				<Box grow="1">
					<Search />
				</Box>
				<Box>
					<Filter />
				</Box>
			</Flex>
			<CountryList />
		</ParamsProvider>
	);
}
