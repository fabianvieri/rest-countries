import { Link } from 'react-router-dom';
import { Box, Heading } from '@radix-ui/themes';

interface Props {
	message?: string;
}

export default function NotFound({ message = 'Page Not Found' }: Props) {
	return (
		<Box className="p-4">
			<Heading size="5" mb="2" color="crimson">
				{message}
			</Heading>
			<Link to="/" className="text-md hover:underline">
				Back to Home
			</Link>
		</Box>
	);
}
