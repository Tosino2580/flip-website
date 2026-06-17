import React, { useState, useEffect } from 'react';
import { Pictures } from '../../../PictureData/Picture2';
import Footer from '../../component/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function Flip2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeImage, setActiveImage] = useState(null);
  const imagesPerPage = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Bind Escape key to close the lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const indexOfFirstImage = (currentPage - 1) * imagesPerPage;
  const indexOfLastImage = indexOfFirstImage + imagesPerPage - 1;
  const currentImages = Pictures.slice(indexOfFirstImage, indexOfLastImage + 1);

  const totalPages = Math.ceil(Pictures.length / imagesPerPage);

  return (
    <div className="pt-36 md:pt-44 bg-cinema-dark text-gray-300 min-h-screen font-sans">
      <div className="max-w-[1450px] w-11/12 md:w-4/5 mx-auto pb-20 space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <span className="text-cinema-gold text-xs font-bold uppercase tracking-widest block mb-3">
            Visual Memories
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-serif text-white tracking-tight">
            FLIP 2.0 Gallery
          </h1>
          <p className="text-gray-400 mt-3 max-w-md mx-auto text-xs md:text-sm">
            Relive the magical outdoor moments, live performances, and community connections from our second edition. Click any image to view it full screen.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentImages.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setActiveImage(item.image)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-cinema-gold/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-zoom-in group"
            >
              <img
                src={item.image}
                alt={`FLIP 2.0 Atmosphere ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-cinema-gold border border-cinema-gold/20 shadow-lg scale-95 group-hover:scale-100 transition-transform duration-300">
                  Expand View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 pt-6">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                  currentPage === index + 1
                    ? 'bg-cinema-gold text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[999] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white hover:text-cinema-gold transition-colors duration-300 text-3xl font-light focus:outline-none"
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Expanded View"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Flip2;
