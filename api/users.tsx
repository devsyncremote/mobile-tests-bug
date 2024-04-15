import { BASE_URL } from "../constants";

export const getAdminUsers = () => fetch(`${BASE_URL}/admin/users`) 