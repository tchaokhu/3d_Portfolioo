import React from "react";
import { styles } from "../style";
import { phone, mail } from "../assets";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX}
      text-[18px] pb-[20px]  bg-primary  w-full flex justify-between items-center max-w-7xl mx-auto`}
    >  
      <h2 className="text-white text-[20px] xs:text-[30px]">Contact Information</h2>
      <div className=" list-none flex-row gap-10 items-center">
        <p className=" text-[10px] xs:text-[20px] text-secondary gap-20 w-full">
          📞: 0876706436<br/> 📧: nnutthanapon@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
