import { useState } from "react";

const ImageGallery = () => {
  const [imgURL, setImgURL] = useState("");

  const handleImgClick = (e) => {
    setImgURL(e.target.src);
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold">Image Gallery</h2>
      <p className=" mt-2 mb-6">Click on an image!</p>
      <div className="flex justify-center gap-8">
        <img
          src="/cat1.jpg"
          className="w-48 h-48 object-cover rounded-2xl shadow-2xl cursor-pointer"
          onClick={handleImgClick}
        />
        <img
          src="/cat2.jpg"
          className="w-48 h-48 object-cover rounded-2xl shadow-2xl cursor-pointer"
          onClick={handleImgClick}
        />
        <img
          src="/cat3.jpg"
          className="w-48 h-48 object-cover rounded-2xl shadow-2xl cursor-pointer"
          onClick={handleImgClick}
        />
        <img
          src="/cat4.jpg"
          className="w-48 h-48 object-cover rounded-2xl shadow-2xl cursor-pointer"
          onClick={handleImgClick}
        />
      </div>

      {imgURL.length > 0 && (
        <img
          src={imgURL}
          className="w-96 h-96 object-cover rounded-2xl shadow-2xl mx-auto my-10"
        />
      )}
    </section>
  );
};

export default ImageGallery;
