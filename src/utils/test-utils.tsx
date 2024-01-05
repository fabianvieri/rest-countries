import { Theme } from '@radix-ui/themes';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render } from '@testing-library/react';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
});

function providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={client}>
			<Theme>
				<MemoryRouter>{children}</MemoryRouter>
			</Theme>
		</QueryClientProvider>
	);
}

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
	return render(ui, {
		wrapper: providers,
		...options,
	});
}

export { customRender as render };
