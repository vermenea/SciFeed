
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchNews = async () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const category = 'health'; // Fetch health-related news
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error fetching news:',
        error.response?.data || error.message
      );
      throw new Error('Failed to fetch news');
    } else {
      throw error;
    }
  }
};

const useFetchNews = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchNews,
  });
};

export default useFetchNews;
