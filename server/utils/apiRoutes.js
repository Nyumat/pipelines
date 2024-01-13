const HOST =
  process.env.NODE_ENV === "DEV"
    ? "http://localhost:4000"
    : process.env.NODE_ENV === "PROD"
    ? "https://pipelines-backend.onrender.com"
    : (console.error("Unknown mode:", process.env.MODE), null);

const HOMEPAGE =
  process.env.NODE_ENV === "DEV"
    ? "http://localhost:3000"
    : process.env.NODE_ENV === "PROD"
    ? "https://pipelines.lol"
    : (console.error("Unknown mode:", process.env.MODE), null);

export { HOST, HOMEPAGE };