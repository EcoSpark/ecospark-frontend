import { Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useCallback, useState } from "react";
import { searchBarcodeHook } from "./hooks/index";
import {getTagoIoService} from "./services/tagoIo"

export const BarcodePage = () => {
  const [value, setValue] = useState({});

  const handleSubmitCode = useCallback(
    async (code) => {
      const product = await searchBarcodeHook(code);
      setValue(product);
    },
    []
  );

  const handleGetData = useCallback(
    async () => {
      await getTagoIoService();
    },
    []
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Bem vindo a máquina
      </Typography>

      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={async (values) => {
          handleSubmitCode(values.code);
        }}
      >
        <Form style={{ display: "flex", gap: 20 }}>
          <Field id="code" name="code" placeholder="Código de barras" />

          <Button
            variant="contained"
            color="success"
            type="submit"
            size="medium"
          >
            Enviar
          </Button>
        </Form>
      </Formik>

      <div>
        <p>{value?.product?.product_name}</p>
        <p>{value?.product?.packaging_hierarchy}</p>
        <img
          src={value?.product?.image_front_small_url}
          alt={value?.product?.image_front_small_url}
        ></img>
      </div>

      <button onClick={handleGetData}>TESTE TAGO</button>
    </>
  );
};
