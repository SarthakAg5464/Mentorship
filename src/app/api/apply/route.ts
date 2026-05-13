import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const examName = formData.get('examName');
    const transactionId = formData.get('transactionId');
    const resultPdf = formData.get('resultPdf') as File;

    if (!resultPdf) {
      return NextResponse.json({ message: 'Result PDF is required' }, { status: 400 });
    }

    const MAX_SIZE = 2 * 1024 * 1024;
    if (resultPdf.size > MAX_SIZE) {
      return NextResponse.json(
        { message: 'File size too large. PDF must be less than 2MB.' },
        { status: 400 }
      );
    }

    if (resultPdf.type !== 'application/pdf') {
      return NextResponse.json({ message: 'Only PDF files are allowed.' }, { status: 400 });
    }

    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const fileName = `${Date.now()}-${resultPdf.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('result_pdf')
      .upload(fileName, resultPdf);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('result_pdf')
      .getPublicUrl(fileName);

    const { error: dbError } = await supabase
      .from('mentorship_data')
      .insert({
        full_name: fullName,
        email: email,
        phone: phone,
        exam_name: examName,
        transaction_id: transactionId,
        pdf_url: publicUrl
      });

    if (dbError) throw dbError;

    return NextResponse.json(
      { message: 'Application submitted successfully! Our team will contact you after verification.' },
      { status: 200 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
