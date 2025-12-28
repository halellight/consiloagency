import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'projects.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const projects = JSON.parse(fileContent);
        return NextResponse.json(projects);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
