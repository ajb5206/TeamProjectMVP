export default class NearbyService {  
  static async getNearbyBirds(lat, lng, rad) {
    return fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}&&dist=${rad}&sort=date&maxResults=1`, {
      headers: {
        'x-ebirdapitoken': `${process.env.EBIRD_API_KEY}`,
      },
    })
      .then(function(response) {
        if (!response.ok) {
          throw Error((`${response.status}: ${response.statusText}`));
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}