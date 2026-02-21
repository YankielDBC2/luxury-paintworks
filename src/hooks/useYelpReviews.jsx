import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export function useYelpReviews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchYelpData() {
      try {
        const response = await fetch('/api/yelp');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchYelpData();
  }, []);

  return { data, loading, error };
}

export function YelpReviews({ data }) {
  if (!data) return null;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-4">
      {/* Yelp Rating Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <img 
          src="https://s3-media0.fl.yelpcdn.com/assets/srvz/yelp_design_web/yelp_bge_logo.svg" 
          alt="Yelp" 
          className="h-6"
        />
        <div className="flex items-center gap-1">
          {renderStars(data.rating)}
        </div>
        <span className="text-white font-bold">{data.rating}</span>
        <span className="text-blue-200">({data.review_count} review{data.review_count !== 1 ? 's' : ''})</span>
      </div>

      {/* Reviews */}
      {data.reviews && data.reviews.length > 0 ? (
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {data.reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                {review.user?.image_url ? (
                  <img 
                    src={review.user.image_url} 
                    alt={review.user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full flex items-center justify bg-blue-400-center">
                    <span className="text-white text-sm font-bold">
                      {review.user?.name?.[0] || '?'}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {review.user?.name || 'Anonymous'}
                  </p>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <span className="text-blue-300 text-xs">
                  {formatDate(review.time_created)}
                </span>
              </div>
              <p className="text-blue-100 text-sm line-clamp-3">{review.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-blue-200 py-4">
          <p>No reviews yet. Be the first to review us on Yelp!</p>
        </div>
      )}

      {/* Link to Yelp */}
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-blue-300 hover:text-white text-sm underline mt-2"
      >
        See all reviews on Yelp
      </a>
    </div>
  );
}