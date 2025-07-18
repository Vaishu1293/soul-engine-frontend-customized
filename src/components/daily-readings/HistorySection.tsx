"use client"
import React, { useState } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import Pagination from "@/utils/Pagination";
import HistoryTableData from "./HistoryTableData";
import HistoryTableTitle from "./HistoryTableTitle";
import { historyData } from "@/data/historyData";


const HistorySection = () => {
  useFlashlightAnimation();

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const dataSource = historyData;
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
        <h2 className="text-2xl font-bold mb-6 mt-4">History</h2>
        <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
          <div className="activity-wrapper-actions activity-wrapper-all mb-30">
            <div className="history-list-container wow fadeInUp">
              <div className="history-list-wrapper mb-20">
                <HistoryTableTitle />
                <div className="history-list-items">
                  {currentData.map((data, i) => {
                    const serial = startIndex + i + 1;

                    return (
                      <div key={serial}>
                        <HistoryTableData index={serial} history_data={data} />
                      </div>
                    );
                  })}

                </div>
              </div>
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
        </div>
    </>
  );
};

export default HistorySection;
