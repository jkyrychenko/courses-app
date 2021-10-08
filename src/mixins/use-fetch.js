import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState([]);

	const getData = async () => {
		try {
			const response = await axios(url);
			setData(response.data.result);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, [url]);

	return { data };
};
