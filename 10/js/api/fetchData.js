export const fetchData = (url, settings) => (
  fetch(url, settings)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Fetch error -> ${url}`);
      }

      return response;
    })
    .then((response) => response.json())
);
