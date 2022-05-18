import { post } from 'axios';

const clientId = '22c1c6f2fcdf4b14baf2bc2d73ec251c';
const clientSecret = 'DriBJCKUZIm0GH4BF8waQifWayVrWL45';

const region = 'eu';
const url = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const body = new FormData();
  body.append('grant_type', 'client_credentials');
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret },
  };
  return post(url, body, config);
}

export default {
  getToken,
};
