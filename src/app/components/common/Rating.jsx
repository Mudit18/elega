import React from 'react';
import { useState } from 'react';

const Rating = ({ initialRating = 0, maxRating = 5, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);

    const handleClick = (newRating) => {
        setRating(newRating);
        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div className="flex items-center pt-1">
            {[...Array(maxRating)].map((_, index) => (
                <button
                    key={index}
                    className={`text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mx-1 focus:outline-none ${index + 1 <= rating ? 'bg-[#5D87FF] text-white' : 'bg-white text-[#5D87FF]'
                        }`}
                    onClick={() => handleClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Rating;