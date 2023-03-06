import React, { useState } from 'react'

function ImgUploader({ setPopupImgUploader, setImage, image }) {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(e)
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    setPopupImgUploader(false);
    console.log('submitting')
    e.preventDefault();
    if (!previewSource) return;
    const reader = new FileReader();
    setImage(previewSource);
    console.log(previewSource)
  }




  return (
    <div className="uploader">
      <button onClick={()=> setPopupImgUploader(false)}>X</button>
      <br></br>
      <form className="form-uploader" onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button type="submit">
          {/* {" "} */}
          Submit
        </button>
      </form>
      {previewSource && (
        <img className='preview' src={previewSource} alt="chosen" />
      )}
    </div>
  )
}

export default ImgUploader