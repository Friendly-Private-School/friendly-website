import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {
    const handleClick = (event) => {
        if (event.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        selectedImg && (
            <div className="backdrop fixed inset-0 flex items-center justify-center z-50" onClick={handleClick}>
                <div className="modal-content  p-5 rounded-lg shadow-lg relative">
                    <img src={selectedImg} alt="Enlarged pic" className="w-full h-full object-cover rounded-lg" />
                    <button 
                        onClick={() => setSelectedImg(null)} 
                        className="absolute top-[10%] right-[5%] p-4 bg-red-500 text-white rounded-md"
                    >
                        X 
                    </button>
                </div>
            </div>
        )
    )
}

export default Modal;
