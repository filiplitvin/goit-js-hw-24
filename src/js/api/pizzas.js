import { BASE_URL } from "../config";
export const createPizza = async function (pizza) {
  const responce = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(pizza),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!responce.ok) {
    throw new Error(`Не вдалося створити піццу:${responce.statusText}`);
  }
  return responce.json();
};

export const getOnePizza = async (id) => {
  console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Невдалося створити нову піццу: ${response.statusText}`);
  }
  return response.json();
};

export const getPizzas = async () => {
  const responce = await fetch(BASE_URL);
  if (!responce.ok) {
    throw new Error(`Не вдалося отримати піццу:${responce.statusText}`);
  }
  return responce.json();
};

export const updatePizza = async function (id, pizza) {
  const responce = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(pizza),
  });
  if (!responce.ok) {
    throw new Error(`Не вдалося оновити дані піцци:${responce.statusText}`);
  }
  return responce.json();
};

export const deletePizza = async function (id) {
  const responce = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!responce.ok) {
    throw new Error(`Піцца видалено:${responce.statusText}`);
  }
};
