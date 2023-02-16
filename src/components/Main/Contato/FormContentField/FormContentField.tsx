import styles from "../../styles/Main.module.scss";
import { Field, ErrorMessage } from "formik";

interface FormContentFieldProps {
  title: string;
  name: string;
  placeholder: string;
  type: string;
}

const FormField = (props: FormContentFieldProps) => {
  const { title, name, placeholder, type } = props;
  return (
    <div className={styles["FormContent__Field"]}>
      <label>{title}</label>
      <span className={styles["FormContent__Field__Error"]}>
        <ErrorMessage name={name} />
      </span>
      <Field name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export { FormField };
