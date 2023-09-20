// geolocation.js

export const getGeolocation = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve({ latitude: lat, longitude: lon });
        }, (error) => {
          reject(error);
        });
      } else {
        reject(new Error('Geolocation is not available in your browser.'));
      }
    });
  };
