import { Moon, Sun } from 'lucide-react';
import { Flex, Text } from '@radix-ui/themes';

interface Props {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DarkMode({ darkMode, setDarkMode }: Props) {
	return (
		<Flex
			onClick={() => setDarkMode(!darkMode)}
			gap="2"
			align="center"
			className="cursor-pointer hover:opacity-80"
			data-testid="dark-text"
		>
			{darkMode ? <Sun size={18} /> : <Moon size={18} />}
			<Text weight="bold">{darkMode ? 'Light' : 'Dark'} Mode</Text>
		</Flex>
	);
}
