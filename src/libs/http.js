
class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      let req = await fetch(url);

      let json = await req.json();

      return json;

    } catch (err) {
      console.log("http get method err", err);

      throw Error(err);
    }
  }

  post = async (url, body) => {
    try {

      let req = await fetch(url, {
        method: "POST",
        body
      });

      let json = await req.json();

      return json;

    } catch (err) {
      console.log("http method post err", err);

      throw Error(err);
    }
  }

}

export default Http;