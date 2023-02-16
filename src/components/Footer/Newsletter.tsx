import styles from "./styles/Footer.module.scss";
import { Formik, Field, Form } from "formik";
import schema from "../../schema/NewsletterSchema";

interface NewsletterArea {
  newsletteremail: string;
}

const initialValues = {
  newsletteremail: "",
};

const Newsletter = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(_values: NewsletterArea, actions) => {
      actions.resetForm();
    }}>
      {({isValid}) => (
        <Form className={styles["Newsletter"]}>
          <div className={styles["Newsletter__Content"]}>
            <div className={styles["Newsletter__Content__Block"]}>
              <h3 className={styles["Newsletter__Content__Block__Message"]}>
                assine nossa newsletter
              </h3>
              <div className={styles["Newsletter__Content__Block__Register"]}>
                <Field type="text" placeholder="E-mail" name="newsletteremail" />
                <button type="submit" disabled={!isValid}>Enviar</button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { Newsletter };
