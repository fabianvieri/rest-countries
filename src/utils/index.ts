export function getDynamicProps<T>(c: T, prop: keyof T) {
	const nestedProp = c[prop];
	const props: string[] = [];
	for (const key in nestedProp) {
		if (Object.prototype.hasOwnProperty.call(nestedProp, key)) {
			props.push(key);
		}
	}
	return props;
}
