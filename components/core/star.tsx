import React, { useState } from 'react';
import Staricon from '../icons/starticon';

interface StarRatingProps {
  totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleStarClick = (star: number) => {
    setSelectedStars(star);
  };

  return (
    <div className=' flex '>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className=' w-[60px]'
            style={{ cursor: 'pointer' }}
            onClick={() => handleStarClick(starValue)}
          >
            {starValue <= selectedStars ? <Staricon h={30} w={30} c='#f7db32'/> : <Staricon h={30} w={30} c='#a6a3b1'/>}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
