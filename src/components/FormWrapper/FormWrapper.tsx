import { ReactNode } from "react";
import { formWrapperContainer } from "./styles";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <section css={formWrapperContainer}>
      <h2 className="form_title">{title}</h2>
      <div className="form_step">{children}</div>
    </section>
  );
};

export default FormWrapper;
