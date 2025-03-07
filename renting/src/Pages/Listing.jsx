import { EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShareAlt,
} from 'react-icons/fa';


export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(false);
  

  const toggleDescription = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://priyanshurenting.onrender.com/api/listing/get/${params.listingId}`);
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
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper modules={[EffectFade]} effect="fade" navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className='h-[550px]'
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>

          
          
            
            <FaShareAlt
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />

          </div>
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
              Link copied!
            </p>
          )}
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-2'>
            <div className='flex flex-col gap-0'>
            <p className='text-2xl font-semibold'>
              {listing.name} - ₹{' '}
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-US')
                : listing.regularPrice.toLocaleString('en-US')}
              {listing.type === 'rent' && ' per night'}
            </p>
            <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
              <FaMapMarkerAlt className='text-green-700' />
              {listing.address}
            </p>
            </div>
            <div className='flex gap-4'>
              <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                {listing.type === 'rent' ? 'Sale' : 'Sale'}
              </p>
                <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                    Book now and get 10% off
                </p>
                
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${listing.address}`}
                    target='_blank'
                    rel='noreferrer'
                    className='bg-slate-500 text-white px-4 py-2 rounded-md'
                >
                    <FaMapMarkedAlt className='inline-block mr-2' />
                    View on map
                </a>
           
              </div>
              {listing.offer && (
                <div className=" flex gap-2">
                   <p className='bg-green-900 w-full max-w-[200px] text-white text-center  rounded-md'>
                   <span>Regular Price</span> ₹{listing.regularPrice} 
                    </p>
                    <p className='bg-green-900 w-full max-w-[200px] text-white text-center rounded-md'>
                     <span>Discounted Price </span>
                    ₹{listing.discountPrice} 
                    </p>
                <p className=' text-black text-center p-1 rounded-md'>
                  ₹{+listing.regularPrice - +listing.discountPrice} OFF
                </p>
                
                </div>
              )}
            <div className='flex gap-0 align-baseline'>
            <span className='font-semibold text-black overflow-hidden'>Description - </span>
              <textarea
                className='w-[700px] h-[130px] max-h-[150px] rounded-lg p-2 bg-transparent '
                value={listing.description}
                readOnly
                >
                
                </textarea>
            </div>
  
            <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaBed className='text-lg' />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaBath className='text-lg' />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaParking className='text-lg' />
                {listing.parking ? 'Parking spot' : 'No Parking'}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaChair className='text-lg' />
                {listing.furnished ? 'Furnished' : 'Unfurnished'}
              </li>
            </ul>

            <button className=' bg-gray-500 h-[40px] rounded-lg mt-[30px] text-white font-bold' >
                Book now
            </button>
           
          </div>

          <div>
         
          </div>
        </div>
      )}
    </main>
  );
}