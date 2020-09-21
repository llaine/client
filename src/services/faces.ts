const BASE_URL = 'https://shrouded-waters-26042.herokuapp.com';
const FACES = `${BASE_URL}/faces`;

export interface Face {
  id: number;
  avatar: string;
  name: string;
}

export function getFaces(): Promise<Array<Face>> {
  const options = {}
  return fetch(FACES, options)
    .then(response => response.json())
}
