import React, { useEffect } from "react";
// import { Get } from "./Services/HttpClient";
import { HttpClient } from "./Services/HttpClient/HttpClient";

const httpClient = new HttpClient();

const AxiosTest = () => {
  useEffect(() => {
    httpClient
      .Get("posts", { params: { userId: 3 } })
      .then((response) => console.log(response));
  }, []);

  return <div></div>;
};

export default AxiosTest;
