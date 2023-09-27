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
} from "./services/tagoIo";
import * as S from "./styled";

export const BarcodePage = () => {
  const [barcodes, setBarcode] = useState();
  const [products, setProducts] = useState();

  const { data, isLoading } = useQuery({
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
  }, [data]);

  useEffect(() => {
    (async () => {
      if (barcodes) {
        let listProducts = [];
        for (const row of barcodes) {
          const updatedValue = await searchBarcodeHook(row.code);
          listProducts.push({
            value: updatedValue,
            id: row.id,
          });
        }
        setProducts(listProducts);
      }
    })();
  }, [barcodes]);

  const handleDeleteProduct = useCallback(async (ids) => {
    try {
      await deleteTagoIoService(ids);
      toast("Produto Removido com sucesso!", {
        type: "success",
      });
    } catch (err) {
      toast("Erro ao Remover o Produto!", {
        type: "error",
      });
    }
  }, []);

  const handleRecicle = useCallback(async () => {
    try {
      toast("Reciclagem realizada!", {
        type: "success",
      });
      await deleteBucketTagoIoService();
    } catch (err) {
      toast("Erro ao Finalizar a Reciclagem!", {
        type: "error",
      });
    }
  }, []);

  return (
    <S.WrapperStyled>
      <S.HeaderStyled>
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
      </S.HeaderStyled>

      <S.WrapperListStyled>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            width={"80%"}
            height={"200px"}
            sx={{ borderRadius: "20px" }}
          />
        ) : (
          products?.map((item, index) => {
            return (
              <S.ListProductsStyled key={index}>
                <S.ListProductsContentStyled>
                  <S.ImageStyled
                    src={item?.value.product?.image_front_small_url}
                    alt={item?.value.product?.image_front_small_url}
                  />

                  <S.TextContainerStyled>
                    <S.TextTitleStyled>
                      <Typography variant="h5">
                        {item?.value.product?.product_name}
                      </Typography>
                      <Typography variant="h6">
                        {item?.value.product?.brands}
                      </Typography>
                    </S.TextTitleStyled>
                    <Typography variant="subtitle1">
                      Cód - {item?.value.product?.code}
                    </Typography>
                  </S.TextContainerStyled>
                </S.ListProductsContentStyled>

                <Box sx={{ display: "flex", gap: 2 }}>
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
                </Box>
              </S.ListProductsStyled>
            );
          })
        )}
      </S.WrapperListStyled>

      <S.Footer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 50,
          }}
        >
          <Button variant="contained" color="success" onClick={handleRecicle}>
            Reciclar
          </Button>
        </div>
      </S.Footer>
    </S.WrapperStyled>
  );
};
