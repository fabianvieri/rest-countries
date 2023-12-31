import { Select } from '@radix-ui/themes';
import useParamsContext from '../hooks/useParamsContext';

export default function Filter() {
	const { setParams, params } = useParamsContext();
	const region = params.get('filter') ?? undefined;

	const changeHandler = (value: string) => {
		setParams(
			(prev) => {
				prev.set('filter', value);
				return prev;
			},
			{ replace: true }
		);
	};

	return (
		<Select.Root size="3" onValueChange={changeHandler} value={region}>
			<Select.Trigger placeholder="Filter by Region" className="dark:bg-dark" />
			<Select.Content position="popper" className="dark:bg-dark">
				<Select.Item value="all">All</Select.Item>
				<Select.Item value="africa">Africa</Select.Item>
				<Select.Item value="america">America</Select.Item>
				<Select.Item value="asia">Asia</Select.Item>
				<Select.Item value="europe">Europe</Select.Item>
				<Select.Item value="oceania">Oceania</Select.Item>
			</Select.Content>
		</Select.Root>
	);
}
