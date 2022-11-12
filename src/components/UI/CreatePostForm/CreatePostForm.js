import { useState } from 'react';

import MediaFileUpload from './MediaFileUpload/MediaFileUpload';

const CreateForm = () => {
  const currentDate = new Date().toLocaleString();
  const timeStamp = Date.parse(currentDate).toString();

  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState('');

  const nextStep = () => {
    const curStep = step;
    setStep(curStep + 1);
  };

  const prevStep = () => {
    const curStep = step;
    setStep(curStep - 1);
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const changeMediaHandler = (e) => {
    setTitle(e.target.value);
  };

  switch (step) {
    case 1:
      return <MediaFileUpload />;
    case 2:
      return <h1>feed details</h1>;
    case 3:
      return <h1>confirmation</h1>;
    case 4:
      return <h1>success</h1>;
  }
};

export default CreateForm;
