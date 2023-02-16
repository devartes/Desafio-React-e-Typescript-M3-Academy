import * as Yup from "yup";

const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cpf = /\d{3}.\d{3}.\d{3}-\d{2}/;

const phone =
  /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/;

const instagram = /@([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/;

const birthDate = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/;



export default Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+$/, "Nome Inválido")
    .min(3, "O Nome Deve Ter Pelo Menos 3 Letras")
    .required("*Campo Obrigatório"),
  email: Yup.string()
    .email("Email Inválido")
    .matches(email, "Email Inválido")
    .required("*Campo Obrigatório"),
  phone: Yup.string()
    .matches(phone, "Digite um número válido com DDD")
    .required("*Campo Obrigatório"),
  birthDate: Yup.string()
    .matches(birthDate, "Data de Nascimento Inválida")
    .required("*Campo Obrigatório"),
  cpf: Yup.string().matches(cpf, "Cpf Inválido").required("*Campo Obrigatório"),
  instagram: Yup.string().matches(instagram, "Nome de Usuário Inválido"),
  checkbox: Yup.boolean().oneOf([true]),
});
