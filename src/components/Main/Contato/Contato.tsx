import { Formik, Field, Form } from "formik";
import schema from "../../../schema/FormSchema";
import styles from "../styles/Main.module.scss";
import { FormField } from "../Contato/FormContentField/FormContentField";
import { useState } from "react";

interface FormArea {
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  phone: string;
  instagram: string;
  checkbox: boolean;
}

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  birthDate: "",
  phone: "",
  instagram: "",
  checkbox: false,
};

const Contato = () => {
  const [isValidate, setIsValidate] = useState(false);

  return (
    <div className={styles["Contato"]}>
      <h2>Preencha o formulário</h2>
      <Formik
        validationSchema={schema}
        onSubmit={(values: FormArea, actions) => {
          actions.resetForm();
          if (
            values.checkbox === true &&
            values.cpf !== "" &&
            values.email !== "" &&
            values.name !== "" &&
            values.phone !== "" &&
            values.birthDate !== ""
          ) {
            setIsValidate(true);
          }
        }}
        initialValues={initialValues}
      >
        {() => (
          <Form>
            <div className={styles["FormContent"]}>
              <FormField title="Nome" name="name" type="text" placeholder="Seu nome completo"/>
              <FormField title="E-mail" name="email" type="email" placeholder="Seu e-mail"/> 
              <FormField title="CPF" name="cpf" type="cpf" placeholder="000.000.000-00"/>
              <FormField title="Data de Nascimento:" name="birthDate" type="birthDate" placeholder="00.00.0000"/>
              <FormField title="Telefone:" name="phone" type="tel" placeholder="(00) 00000-0000"/>
              <FormField title="Instagram" name="instagram" type="text" placeholder="@seuuser"/>         
              <div className={styles["Confirm__Camp"]}>
                <span className={styles["Confirm__Camp__Asterisk"]}>*</span>
                <span className={styles["Confirm__Camp__Text"]}>
                  Declaro que li e aceito
                  <Field type="checkbox" name="checkbox" />
                </span>
              </div>
              <button type="submit">CADASTRE-SE</button>
              {isValidate && (
                <span className={styles["FormContent__Field__Success"]}>
                  *Formulário enviado com sucesso!
                </span>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contato;
