export const BASE_URL = 'https://shrouded-waters-26042.herokuapp.com';
const FacesApi = `${BASE_URL}/faces`;

export interface Face {
  id: number;
  avatar: string;
  name: string;
}

export function getFaces(): Promise<Array<Face>> {
  return fetch(FacesApi).then(response => response.json())
}
