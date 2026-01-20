const BASE_URL = 'http://localhost:3000/users';

export const USER_SERVICE = {
  get: async () => {
    const response = await fetch(BASE_URL);
    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    return await response.json();
  }
};
