import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosAcesso from "./DadosAcesso";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ validarCpf, cadastrar }) {
  const [pagina, setPagina] = useState(0);

  function orderPagina(pagina) {
    switch (pagina) {
      case 0:
        return <DadosAcesso setPagina={setPagina} />;
      case 1:
        return (
          <DadosPessoais
            validarCpf={validarCpf}
            cadastrar={cadastrar}
            setPagina={setPagina}
          />
        );
      case 2:
        return <DadosEntrega setPagina={setPagina} />;
      default:
        return <Typography>Error</Typography>;
    }
  }

  return <>{orderPagina(pagina)}</>;
}

export default FormularioCadastro;
