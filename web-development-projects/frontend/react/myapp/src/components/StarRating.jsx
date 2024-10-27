import React, { useState } from "react";
import Star from './Star';

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(3);
    const createArray = (length) => [...Array(length)];

   const handleSelect = (id) => {
        if (id + 1 === selectedStars) {
            // If the selected star is clicked again, reset the rating
            setSelectedStars(0);
        } else {
            // Set the rating to the clicked star
            setSelectedStars(id + 1);
        }
    }
    

    return (
       <>
         <div className="star-rating">
            {createArray(totalStars).map((n, i) => (
                <Star key={i} id={i} selected={selectedStars > i} onSelect={() => handleSelect(i)}/>
            ))}
        </div>
        <p className="output">{selectedStars} of {totalStars}</p>
       </>
    );
}