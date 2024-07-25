type CacheData = {
    data: any;
    timestamp: number;
};

let cache: CacheData | null = null;

export const setCache = (data: any) => {
    cache = {
        data,
        timestamp: Date.now(),
    };
};

export const getCache = () => {
    return cache;
};

export const isCacheStale = () => {
    if (!cache) return true;

    const now = new Date();
    const lastFetch = new Date(cache.timestamp);

    // Check if the last fetch was before today
    return now.getDate() !== lastFetch.getDate();
};