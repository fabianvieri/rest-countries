import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heading, Flex } from '@radix-ui/themes';

import DarkMode from './DarkMode';

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
	}, [darkMode]);

	return (
		<header>
			<Flex justify="between">
				<Heading size={{ initial: '4', xs: '5', sm: '6' }}>
					<Link to="/">Where in the world?</Link>
				</Heading>
				<DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
			</Flex>
		</header>
	);
}
