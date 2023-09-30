import { useState } from "react"

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
    setValue(event.currentTarget.value);
  };

  return {value, onChange}

};

export default useInput;



// const onTitleChange = (
//     event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setTitle(event.currentTarget.value);
//   };

//   const onDescriptionChange = (
//     event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setDescription(event.currentTarget.value);
//   };