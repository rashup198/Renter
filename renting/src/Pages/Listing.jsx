import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ClipLoader from "react-spinners/ClipLoader";
import { BiSolidError } from "react-icons/bi";
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { EffectFade } from 'swiper/modules';

const Listing = () => {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const params = useParams()
    SwiperCore.use([Navigation]);
    const [color, setColor] = useState("#000000");
    
    useEffect(() => {
        const fetchListing = async () => {
          try {
            setLoading(true);
            const res = await fetch(`/api/listing/get/${params.listingId}`);
            const data = await res.json();
            if (data.success === false) {
              setError(true);
              setLoading(false);
              return;
            }
            setListing(data);
            setLoading(false);
            setError(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchListing();
      }, [params.listingId]);
    

  return (
    <main>
      {
         loading && <div className=' flex justify-center items-center text-center my-7 text-2xl'>
        <ClipLoader
         color={color}
         loading={loading}
         size={70}
         aria-label="Loading Spinner"
         data-testid="loader"
       /></div>
      }
      {
        error && <div className='text-4xl flex justify-center items-center mt-[250px] gap-4 text-center my-7'>Something went wrong <BiSolidError></BiSolidError></div>
      }

      {listing && !loading && !error && (

        <div className="">

        <Swiper modules={[EffectFade]} effect="fade" navigation>
        {listing.imageUrls.map((url) =>  
          <SwiperSlide key={url}>
            <div className="h-[550px] object-fit" style={{background:`url(${url}) center no-repeat`, backgroundSize:'cover'}}>

            </div>
          </SwiperSlide>
        )}
        </Swiper>

        </div>

      

    )}
    </main>
  )
}

export default Listing
