import * as axios from "axios";

export async function handler(event: Record<string, string>) {
  
  return {
    statusCode: 200,
    body: JSON.stringify({ event, axios: axios.VERSION }),
  };
}