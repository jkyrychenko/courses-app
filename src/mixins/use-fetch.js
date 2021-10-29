import api from '../lib/api/api';
import { useState, useEffect } from 'react';

export const useFetch = (url, token) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await api.getCoursesData(url, token);
		setData(response.data.result);
		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, [url]);

	return { loading, data };
};
