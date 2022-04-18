import { Api } from "./api";
import { Owner } from "./models/item";

const HistoricalService = {
  create: async (owner: Owner) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await Api.post<Owner>("owner", owner, config);
    return response.data;
  },
  list: async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await Api.get<Owner[]>("owner", config);
    return response.data;
  },
};

export { HistoricalService };
