import apiClient from './apiClient';

export const getProductos = async () => {
  try {
    const response = await apiClient.get('/productos/');
    return response.data;
  } catch (error) {
    console.error('Error fetching productos:', error);
    throw error;
  }
};

export const createProducto = async (productoData) => {
  try {
    const response = await apiClient.post('/productos/', productoData);
    return response.data;
  } catch (error) {
    console.error('Error creating producto:', error);
    throw error;
  }
};