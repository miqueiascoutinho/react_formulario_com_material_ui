import React, { useState } from "react";
import { Switch, Button, TextField, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ cadastrar, validarCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [validacao, setValidacao] = useState({
    cpf: { valido: true, mensagem: null },
  });

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrar({ nome, sobrenome, cpf, promocoes, novidades });
        }}
      >
        <TextField
          id="nome"
          label="Nome"
          size="small"
          margin="normal"
          variant="outlined"
          fullWidth
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
            if (e.target.value.length > 15) {
              setNome(nome.substring(0, 15));
            }
          }}
        />
        <TextField
          id="sobrenome"
          label="Sobrenome"
          margin="normal"
          size="small"
          variant="outlined"
          fullWidth
          value={sobrenome}
          onChange={(e) => {
            setSobrenome(e.target.value);
            if (e.target.value.length > 15) {
              setSobrenome(sobrenome.substring(0, 15));
            }
          }}
        />
        <TextField
          label="CPF"
          size="small"
          margin="normal"
          variant="outlined"
          fullWidth
          value={cpf}
          helperText={validacao.cpf.mensagem}
          error={!validacao.cpf.valido}
          onChange={(e) => {
            let nomeDigitado = e.target.value;
            if (nomeDigitado.search(/^\d*$/) !== -1) {
              if (nomeDigitado.length <= 11) {
                setCpf(e.target.value);
              }
            }
          }}
          onBlur={(e) => {
            let validacaoCpf = validarCpf(e.target.value);
            let resultado = { cpf: validacaoCpf };
            setValidacao(resultado);
          }}
        />

        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              name="promocoes"
              color="primary"
              checked={promocoes}
              onChange={(e) => {
                setPromocoes(e.target.checked);
              }}
            />
          }
        />
        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              name="novidades"
              color="primary"
              checked={novidades}
              onChange={(e) => {
                setNovidades(e.target.checked);
              }}
            />
          }
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </section>
  );
}

export default FormularioCadastro;
