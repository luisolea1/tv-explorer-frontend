const TV_MAZE_BASE_URL = 'https://api.tvmaze.com';

function checkResponse(response) {
if (!response.ok) {
    throw new Error(`La solicitud falló con el estado ${response.status}.`);
}
return response.json();
}

export function searchShows(query) {
const encodedQuery = encodeURIComponent(query);

return fetch(`${TV_MAZE_BASE_URL}/search/shows?q=${encodedQuery}`)
    .then(checkResponse)
    .then((results) => results.map((result) => result.show));
}