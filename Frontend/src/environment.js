let IS_PROD = true; //In development Mode : IS_PROD = false;     //In Deployment or Production : IS_PROD = true;
const server = IS_PROD
  ? "https://virtual-connect-hub-backend.onrender.com"
  : "http://localhost:8000";

export default server;
