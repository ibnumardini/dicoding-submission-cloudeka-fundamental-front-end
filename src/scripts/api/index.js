import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.dbooks.org/api",
  timeout: 30000,
});

const getLatestBook = async () => {
  try {
    const { data: data } = await instance.get("/recent");

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getProgrammingBook = async () => {
  try {
    const { data: data } = await instance.get("/search/programming");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getLatestBook, getProgrammingBook };
