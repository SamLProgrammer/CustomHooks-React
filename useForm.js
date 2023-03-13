import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState((fs) => ({...fs, [name]: value}));
    }

    const onResetPressed = () => {
        setFormState((fs) => initialForm);
    }

  return {
    ...formState,
    formState,
    onResetPressed,
    onInputChange
  }
}
