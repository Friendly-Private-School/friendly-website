import React, {useState, useEffect} from 'react';
import {storage} from '../../firebase/config';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
import Modal from './Modal';

const GalleryNew = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    //const [loading, setLoading] = useState(true);
    const imageListRef = ref(storage, 'images/')
    const uploadImage = () => {
        if (imageUpload == null) return;
        const timestamp = Date.now();
        const imageRef = ref(storage, `images/${timestamp}_${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            
            window.alert('Image successfully uploaded, thank you!')
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((response) =>{
            const promises = response.items.map((item) => getDownloadURL(item));
            Promise.all(promises).then((urls) => {
                const sortedUrls = urls.sort((a, b) => b.localeCompare(a));
                setImageList(sortedUrls);
                //setLoading(false)
            })
        })
    }, [])
  return (
    <>

    {/* <div className='w-full bg-slate-700 flex gap-4 pl-20'>
        <button className='bg-white px-4 py-2'>Top</button>
        <button className='bg-white px-4 py-2'>Swakopmund Tour 2023</button>
        <button className='bg-white px-4 py-2'>Sports</button>
        <button className='bg-white px-4 py-2'>Other</button>
    </div> */}

    <div className='w-full h-auto flex items-center flex-col bg-gray-300'>
        {/* <label className=''>
        <input 
            type="file" 
            onClick={uploadImage}
            onChange={(event) => 
            {setImageUpload(event.target.files[0])}}
            className=""
        />
        <span className='inline-block uppercase text-md'>
            
                + Upload
            
        </span>
        </label> */}
        

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageList.map((url, index) =>{
                return (
                    <img 
                        alt='Not display/loaded'
                        key={index} 
                        src={url}
                        onClick={() => {
                            setSelectedImg(url);
                        }} 
                        className='w-[90%] m-[10px] rounded-md shadow-lg cursor-pointer' 
                    />
                )
            })}
        </div>
        
        
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}


    </div>
    </>
  )
}

export default GalleryNew