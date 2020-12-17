const BASE_URL = 'http://127.0.0.1:8000/api/resorts';

const fetchResortByID = async (resortID) => {
  const response = await fetch(`${BASE_URL}/${resortID}`);
  const data = await response.json();
  return data;
};

const fetchResorts = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const likeResort = async (resortID) => {
  return fetch(`${BASE_URL}/${resortID}/like`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  });
}

export {
  fetchResortByID,
  fetchResorts,
  likeResort
};
