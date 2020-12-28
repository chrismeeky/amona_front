import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../../constants/latest-posts";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageCarousel = () => {
  return (
    <div className="image-carousel">
      <ImageGallery items={images} sizes="object-fit">
        <figure className="image-carousel__price">iuhiubihbjhk</figure>
      </ImageGallery>
    </div>
  );
};

export default ImageCarousel;
