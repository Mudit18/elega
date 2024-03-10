import { CheckArrowIconSolid } from '@/app/assets/icons/CheckArrowIconSolid';
import Loader from '@/app/components/common/Loader';
import { storage } from '@/app/firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Jobs() {
    const { data: session } = useSession();
    const { user } = session;

    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);

    const allowedTypes = ['application/pdf'];

    const filePath = 'resume/' + user.id + '.pdf';

    useEffect(() => {
        async function getFileUrl() {
            try {
                const fileRef = ref(storage, filePath);
                const url = await getDownloadURL(fileRef);
                setFileUrl(url);
            } catch (e) {
                console.log('Incorrect file path');
            }
        }
        getFileUrl();
    }, [user, file]);

    const handleButtonClick = async () => {
        try {
            const selectedFile = await promptForFile();
            if (selectedFile && allowedTypes.includes(selectedFile.type)) {
                setLoading(true);
                setFile(selectedFile);
                const storageRef = ref(storage, filePath);
                const uploadTask = uploadBytes(storageRef, selectedFile);

                await uploadTask;
                toast.success('File uploaded successfully!');
            } else {
                toast.error('Please upload a pdf');
            }
            setLoading(false);
            setFile(null);
        } catch (error) {
            toast.error('Error uploading file');
            console.error('Error selecting or uploading file: ', error.message);
            setLoading(false);
        }
    };

    const promptForFile = () => {
        return new Promise((resolve, reject) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf';
            input.onchange = () => {
                const selectedFile = input.files[0];
                resolve(selectedFile);
            };
            input.click();
        });
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center !bg-customDarkBg1">
            <div className="d-flex align-items-center justify-content-center w-full">
                <div className="card mb-0 pb-0 lg:px-8 lg:py-4 !bg-transparent !shadow-sm lg:w-1/2 flex justify-center items-center">
                    <div className="card-body px-4 !pb-0 flex justify-center flex-col items-center">
                        {
                            fileUrl &&
                            <div className='mb-5'>
                                <CheckArrowIconSolid />
                            </div>
                        }
                        {
                            !fileUrl
                                ? <h2 className="text-center text-white mb-4">Supercharge your career 🚀</h2>
                                : <h2 className="text-center text-white mb-4">File Uploaded Successfully</h2>
                        }
                        {
                            !fileUrl
                                ? <h5 className="!w-full text-center text-gray-500 mb-4">Drop your resume and catch the attention of top-tier companies. It&apos;s time to shine &#8208; let your skills speak volumes!&nbsp;</h5>
                                : <a target="_blank" rel="noopener noreferrer" className="!w-full text-xl text-center text-gray-500 mb-10" href={fileUrl}>{user.name} - Resume.pdf</a>
                        }
                        <button onClick={handleButtonClick} className="btn btn-primary w-100 py-8 fs-4 mt-0 rounded-2">Upload Resume</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
