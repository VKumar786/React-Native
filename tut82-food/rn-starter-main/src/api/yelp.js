import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer SCqb-q-EWwN3He-vpyI5izLgQwAXW7_lbbiIGabDOVGiusT7h4ogUDkUAILQagiPfuefQutfaVKa3ngmBlhkMJQuduQOnDj7FgYFLkaRsIAqNDN7GH7uY_cStQOIZXYx",
    // accept: "application/json",
  },
});
