export const YELP_API_KEY = '3t8kfz0uXaSqyVBW_PoDTzhKrdSx_vpeIWsoXHrZB3O-YSHVkqcwHxd9D1HbvJw8sl9zp3LLb8KE1zvBOkrVsqMCIxc13cjahC-haMVVZZWYCIkWMeJmBSrwbUGWaXYx';
export const BUSINESS_ID = 'EJdZdVtvDOe1fbt59VES5Q';

export async function fetchYelpData() {
  // Fetch business details
  const businessRes = await fetch(`https://api.yelp.com/v3/businesses/${BUSINESS_ID}`, {
    headers: {
      'Authorization': `Bearer ${YELP_API_KEY}`,
      'Accept': 'application/json'
    }
  });

  if (!businessRes.ok) {
    throw new Error('Failed to fetch business data');
  }

  const business = await businessRes.json();

  // Fetch reviews
  const reviewsRes = await fetch(`https://api.yelp.com/v3/businesses/${BUSINESS_ID}/reviews?limit=10`, {
    headers: {
      'Authorization': `Bearer ${YELP_API_KEY}`,
      'Accept': 'application/json'
    }
  });

  let reviews = [];
  if (reviewsRes.ok) {
    const reviewsData = await reviewsRes.json();
    reviews = reviewsData.reviews || [];
  }

  return {
    name: business.name,
    rating: business.rating,
    review_count: business.review_count,
    url: business.url,
    image_url: business.image_url,
    phone: business.display_phone,
    location: business.location?.display_address?.[0],
    city: business.location?.city,
    reviews: reviews.map(r => ({
      id: r.id,
      text: r.text,
      rating: r.rating,
      time_created: r.time_created,
      user: {
        name: r.user?.name,
        image_url: r.user?.image_url
      }
    }))
  };
}