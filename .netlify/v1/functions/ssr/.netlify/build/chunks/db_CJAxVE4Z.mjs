import { createClient } from '@libsql/client';

const turso = createClient({
  url: "libsql://mycdb-mycgroup.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzU1MDcyMjEsImlkIjoiNTM4ZWY4OGUtMTc4ZC00Mzc0LTk0YTAtZDQ2OTc1ZGFhOGEyIn0.eqVP1udO90qyALlaz9Y4FHOvBwG5_qMLYovjVikCXrCNoywGGdxbH7kMM2hdIGx4_v70Nh9vH_X4HVrO0kp8BQ"
});
const queryDb = async (query, params = []) => {
  try {
    const result = await turso.execute({ sql: query, args: params });
    return result;
  } catch (error) {
    console.error("Internal Server Error: ", error);
    throw error;
  }
};

export { queryDb as q };
