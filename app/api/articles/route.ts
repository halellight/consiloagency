import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'articles.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const articles = JSON.parse(fileData);
        return NextResponse.json(articles);
    } catch (error) {
        console.error("API Error fetching articles:", error);
        return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
    }
}
