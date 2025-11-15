import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';

export async function GET() {
  try {
    await dbConnect();
    
    const services = await Service.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ services });
  } catch (error) {
    console.error('Services fetch error:', error);
    return NextResponse.json(
      { error: 'Error fetching services' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    
    const serviceData = await request.json();
    const service = await Service.create(serviceData);
    
    return NextResponse.json({ service }, { status: 201 });
  } catch (error) {
    console.error('Service creation error:', error);
    return NextResponse.json(
      { error: 'Error creating service' },
      { status: 500 }
    );
  }
}