import axios from "axios";
import { queryClient } from "../../../../utils/react-query";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "f1d16878-22f2-45e1-a398-513fde4b1a13",
  },
};

export const getTagoIoService = async () => {
  const { data } = await axios.get(
    `https://api.tago.io/data?ordination=descending`,
    config
  );
  return data;
};

export const deleteTagoIoService = async (ids) => {
  const { data } = await axios.delete(`https://api.tago.io/data?ids=${ids}`, {
    headers: {
      "Content-Type": "application/json",
      "device-token": "f1d16878-22f2-45e1-a398-513fde4b1a13",
    },
  });

  queryClient.invalidateQueries(["codes_products"]);

  return data;
};

export const deleteBucketTagoIoService = async () => {
  const { data } = await axios.delete(`https://api.tago.io/data`, {
    headers: {
      "Content-Type": "application/json",
      "device-token": "f1d16878-22f2-45e1-a398-513fde4b1a13",
    },
  });

  queryClient.invalidateQueries(["codes_products"]);

  return data;
};
