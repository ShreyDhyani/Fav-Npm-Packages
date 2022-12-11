import React, { useEffect, useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import PackageTable from "../../Components/PackageTable/PackageTable";
import { useNavigate } from "react-router";
import Modal from "../../Components/Modal/modal";

const NoReultElement = ({ ...props }) => {
  return (
    <div className="border-[3px] border-[#c3cfd9] mt-20 h-72 pt-16 rounded-sm flex flex-col justify-center items-center gap-3">
      <h3 className="font-bold text-gray-600">
        You don't have any favs yet. Please add
      </h3>
      <CustomButton
        label={"Add Fav"}
        color={"bg-[#6558f5]"}
        callback={() => {
          props.navigate("/choose");
        }}
      />
    </div>
  );
};

export default function Welcome() {
  const [valuesExists, setValuesExists] = useState<boolean>(false);
  const [favData, setFavData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [packageToDelete, setPackageToDelete] = useState({});
  const navigate = useNavigate();

  const getDataFromLocalStorage = () => {
    if (
      localStorage.getItem("fav_packages") &&
      localStorage.getItem("fav_packages") !== "[]"
    ) {
      const favData = JSON.parse(
        localStorage.getItem("fav_packages") as string
      );
      setValuesExists(true);
      setFavData([...favData]);
    }
  };

  const deletFavPackage = () => {
    let tempFavPackagesArray = favData;
    tempFavPackagesArray?.splice(
      tempFavPackagesArray?.indexOf(packageToDelete),
      1
    );
    setFavData([...(tempFavPackagesArray as any[])]);
    localStorage.setItem("fav_packages", JSON.stringify(tempFavPackagesArray));
    setPackageToDelete({});
    if (tempFavPackagesArray?.length === 0) {
      setValuesExists(false);
    }
  };

  const getPackageToDelete = (packageObj: any) => {
    setPackageToDelete({ ...packageObj });
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return (
    <div className="Welcome relative w-screen h-screen px-32 py-16">
      {showModal ? (
        <Modal setShowModal={setShowModal} deletFavPackage={deletFavPackage} />
      ) : null}

      <div className="flex justify-between">
        <h3 className="font-semibold text-2xl">
          Welcome to Favorite NPM Packages
        </h3>
        <CustomButton
          label={"Add Fav"}
          color={"bg-[#6558f5]"}
          callback={() => {
            navigate("/choose");
          }}
        />
      </div>
      {valuesExists ? (
        <PackageTable
          favData={favData}
          setShowModal={setShowModal}
          getPackageToDelete={getPackageToDelete}
        />
      ) : (
        <NoReultElement navigate={navigate} />
      )}
    </div>
  );
}
