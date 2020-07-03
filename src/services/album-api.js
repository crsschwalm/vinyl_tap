import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const appStage = process.env.REACT_APP_STAGE;

export const createAlbum = async (album) => {
  const response = await axios.post(`${apiUrl}/${appStage}/records`, album);
  return response.data;
};

export const getAlbumById = async (id) => {
  const response = await axios.get(`${apiUrl}/${appStage}/records/${id}`);
  return response.data;
};

export const getAlbums = async () => {
  const response = await axios.get(`${apiUrl}/${appStage}/records`);
  return response.data;
};

export const updateAlbum = async (album) => {
  const response = await axios.put(
    `${apiUrl}/${appStage}/records/${album.id}`,
    album,
  );
  return response.data;
};

export const deleteAlbumById = async (id) => {
  const response = await axios.delete(`${apiUrl}/${appStage}/records/${id}`);
  return response.data;
};
