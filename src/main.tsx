import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import NotFound from './pages/not-found.tsx';
import CountryDetail from './pages/CountryDetail.tsx';
import { countryLoader } from './pages/loader.ts';

import '@radix-ui/themes/styles.css';
import './index.css';
import './theme-config.css';
import RootLayout from './layout/RootLayout.tsx';

export const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			retry: 0,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/country/:id',
				element: <CountryDetail />,
				loader: countryLoader(client),
				errorElement: <NotFound />,
			},
		],
	},
	{
		path: '*',
		element: <p>404 page not found</p>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<Theme>
				<RouterProvider router={router} />
			</Theme>
		</QueryClientProvider>
	</React.StrictMode>
);
