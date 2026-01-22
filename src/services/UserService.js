import { BASE_URL } from '../shared/constants';

export const USER_SERVICE = {
  get: async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return await response.json();
  },
};
