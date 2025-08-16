"use client"
import React, { useState } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import Image from "next/image";
import Pagination from "@/utils/Pagination";
import Link from "next/link";
import { dailyReflectionReadings } from "@/data/dailyReflectionReadings";

interface PastDailyReadingsProps {
  onViewFullReading?: () => void;
}


const PastDailyReadingsSection: React.FC<PastDailyReadingsProps> = ({ onViewFullReading }) => {
  useFlashlightAnimation();

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const dataSource = dailyReflectionReadings;
  const totalPages = Math.ceil(dataSource.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentData = dataSource.slice(startIndex, startIndex + perPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 mt-4">Past Daily Readings</h2>
      <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
        <div className="placed-bids-wrapper">
          {currentData.map((item, idx) => (
            <div className="single-bid light-effect mb-4" key={idx}>
              <div className="creator flex gap-4">
                <div className="profile-img pos-rel">
                  <Link href="/creators">
                    <Image
                      width={90}
                      height={90}
                      src={`/cards/${(idx % 10) + 1}.jpg`}
                      alt="situation-card"
                      className="rounded-md"
                    />
                  </Link>
                </div>
                <div className="creator-name-id">
                  <h4 className="artist-name font-semibold text-white">
                    <Link href="/creators">{item.title}</Link>
                  </h4>
                  <div className="artist-id text-sm text-gray-300">{item.desc}</div>
                  <div className="bid-date-time text-xs mt-2 text-purple-200">
                    <span className="me-2">{item.date}  </span>  |  <span className="ms-2">  {item.time}</span>
                  </div>
                </div>
              </div>
              <div className="bid-pricing mt-2 md:mt-0 flex justify-end">
                <button className="border border-white px-3 py-1 rounded text-white text-sm" onClick={onViewFullReading}>
                  View Full Reading
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="row wow fadeInUp">
              <div className="col-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
      </div>
    </>
  );
};

export default PastDailyReadingsSection;
