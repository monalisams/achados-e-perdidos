import { Api } from "./api";
import { Item, ItemGet, ItemListResponse } from "./models/item";

const ItemsService = {
  list: async (filter: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: filter,
    };
    const response = await Api.get<ItemListResponse>("item", config);
    return response.data;
  },

  create: async (item: Item) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await Api.post<Item>("item", item, config);
    return response.data;
  },
  delete: (id: number) =>
    Api.delete(`/item/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  update: (id: number, item: Item) =>
    Api.put(`/item/${id}`, item, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
  get: async (id: number) => {
    const response = await Api.get<ItemGet>(`/item/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  },
};

export { ItemsService };
