import { Api } from "./api";

const UsersService = {
  login: async (params: any) => {
    const response = await Api.post("users/auth", params);
    localStorage.setItem("token", response.data.token);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("token");
  },
  isLogedIn: () => {
    return localStorage.getItem("token") != null;
  },
};

export { UsersService };
