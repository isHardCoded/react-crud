import { BASE_URL } from '../shared/constants';

export const TASK_SERVICE = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/tasks`);
    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    return await response.json();
  },

  create: async (task) => {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    return await response.json();
  },

  update: async () => {},

  deleteAll: async () => {},

  deleteById: async (id) => {
    await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};
