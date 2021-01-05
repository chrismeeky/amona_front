import React from "react";
const Details = () => {
  return (
    <>
      <div className="register__main__heading">
        <i class="fas fa-camera"></i> <h1 className="h1">Photos</h1>
      </div>

      <form action="" className="form form--new-ad form__pictures">
        <h2 className="h2 j-s-start">Pictures</h2>
        <div className="form__files m-t-2">
          <div className="form__files__drag-area">
            <p>Drag & drop files here … </p>
            <p>(or click to select files)</p>
          </div>
        </div>
        <button className="form__browse">
          <i class="far fa-folder-open"></i> Browse
        </button>
        <p className="m-t-1 j-s-center">
          Add up to 10 pictures. Use real pictures of your product, not
          catalogs.{" "}
        </p>
        <hr />
        <button className="form__next">Next >></button>
      </form>
    </>
  );
};

export default Details;
