import Sobre from "../components/Main/Sobre/Sobre";
import FormaDePagamento from "../components/Main/FormaDePagamento/FormaDePagamento";
import Entrega from "../components/Main/Entrega/Entrega";
import TrocaEDevolucao from "../components/Main/TrocaEDevolucao/TrocaEDevolucao";
import SegurancaEPrivacidade from "../components/Main/SegurancaEPrivacidade/SegurancaEPrivacidade";
import Contato from "../components/Main/Contato/Contato";
import { Routes, Route } from "react-router-dom";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Sobre />}></Route>
      <Route path="/formadepagamento" element={<FormaDePagamento />}></Route>
      <Route path="/entrega" element={<Entrega />}></Route>
      <Route path="/trocaedevolucao" element={<TrocaEDevolucao />}></Route>
      <Route path="/segurancaeprivacidade" element={<SegurancaEPrivacidade />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
    </Routes>
  );
};

export default Rotas;
