import { get } from 'axios';

import store from '../store/index';

import { locales } from '../utils/regions';

const protocol = 'https://';
const host = '.api.blizzard.com/';

function getApiAccount({ region, account }) {
  const resource = `d3/profile/${account}/`;
  const url = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];
  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(url, { params });
}

export default {
  getApiAccount,
};
