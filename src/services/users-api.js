const baseUrl = "https://jsonplaceholder.typicode.com";

export class API_SERVICE {
  url = "https://jsonplaceholder.typicode.com/users";

  static getUsers({ start = 0, limit = 10, callback }) {
    fetch(baseUrl + `/users?_start=${start}&_limit=${limit}`)
      .then((response) => response.json())
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.trace(error);
      });
  }

  static async getUsersAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseUrl + `/users?_start=${start}&_limit=${limit}`
      );

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
    }
  }

  static async getUsersItemAsync(UserId) {
    try {
      const response = await fetch(baseUrl + `/users/${UserId}`);

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
    }
  }
}

export default API_SERVICE;
