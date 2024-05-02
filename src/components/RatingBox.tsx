type Rating = {
  rating: number;
  numReviews: number;
};

const RatingBox = ({ rating, numReviews }: Rating) => {
  return (
    <div className="flex itemx-center gap-2">
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 ${
            rating >= 1 ? "bg-orange-400" : "bg-slate-400"
          }`}
          disabled={true}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 ${
            rating >= 2 ? "bg-orange-400" : "bg-slate-400"
          }`}
          disabled={true}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 ${
            rating >= 3 ? "bg-orange-400" : "bg-slate-400"
          }`}
          disabled={true}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 ${
            rating >= 4 ? "bg-orange-400" : "bg-slate-400"
          }`}
          disabled={true}
        />
        <input
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 ${
            rating >= 5 ? "bg-orange-400" : "bg-slate-400"
          }`}
          disabled={true}
        />
      </div>

      <span className="text-orange-400">{numReviews} reviews</span>
    </div>
  );
};

export default RatingBox;
