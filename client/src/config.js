const env = process.env.NODE_ENV;

let apiHost;
let path = "/api/";

switch (env) {
  case "development":
    apiHost = "http://localhost:8000";
    break;
  case "production":
    apiHost = "TODO";
    break;
  default:
    apiHost = "TODO";
    break;
}

export default {
  baseURL: apiHost + path
};
