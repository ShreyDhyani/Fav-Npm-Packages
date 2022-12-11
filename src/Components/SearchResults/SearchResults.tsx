import React, { useEffect, useState } from "react";

interface SearchResultsProps {
  resultsToDisplay: any[];
  selectedPackage: any;
  setSelectedPackage: any;
}

const SearchResults = (props: any) => {
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      <h2 className="font-bold text-sm text-[#4b5c6b] my-5">Results</h2>
      <div className="h-32 overflow-scroll">
        <form className="flex flex-col">
          {props.resultsToDisplay && props?.resultsToDisplay?.length > 0 ? (
            props.resultsToDisplay.map((resultElement: any, index: any) => {
              return (
                <div key={resultElement.package.name}>
                  <input
                    className="mb-2"
                    type="radio"
                    id={"radio" + index}
                    name="radio-group"
                    value={resultElement.package.name}
                    onChange={(e) => {
                      props.setFavPackageName(e.target.value);
                    }}
                  />
                  <label className="pl-3">{resultElement.package.name}</label>
                </div>
              );
            })
          ) : (
            <div className="w-full h-full flex items-center justify-center align-middle">
              <label>No Matching NPM Package Found!!</label>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchResults;
