const env = process.env.NODE_ENV;

let apiHost, mailchimpSignupURL;
let path = "/api/";

switch (env) {
  case "development":
    apiHost = "http://localhost:8000";
    mailchimpSignupURL = "fake";
    break;
  case "production":
    apiHost = "TODO";
    mailchimpSignupURL =
      "https://internbeat.us3.list-manage.com/subscribe/post?u=842438e7e73305cf065d457b4&amp;id=f09ce65602";
    break;
  default:
    apiHost = "TODO";
    break;
}

export default {
  baseURL: apiHost + path,
  mailchimpSignupURL
};
