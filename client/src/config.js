const env = process.env.NODE_ENV;

let apiHost, mailchimpSignupURL;
let path = "/api/";

switch (env) {
  case "":
    apiHost = "http://localhost:8000";
    mailchimpSignupURL = "fake";
    break;
  case "development":
    apiHost = "https://internbeat.appspot.com";
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
