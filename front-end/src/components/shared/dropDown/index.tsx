import { useState } from "react";
import { DropDownListProps } from "./types";

import "./styles.scss";

export default function DropDown({ dropDownItems, setSelectRole }: any) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<Boolean>(false);
  const [selectedRole, setSelectedRole] = useState<String>("Select role");

  const dropItemsList = dropDownItems;

  const handleSelectRole = (itemName: string) => {
    setSelectRole(itemName);
    setSelectedRole(itemName);
  };

  return (
    <div
      className={`drop_down_box ${isOpenDropDown ? "drop_down_active" : ""}`}
      onClick={() => setIsOpenDropDown(!isOpenDropDown)}
    >
      <p>{selectedRole}</p>
      <div
        className={`drop_bottom ${isOpenDropDown ? "drop_bottom_active" : ""}`}
        style={{
          height: `${
            isOpenDropDown ? dropItemsList.length * 32 + "px" : "0px"
          }`,
        }}
      >
        {dropItemsList.map((dropItem: any, index: any) => (
          <p key={index} onClick={() => handleSelectRole(dropItem.itemName)}>
            {dropItem.itemName}
          </p>
        ))}
      </div>
    </div>
  );
}
