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

export const setMicartera = async ({ values }) => {
  try {
    const url = getApiUrl(`setMiCartera`);

    const options = {
      method: "POST",
      body: new URLSearchParams({
        tipo: values.tipo,
        criptomoneda: values.criptomoneda,
        cantidad: values.cantidad,
        precio: values.precio,
        id_usuario: 2, // de momento lo dejamos fijo
      }),
    };

    const response = await fetch(url, options);

    const result = await response.text();
    console.log("Se ejectua set");
    return JSON.parse(result);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateMicartera = async ({ values }) => {
  try {
    const url = getApiUrl(`updateMiCartera`);

    const options = {
      method: "POST",
      body: new URLSearchParams({
        id: values.id,
        tipo: values.tipo,
        cripto: values.cripto,
        cantidad: values.cantidad,
        precio: values.precio,
      }),
    };

    const response = await fetch(url, options);

    const result = await response.text();

    return JSON.parse(result);
  } catch (error) {
    console.error(error);
    return [];
  }
};
