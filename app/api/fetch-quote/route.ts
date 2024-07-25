import { setCache } from '@/lib/cache';
import { fetchData } from '@/lib/quote';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
        const data = await fetchData();
        setCache(data);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}