import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega({setPagina}) {
  return (
    <form onSubmit={e =>{
        e.preventDefault();
        setPagina(3);
    }}>
      <TextField
        id="logradouro"
        label="Logradouro"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="complemento"
        label="Complemento"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <TextField
        id="bairro"
        label="Bairro"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="cep"
        label="CEP"
        type="text"
        size="small"
        margin="normal"
        variant="outlined"
      />
      <section>
        <Button type="submit" variant="contained" color="primary">
          Finalizar Cadastro
        </Button>
      </section>
    </form>
  );
}

export default DadosEntrega;
