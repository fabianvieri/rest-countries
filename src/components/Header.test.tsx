import { describe, expect, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

import Header from './Header';
import { render } from '../utils/test-utils';

describe('Test Header Component', () => {
	// by test
	it('the title is visible', () => {
		render(<Header />);
		expect(screen.getByText(/Where in the world\?/));
	});

	// by test id
	it('dark mode is visible', () => {
		render(<Header />);
		expect(screen.getByTestId('dark-text')).toHaveTextContent(/dark mode/i);
	});

	// change to dark mode
	it('change to dark mode', () => {
		render(<Header />);
		fireEvent.click(screen.getByTestId('dark-text'));
		expect(screen.getByTestId('dark-text')).toHaveTextContent(/light mode/i);
	});
});
