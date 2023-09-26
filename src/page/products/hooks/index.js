import { searchBarcode } from "../services/index"

const searchBarcodeHook = async (code) => {
    console.log(code)
    const product = await searchBarcode(code)
    return { ...product }
}

export { searchBarcodeHook }