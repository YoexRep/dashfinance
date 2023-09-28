import { getApiUrl } from "../config";

export const getMicartera = async ({ parametros }) => {
  try {
    const { id } = parametros;

    const url = getApiUrl(`getMiCartera/${id}`);

    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);

    const result = await response.text();

    return JSON.parse(result);
  } catch (error) {
    console.error(error);
    return [];
  }
};
