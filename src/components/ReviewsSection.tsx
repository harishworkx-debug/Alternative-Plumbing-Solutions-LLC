import { useState } from 'react';
import { Star, ExternalLink, CheckCircle2, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react';
import { customerReviews, reviewsStats, CustomerReview } from '@/data/reviews';

type CategoryFilter = 'all' | 'water-heater' | 'pipe-leak' | 'drain-sewer' | 'installation';

interface ReviewsSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function ReviewsSection({
  className = '',
  title = 'Verified Customer Reviews',
  subtitle = 'See what Pearland and Greater Houston homeowners and businesses say about Alternative Plumbing Solutions.',
}: ReviewsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredReviews = customerReviews.filter((r) => {
    if (activeCategory === 'all') return true;
    return r.category === activeCategory;
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  return (
    <section className={`py-20 lg:py-28 ${className}`}>
      <div className="container-base">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Real Google Feedback</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-navy-600 text-pretty">{subtitle}</p>
        </div>

        {/* Google Scorecard Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-between gap-8 border-b border-navy-100 pb-8 lg:flex-row">
            {/* Left: Overall Score */}
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-lg shadow-navy-900/20">
                <span className="font-display text-3xl font-extrabold">{reviewsStats.rating.toFixed(1)}</span>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-navy-100 text-navy-200'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-display text-lg font-bold text-navy-900">4.0 out of 5</span>
                </div>
                <p className="mt-1 flex items-center justify-center gap-2 text-sm text-navy-600 sm:justify-start">
                  <span className="font-semibold text-navy-900">{reviewsStats.totalReviews} Customer Reviews</span>
                  <span className="text-navy-300">•</span>
                  <span>Verified Google Business Profile</span>
                </p>
              </div>
            </div>

            {/* Right: CTA to Write a Review & View on Google */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={reviewsStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy flex items-center gap-2"
              >
                <span>Write a Review</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={reviewsStats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
              >
                <span>View on Google</span>
                <ExternalLink className="h-4 w-4 text-navy-400" />
              </a>
            </div>
          </div>

          {/* Highlights Breakdown Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-navy-400">Popular Topics:</span>
            {reviewsStats.highlights.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-navy-100"
              >
                <ThumbsUp className="h-3 w-3 text-aqua-600" />
                <span>{h.label}</span>
                <span className="font-semibold text-aqua-700">({h.count})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all' as CategoryFilter, label: 'All Reviews' },
            { id: 'water-heater' as CategoryFilter, label: 'Water Heaters' },
            { id: 'pipe-leak' as CategoryFilter, label: 'Freeze & Pipe Leaks' },
            { id: 'drain-sewer' as CategoryFilter, label: 'Drain & Sewer' },
            { id: 'installation' as CategoryFilter, label: 'Fixtures & Showers' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(6);
              }}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-navy-900 text-white shadow-md shadow-navy-900/10'
                  : 'bg-white text-navy-700 hover:bg-aqua-50 hover:text-navy-900 ring-1 ring-navy-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Show More / Show Less */}
        {filteredReviews.length > 6 && (
          <div className="mt-12 text-center">
            {visibleCount < filteredReviews.length ? (
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredReviews.length))}
                className="btn-navy"
              >
                Show More Reviews ({filteredReviews.length - visibleCount} more)
              </button>
            ) : (
              <button onClick={() => setVisibleCount(6)} className="btn-ghost">
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: CustomerReview }) {
  const initial = review.author.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div>
        {/* Author Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-aqua-100 font-display text-base font-bold text-aqua-800">
              {initial}
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-navy-900">{review.author}</h3>
              <div className="flex items-center gap-2 text-xs text-navy-500">
                {review.isLocalGuide && (
                  <span className="inline-flex items-center gap-0.5 font-semibold text-amber-600">
                    <ShieldCheck className="h-3 w-3" />
                    Local Guide
                  </span>
                )}
                {review.reviewCount && <span>{review.reviewCount} reviews</span>}
              </div>
            </div>
          </div>
          <span className="text-xs text-navy-400">{review.relativeTime}</span>
        </div>

        {/* Star Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Review Text */}
        <p className="mt-3 text-sm text-navy-700 leading-relaxed text-pretty">
          "{review.text}"
        </p>
      </div>

      {/* Footer Tags */}
      <div className="mt-4 pt-4 border-t border-navy-50">
        {review.services && review.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {review.services.map((svc) => (
              <span
                key={svc}
                className="inline-flex items-center gap-1 rounded-md bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700"
              >
                <Wrench className="h-3 w-3 text-aqua-600" />
                {svc}
              </span>
            ))}
          </div>
        )}
        {review.positiveTags && review.positiveTags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {review.positiveTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-aqua-50/70 px-2 py-0.5 text-[11px] font-medium text-aqua-800"
              >
                <CheckCircle2 className="h-2.5 w-2.5 text-aqua-600" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

