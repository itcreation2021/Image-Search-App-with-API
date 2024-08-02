import React, { useContext } from "react";
import ImageItem from "./ImageItem";
import { ImageContext } from "../contexts/ImageContextProvider";
import LoadingSkeleton from './LoadingSkeleton'

const ImageList = () => {
  const { images, page, setPage,searchTitle,loading } = useContext(ImageContext);

  return (
    <div className=" my-10">
      {searchTitle && (
        <h2 className=" text-2xl font-bold mb-10 text-center">
          Showing results for "{searchTitle}"
        </h2>
      )}

      {loading ? (
        <LoadingSkeleton/>
      ): (
          <>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
        {images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>

      {images.length > 0 && (
        <div className=" flex justify-center mt-4">
          <button
            onClick={() => setPage(page + 1)}
            className=" bg-slate-500 text-white rounded px-4 py-2"
          >
            Load More
          </button>
        </div>
      )}</>
      )}
      
    </div>
  );
};

export default ImageList;
