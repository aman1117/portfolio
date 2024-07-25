import { getCache, isCacheStale, setCache } from "@/lib/cache";
import { fetchData } from "@/lib/quote";

const fetchServerData = async () => {
  if (isCacheStale()) {
    const data = await fetchData();
    setCache(data);
  }

  return getCache()?.data || null;
};

const Quote = async () => {
  const data = await fetchServerData();
  return (
    <div className="flex items-center justify-between gap-x-2">
      <div>
        <p className="italic md:text-lg text-base">{data[0].q}</p>
      </div>
      <div>
        <p className="italic md:text-lg text-base">{data[0].a}</p>
      </div>
    </div>
  );
};

export default Quote;
