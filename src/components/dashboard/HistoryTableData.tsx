"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import imgTwo from "../../../public/assets/img/svg-icon/014-artwork.svg";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import { History } from "@/interFace/interFace";
interface propsType {
  history_data: History;
  index: number;
}
const HistoryTableData = ({ history_data, index }: propsType) => {
  const { date, spread, type, summary } =
    history_data;
  const id = index;
    useFlashlightAnimation();
  return (
    <div className="history-list-row light-effect">
      <div className="history-list-cell history-list-cell-sl">
        <span>{id.toString().padStart(2, "0")}</span>
      </div>
      <div className="history-list-cell history-list-cell-owner">{date}</div>
      <div className="history-list-cell history-list-cell-owner">{spread}</div>
      <div className="history-list-cell history-list-cell-owner">{type}</div>
      <div className="history-list-cell history-list-cell-owner">{summary}</div>
    </div>
  );
};

export default HistoryTableData;
