import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CloudExpertise from '@/models/CloudExpertise';

export async function GET() {
  try {
    await dbConnect();
    
    const clouds = await CloudExpertise.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ clouds });
  } catch (error) {
    console.error('Cloud expertise fetch error:', error);
    return NextResponse.json(
      { error: 'Error fetching cloud expertise' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    
    const cloudData = await request.json();
    const cloud = await CloudExpertise.create(cloudData);
    
    return NextResponse.json({ cloud }, { status: 201 });
  } catch (error) {
    console.error('Cloud expertise creation error:', error);
    return NextResponse.json(
      { error: 'Error creating cloud expertise' },
      { status: 500 }
    );
  }
}