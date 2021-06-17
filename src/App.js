import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography align="center" component="h1" variant="h4">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro cadastrar={cadastrar} validarCpf={validarCpf} />
      </Container>
    );
  }
}

function cadastrar(dados) {
  sessionStorage.setItem("dados", JSON.stringify(dados));
  console.log(dados);
}

function validarCpf(cpf) {
  let qtdeCaracteres = cpf.length;
  let mensagem = null;
  let valido = true;

  if (qtdeCaracteres > 0 && qtdeCaracteres < 11) {
    mensagem = "O CPF deve conter 11 caracteres";
    valido = false;
  }

  return { valido, mensagem };
}

export default App;
