import React, { useEffect, useState } from "react";
import SearchResults from "../../Components/SearchResults/SearchResults";
import Searchbar from "../../Components/Searchbar/Searchbar";
import InputTextArea from "../../Components/InputTextArea/InputTextArea";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router";

export default function Chooser() {
  const [favPackageName, setFavPackageName] = useState("");
  const [favReason, setFavReason] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showError, setShowError] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchNPMPackages = async () => {
    if (searchInput !== "") {
      await fetch(`https://api.npms.io/v2/search?q=${searchInput}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
          return;
        });
    }
  };

  const addNewFavorite = () => {
    if (!localStorage.getItem("fav_packages")) {
      localStorage.setItem("fav_packages", JSON.stringify([]));
    }
    let fav_packages = JSON.parse(
      localStorage?.getItem("fav_packages") as string
    );
    fav_packages.push({ favPackageName: favPackageName, favReason: favReason });
    localStorage.setItem("fav_packages", JSON.stringify(fav_packages));
  };

  useEffect(() => {
    fetchNPMPackages();
  }, [searchInput]);

  return (
    <div className="w-screen h-screen px-32 py-16">
      <Searchbar input={searchInput} setInput={setSearchInput} />
      {showError ? (
        <label id={"error_msg"} className="Error text-red-600 ">
          Please select a package and Enter reason for linking it.
        </label>
      ) : null}
      <SearchResults
        resultsToDisplay={searchResults}
        setFavPackageName={setFavPackageName}
      />
      <InputTextArea setFavReason={setFavReason} />
      <CustomButton
        label={"Submit"}
        floatRight
        callback={() => {
          if (favPackageName !== "" && favReason !== "") {
            addNewFavorite();
            navigate("/");
          }
          setShowError(true);
        }}
      />
    </div>
  );
}
