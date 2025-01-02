import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { url } = await request.json()

  try {
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
    
    if (!response.ok) {
      throw new Error('Failed to shorten URL')
    }

    const shortUrl = await response.text()
    return NextResponse.json({ shortUrl })
  } catch (err) {
    return NextResponse.json({ err: 'Failed to shorten URL' }, { status: 500 })
   }
}

