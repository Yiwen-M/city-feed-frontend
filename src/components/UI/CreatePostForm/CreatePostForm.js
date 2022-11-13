import { useState } from 'react';

import MediaFileUpload from './MediaFileUpload/MediaFileUpload';
import FeedDetails from './FeedDetails/FeedDetails';

const CreateForm = (props) => {
  const currentDate = new Date().toLocaleString();
  const timeStamp = Date.parse(currentDate).toString();

  const [step, setStep] = useState(1);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviewURL, setImagePreviewURL] = useState([]);
  const [base64, setBase64] = useState([]); //to pass to backend

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const nextStep = () => {
    const curStep = step;
    setStep(curStep + 1);
  };

  const prevStep = () => {
    const curStep = step;
    setStep(curStep - 1);
  };

  const MAX_LENGTH = 4;

  const fileUploadHandler = (e) => {
    const uploadedFiles = e.target.files;
    //check if over limit before upload
    if (Array.from(uploadedFiles).length > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload more than ${MAX_LENGTH} images`);
      return;
    } else {
      //check if already over limit
      if (selectedFiles.length >= MAX_LENGTH) {
        e.preventDefault();
        alert(`Cannot upload more than ${MAX_LENGTH} images`);
        return;
      } else {
        Array.from(uploadedFiles).forEach(async (curFile) => {
          setSelectedFiles((prevFileArray) => [...prevFileArray, curFile]);
          setImagePreviewURL((prevURLArray) => [
            ...prevURLArray,
            URL.createObjectURL(curFile),
          ]);
          const curBase64 = await convertBase64(curFile);
          setBase64((prevBase64Array) => [...prevBase64Array, curBase64]);
          console.log(curBase64);
        });
      }
      setIsSelected(true);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  switch (step) {
    case 1:
      return (
        <MediaFileUpload
        selectedFiles={selectedFiles}
        imagePreviewURL={imagePreviewURL}
        isSelected={isSelected}
        fileUploadHandler={fileUploadHandler}
        nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FeedDetails
        title={title}
        description={description}
        changeTitleHandler={changeTitleHandler}
        changeDescriptionHandler={changeDescriptionHandler}
        nextStep={nextStep}
        prevStep={prevStep}
        />
      );
    case 3:
      return <h1>confirmation</h1>;
    case 4:
      return <h1>success</h1>;
  }
};

export default CreateForm;
