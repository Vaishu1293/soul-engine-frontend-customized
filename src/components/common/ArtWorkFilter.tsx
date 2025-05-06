import React from 'react';
import NiceSelect from "@/elements/niceSelect/NiceSelect";
import { Price, SaleData, Status, categoryData } from "@/data/nice-select-data";

const ArtWorkFilter = () => {
    const selectHandler = () => { };
    return (
        <>
             <form action="#" className="artwork-filter-row mb-40">
              <div className="">
                <NiceSelect
                  options={SaleData}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="s-t-select"
                  className="sale-type-select"
                />
              </div>
              <div className="">
                <NiceSelect
                  options={categoryData}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="cat-select"
                  className="category-select"
                />
              </div>
              <div className="">
                <NiceSelect
                  options={Status}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="st-select"
                  className="status-select"
                />
              </div>
              <div className="">
                <NiceSelect
                  options={Price}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="pr-select"
                  className="price-select"
                />
              </div>
            </form>
        </>
    );
};

export default ArtWorkFilter;