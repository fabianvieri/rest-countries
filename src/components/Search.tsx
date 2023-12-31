import { TextField } from '@radix-ui/themes';
import { Search as Icon } from 'lucide-react';
import useParamsContext from '../hooks/useParamsContext';

export default function Search() {
	const { setParams, params } = useParamsContext();
	const searchValue = params.get('q') ?? '';

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setParams(
			(prev) => {
				prev.set('q', e.target.value.trim());
				return prev;
			},
			{ replace: true }
		);
	};

	return (
		<TextField.Root className="pr-2 dark:bg-dark">
			<TextField.Slot>
				<Icon size={18} />
			</TextField.Slot>
			<TextField.Input
				value={searchValue}
				onChange={changeHandler}
				size="3"
				placeholder="Search for a country..."
			/>
		</TextField.Root>
	);
}
