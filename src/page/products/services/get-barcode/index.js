import axios from "axios";

export const searchBarcode = async (code) => {
  const { data } = await axios.get(
    `https://world.openfoodfacts.org/api/v0/product/${code}.json`
  );
  return data;
};
