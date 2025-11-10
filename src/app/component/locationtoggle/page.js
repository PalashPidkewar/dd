'use client';
import { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function LocationToggle() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true);

    // 2 second baad auto close
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <div
      className="fixed top-1/2 left-3 transform -translate-y-1/2 flex items-center z-50"
      style={{ transition: 'all 0.4s ease' }}
    >
      {/* Transparent Arrow Button */}
      <button
        onClick={handleToggle}
        className="p-3 rounded-r-full hover:bg-gray-100/20 transition-all translate-x-[-50%]"
        title="Show Location"
      >
        <MdKeyboardDoubleArrowRight
          className={`text-3xl text-blue-500 drop-shadow-md transform transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Location Icon (slides in when open) */}
      <div
        className={`transition-all duration-500 flex items-center ${
          open
            ? 'opacity-100 translate-x-2'
            : 'opacity-0 -translate-x-10 pointer-events-none'
        }`}
      >
        <Link
          href="https://www.google.com/maps/place/789R%2B2G+Path+Logicity,+Jakkasandra,+Karnataka+562132/data=!4m2!3m1!1s0x3bb1d7001bb4fea7:0x186b4a898cd0e08d?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjQxLjYYACCenQoqogEsOTQyNjc3MjcsOTQyNzU0MDcsOTQyOTIxOTUsOTQyODQ0OTAsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksNDcwODQzOTMsOTQyMTMyMDBCAklO&skid=01dc12cb-dde0-40a2-a695-0f6769228e3e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition-all">
            <FaMapMarkerAlt className="text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}
