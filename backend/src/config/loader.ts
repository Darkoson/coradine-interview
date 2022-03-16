export const loadEnvironment = (relativePath: string = "/../../.env.dev") => {
    const path = __dirname + relativePath;
    const result = require("dotenv").config({
      path,
    });
    if (result.error) {
      throw result.error;
    }
};