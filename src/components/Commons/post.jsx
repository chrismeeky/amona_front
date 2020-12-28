import React from "react";
import StarRatings from "react-star-ratings";
const Post = ({ index, post }) => {
  return (
    <div className="latest-ads__latest-ads__latest-ad" key={index}>
      {post.promotion && (
        <figure className="latest-ads__latest-ads__latest-ad__badge">
          {post.promotion.type}
        </figure>
      )}
      <figure className="latest-ads__latest-ads__latest-ad__picture">
        <img src={post.picture} alt={post.title} />
      </figure>
      <h3 className="latest-ads__latest-ads__latest-ad__title">{post.title}</h3>
      <div className="latest-ads__latest-ads__latest-ad__details">
        <span className="latest-ads__latest-ads__latest-ad__details__time">
          <i className="fa fa-clock"></i> {post.created_at}
        </span>
        <span className="latest-ads__latest-ads__latest-ad__details__model">
          <i className="fa fa-car"></i> {post.model}
        </span>
       
      </div>
      <div className="latest-ads__latest-ads__latest-ad__details">
        <span className="latest-ads__latest-ads__latest-ad__details__distance">
          {`${post.distance} km away`}
        </span>
        <span className="latest-ads__latest-ads__latest-ad__details__location">
          <i className="fa fa-map-marker"></i> {post.location}
        </span>
      </div>
      <div className="latest-ads__latest-ads__latest-ad__details">
        <span className="latest-ads__latest-ads__latest-ad__details__rating">
          <StarRatings
            rating={post.rating}
            starDimension="1.5rem"
            starSpacing=".1rem"
            starRatedColor="gold"
          />
        </span>
        <span className="latest-ads__latest-ads__latest-ad__details__reviews">
          {post.reviews} {post.reviews > 1 ? "reviews" : "review"}
        </span>
      </div>
      <div className="latest-ads__latest-ads__latest-ad__details latest-ads__latest-ads__latest-ad__details--down">
        <span className="latest-ads__latest-ads__latest-ad__details__distance">
          <div className="save">
            <i className="fa fa-heart"></i>
            <span>Save</span>
          </div>
        </span>
        <span className="latest-ads__latest-ads__latest-ad__details__price">
          {`₦${post.price}`}
        </span>
      </div>
    </div>
  );
};

export default Post;
