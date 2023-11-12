import { Avatar, Box, Button, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EcoSparkWhite } from "../../assets/logos/ecospark-white";
import { searchBarcodeHook } from "./hooks/index";
import {
  deleteBucketTagoIoService,
  deleteTagoIoService,
  getTagoIoService,
  postTagoIoService,
} from "./services/tagoIo";
import * as S from "./styled";
import "./products.style.sass";

export const BarcodePage = () => {
  const [barcodes, setBarcode] = useState();
  const [products, setProducts] = useState([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["codes_products"],
    queryFn: async () => {
      const result = await getTagoIoService();
      return result;
    },
  });

  useEffect(() => {
    if (data && data.result) {
      let barcodes = data.result.map((result) => {
        return {
          code: result.value,
          id: result.id,
        };
      });
      setBarcode(barcodes);
    }
  }, [data, data?.result]);

  const fetchAndSetProducts = useCallback(async (barcodes) => {
    let listProducts = [];
    for (const row of barcodes) {
      const updatedValue = await searchBarcodeHook(row.code);
      listProducts.push({
        value: updatedValue,
        id: row.id,
      });
    }
    return listProducts;
  }, []);

  const handleDeleteProduct = useCallback(
    async (ids) => {
      try {
        await deleteTagoIoService(ids);
        toast("Produto Removido com sucesso!", {
          type: "success",
        });
        setProducts([]);
        refetch();
      } catch (err) {
        toast("Erro ao Remover o Produto!", {
          type: "error",
        });
      }
    },
    [refetch]
  );

  const handleRecycle = useCallback(async () => {
    try {
      toast("Reciclagem realizada!", {
        type: "success",
      });
      await deleteBucketTagoIoService();
      setProducts([]);
      refetch();
    } catch (err) {
      toast("Erro ao Finalizar a Reciclagem!", {
        type: "error",
      });
    }
  }, [refetch]);

  const handlePostProduct = useCallback(
    async (data) => {
      try {
        toast("Adicionando Produto...", {
          type: "info",
        });

        await postTagoIoService(data);
        const newProducts = await fetchAndSetProducts([
          ...barcodes,
          { code: data.value },
        ]);

        setProducts(newProducts);

        toast("Produto Adicionado com sucesso!", {
          type: "success",
        });

        refetch();
      } catch (err) {
        console.error("Erro ao Adicionar o Produto", err);
        toast("Erro ao Adicionar o Produto. Tente Novamente.", {
          type: "error",
        });
      }
    },
    [barcodes, fetchAndSetProducts, refetch]
  );

  return (
    <main id="wrapper-products-page">
      <div id="wrapper-products-page-header">
        <EcoSparkWhite />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" color="white">
            Olá, Samuel!
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/371016127_834964271601300_3490510982285681712_n.jpg?ccb=11-4&oh=01_AdRaiCpQZ7G419GuwzHcJFCRG1WDRC9aJbGvFkVZ9N-09Q&oe=6520AF6E&_nc_sid=000000&_nc_cat=109"
          />
        </Box>
      </div>

      <section id="wrapper-products-page-list">
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width={"80%"}
            height={"200px"}
            sx={{ borderRadius: "20px" }}
          />
        ) : (
          products?.map((item) => {
            console.log(item);
            return (
              <div id="wrapper-products-list" key={item?.value.product?.code}>
                <div id="wrapper-products-list-content">
                  <img
                    src={item?.value.product?.image_front_small_url}
                    alt={item?.value.product?.image_front_small_url}
                  />

                  <div id="wrapper-products-list-categories">
                    <div id="wrapper-products-list-categories">
                      <h5>{item?.value.product?.product_name}</h5>
                      <h6>{item?.value.product?.brands}</h6>
                    </div>

                    <span>Cód - {item?.value.product?.code}</span>
                  </div>
                </div>

                <div id="wrapper-products-list-buttons">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteProduct(item?.id)}
                  >
                    Remover
                  </Button>

                  <Button variant="contained" color="success">
                    +
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </section>

      <S.Footer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 50,
          }}
        >
          <Button variant="contained" color="success" onClick={handleRecycle}>
            Reciclar
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={() =>
              handlePostProduct({
                variable: "code",
                value: 7891150027848,
              })
            }
          >
            Adicionar Produto
          </Button>
        </div>
      </S.Footer>
    </main>
  );
};
