import React from "react";
import Delete from "../../assets/Icons/Delete";

export default function PackageTable({ ...props }) {

  return (
    <table className="mt-24 border-2 border-[#c3cfd9] w-full text-left pl-3">
      <tr className="border-2 border-[#c3cfd9]">
        <th className="border-2 border-[#c3cfd9] pl-3 py-2">Name</th>
        <th className="w-2/5 border-2 border-[#c3cfd9] pl-3 py-2">Actions</th>
      </tr>
      {props?.favData && props?.favData.length > 0
        ? props.favData.map((favElement: any) => {
            return (
              <tr>
                <td className="border-2 border-[#c3cfd9] pl-3 py-2">
                  {favElement.favPackageName}
                </td>
                <td className="border-2 border-[#c3cfd9] pl-5 py-2">
                  <Delete
                    callback={() => {
                      props.setShowModal(true);
                      props.getPackageToDelete(favElement);
                    }}
                  />
                </td>
              </tr>
            );
          })
        : null}
    </table>
  );
}
