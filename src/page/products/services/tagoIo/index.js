import axios from "axios"

const config = {
    headers:{
      'Content-Type': 'application/json',
      Authorization: '048c70a2-0935-4521-88e1-33668ef60f1c'
    }
  };

export const getTagoIoService = async () => {
    const { data } = (await axios.get(`https://api.tago.io/data?qty=100`, config))
    console.log(data)
    return data
}