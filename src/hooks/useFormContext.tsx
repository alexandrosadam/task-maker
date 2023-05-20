import { useState, createContext, useContext, ReactElement } from "react";

export type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

export const DEFAULT_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

export const FormContext = createContext({
  data: FormData,
  setFormValues: () => {},
});

type FormProviderProps = {
  children: ReactElement;
};

export default function FormProvider({ children }: FormProviderProps) {
  const [data, setData] = useState<FormData>(DEFAULT_DATA);

  const setFormValues = (newValues: FormData) => {
    setData((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  return <FormContext.Provider value={{ data, setFormValues }}>{children}</FormContext.Provider>;
}

export const useFormData = () => useContext(FormContext);
