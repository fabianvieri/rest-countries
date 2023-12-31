import axios from 'axios';
import { Country } from '../types';

const url = import.meta.env.VITE_API_URL;

export async function getCountries(urlParam: string) {
	const response = await axios.get<Country[]>(`${url}${urlParam}`);
	return response.data;
}

export async function getCountryById(id: string) {
	const response = await axios.get<Country[]>(`${url}/alpha/${id}`);
	return response.data;
}
