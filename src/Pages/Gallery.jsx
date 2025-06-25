import React from 'react';
import { Pictures } from '../../PictureData/Picture';
import Footer from '../component/Footer';

function Gallery() {
  return (
    <div className='mt-30'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-3 md:px-7'>
      {Pictures.map((item, index)=>(
        <div key={index}>
          <div className=''>
            <img src={item.image} alt="FLIP 1.0 Pictures" className='max-h-200 w-full rounded-md md:rounded-lg' />
          </div>
        </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Gallery;
