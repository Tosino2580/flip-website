import React, { useState, useEffect } from 'react';
import { Pictures } from '../../PictureData/Picture';
import Footer from '../component/Footer';

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 15;

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const indexOfFirstImage = (currentPage - 1) * imagesPerPage;
  const indexOfLastImage = indexOfFirstImage + imagesPerPage - 1;
  const currentImages = Pictures.slice(indexOfFirstImage, indexOfLastImage + 1);

  const totalPages = Math.ceil(Pictures.length / imagesPerPage);

  return (
    <div className='mt-30'>
      {/* Images */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-3 md:px-7'>
        {currentImages.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={`FLIP Pictures ${index}`}
              className='max-h-200 w-full rounded-md md:rounded-lg'
            />
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className='flex justify-center mt-6 space-x-2'>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
