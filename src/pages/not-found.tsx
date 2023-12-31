import { Container, Grid, Heading } from '@radix-ui/themes';

export default function NotFound() {
	return (
		<Container className="border border-red-600 min-h-dvh">
			<Grid className="border border-red-600">
				<Heading>Country Not Found</Heading>
			</Grid>
		</Container>
	);
}
