import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { POST_URL, API_KEY } from '../../../keys';

import MediaFileUpload from './MediaFileUpload/MediaFileUpload';
import FeedDetails from './FeedDetails/FeedDetails';
import ConfirmPreview from './ComfirmPreview/ConfirmPreview';

const CreateForm = (props) => {
  const date = new Date().toLocaleString(); //to show on preview
  const timestamp = Date.parse(date).toString(); //to pass to backend

  const [step, setStep] = useState(1);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviewURL, setImagePreviewURL] = useState([]); //to show on preview
  const [imgTypeAndBase64, setImgTypeAndBase64] = useState([]); //to pass to backend

  const [title, setTitle] = useState(''); //to pass to backend
  const [content, setContent] = useState(''); //to pass to backend

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
          const curImgType = curFile.type;
          const curBase64 = await convertBase64(curFile);
          // console.log(curImgType.substring(6, curImgType.length));
          // console.log(curBase64);

          setImgTypeAndBase64((prevMediaArray) => [
            ...prevMediaArray,
            {
              type: curImgType.substring(6, curImgType.length),
              base64: curBase64,
            },
          ]);
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

  const changeContentHandler = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  let navigate = useNavigate();

  async function submitHandler() {
    const postContent = {
      userId: 'testUser',
      title: title,
      content: content,
      timestamp: timestamp,
      region: 'seattle',
      media: imgTypeAndBase64,
    };
    try {
      const response = await fetch(POST_URL, {
        method: 'POST',
        body: JSON.stringify(postContent),
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      const data = await response.json();
      console.log(data);

      let path = '/discover';
      navigate(path);
    } catch (error) {
      console.log(error.message);
    }
  }

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
          content={content}
          changeTitleHandler={changeTitleHandler}
          changeContentHandler={changeContentHandler}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <ConfirmPreview
          title={title}
          imagePreviewURL={imagePreviewURL}
          date={date}
          content={content}
          prevStep={prevStep}
          submitHandler={submitHandler}
        />
      );
    default:
      return (
        <MediaFileUpload
          selectedFiles={selectedFiles}
          imagePreviewURL={imagePreviewURL}
          isSelected={isSelected}
          fileUploadHandler={fileUploadHandler}
          nextStep={nextStep}
        />
      );
  }
};

export default CreateForm;
