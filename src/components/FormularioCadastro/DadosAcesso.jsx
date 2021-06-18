import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosAcesso({setPagina}) {
  return (
    <form onSubmit={e => {
        e.preventDefault();
        setPagina(1);
    }}>
      <TextField
        id="email"
        label="E-mail"
        type="e-mail"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <TextField
        id="senha"
        label="Senha"
        type="password"
        size="small"
        margin="normal"
        variant="outlined"
        fullWidth
      />
    <Button type="submit" color="primary" variant="contained">Cadastrar</Button>
    </form>
  );
}

//74051418
export default DadosAcesso;
