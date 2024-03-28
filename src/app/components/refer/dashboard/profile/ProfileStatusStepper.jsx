import React from 'react';

const ProfileStatusStepper = ({ status }) => {
    const steps = ["Sign Up", "Under Review", "Active"];

    const idx = steps.indexOf(status);
    return (
        <div className="flex flex-row justify-center items-center">
            {steps.map((step, index) => (
                <div key={index} className='flex items-center'>
                    {
                        idx < index &&
                        <div className='flex flex-col justify-center items-center lg:w-32'>
                            <span className={'size-7 lg:size-9 flex justify-center items-center flex-shrink-0 font-medium text-gray-800 rounded-full mb-3 bg-gray-100'}>
                                {index + 1}
                            </span>
                            <span className="text-white text-lg">{step}</span>
                        </div>
                    }
                    {
                        idx < index && index < 2 &&
                        <div className="ms-2 w-8 lg:w-32 h-1 bg-gray-500" />
                    }
                    {
                        idx == index &&
                        <div className='flex flex-col justify-center items-center lg:w-32'>
                            <span className={'size-9 lg:size-12 flex justify-center items-center flex-shrink-0 font-medium text-white rounded-full mb-3 bg-primary border-2 border-white'}>
                                {index + 1}
                            </span>
                            <span className="text-white text-lg">{step}</span>
                        </div>
                    }
                    {
                        idx == index && index < 2 &&
                        <div className="ms-2 w-8 lg:w-32 h-1 bg-gray-500" />
                    }
                    {
                        idx > index &&
                        <div className='flex flex-col justify-center items-center lg:w-32'>
                            <span className={'size-7 lg:size-9 flex justify-center items-center flex-shrink-0 font-medium text-white rounded-full mb-3 bg-primary'}>
                                {index + 1}
                            </span>
                            <span className="text-primary text-lg">{step}</span>
                        </div>
                    }
                    {
                        idx > index && index < 2 &&
                        <div className="ms-2 w-8 lg:w-32 h-1 bg-primary" />
                    }
                </div>
            ))
            }
        </div >
    );
};

export default ProfileStatusStepper;