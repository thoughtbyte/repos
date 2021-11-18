import { useState, FormEvent } from "react";

const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
