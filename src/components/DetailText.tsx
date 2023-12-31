import { Text } from '@radix-ui/themes';

interface Props {
	label: string;
	value: string | string[];
}

export default function DetailText({ label, value }: Props) {
	return (
		<Text as="p" className="leading-relaxed">
			<span className="font-semibold">{`${label}: `}</span>
			{value}
		</Text>
	);
}
