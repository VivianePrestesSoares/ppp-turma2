import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  iterations: 1
};

export default function () {
  let res = http.post(
    'http://localhost:3000/instrutors/login',
    JSON.stringify({
      email: 'viviane@viviane.com',
      password: '123456'
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );

  console.log(res.body);

  sleep(1); // User Think Time
}