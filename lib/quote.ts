export const fetchData = async () => {
    const url = process.env.QUOTE_API;

    if (!url) {
        throw new Error('API URL is not defined in environment variables');
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
};