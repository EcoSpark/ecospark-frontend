import { searchBarcode } from "../services/get-barcode/index"

const searchBarcodeHook = async (code) => {
    return await searchBarcode(code)
}

export { searchBarcodeHook }