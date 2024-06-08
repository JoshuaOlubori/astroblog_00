import React from 'react';
import BrutalCard from "@components/generic/MyCard";// Assuming Brutal UI components are accessible
// import { getImageSrc } from '../utils/getImageSrc'; // Assuming getImageSrc function exists

// interface Props {
//   title: string;
//   imgSrc: string; // Assuming imgSrc is a string path
//   imgAlt: string;
//   description: string;
//   children?: React.ReactNode; // Optional content for the slot
// }

const SummaryCard = ({ title, imgAlt, imgSrc, description, children }) => {
  // const imageUrl = getImageSrc(imgSrc); // Assuming getImageSrc handles image path logic

  return (
    <BrutalCard color="white">
      <h3>{title}</h3>
      <div className="rounded-lg border-3 border-black my-4 h-56">
        <img src={imgSrc} alt={imgAlt} className="rounded h-full w-full object-cover" />
      </div>
      <p>{description}</p>
      {children}
    </BrutalCard>
  );
};

export default SummaryCard;
