const BASE_URL = 'http://localhost:3000/users';

export const USER_SERVICE = {
  get: async () => {
    const response = await fetch(BASE_URL);
    return await response.json();
  },

  post: async (user) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  },

  delete: async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
  },
};
