const baseUrl = "https://jsonplaceholder.typicode.com";

export class API_SERVICE {
  url = "https://jsonplaceholder.typicode.com/posts";

  static getPosts({ start = 0, limit = 10, callback }) {
    fetch(baseUrl + `/posts?_start=${start}&_limit=${limit}`)
      .then((response) => response.json())
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.trace(error);
      });
  }

  static async getPostsAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseUrl + `/posts?_start=${start}&_limit=${limit}`
      );

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
    }
  }

  static async getPostItemAsync(PostId) {
    try {
      const response = await fetch(baseUrl + `/posts/${PostId}`);

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
    }
  }
}

export default API_SERVICE;
