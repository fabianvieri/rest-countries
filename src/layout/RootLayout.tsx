import { Outlet } from 'react-router-dom';
import { Box, Container, Flex } from '@radix-ui/themes';

import Header from '../components/Header';

export default function RootLayout() {
	return (
		<Flex direction="column" className="min-h-dvh">
			<Box className="bg-white shadow-2xl dark:bg-dark">
				<Container className="p-4 ">
					<Header />
				</Container>
			</Box>
			<Box grow="1" className="h-auto bg-lightgray dark:bg-darkblue">
				<Container className="p-4">
					<Outlet />
				</Container>
			</Box>
		</Flex>
	);
}
