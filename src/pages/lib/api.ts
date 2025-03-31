
interface Ad {
  id: number;
  title: string;
  description: string;
}

export async function getAds(): Promise<Ad[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/web/ads`); 
    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch (err) {
    console.error('Failed to fetch ads', err);
    return [];
  }
}



export async function getProducts() {


  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/web/products`);
  const data = await response.json();
  console.log(data,'ssss')
  return data;
}
