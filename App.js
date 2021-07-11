import React from "react";
import { Admin, Resource ,fetchUtils} from "react-admin";
import authProvider from "./authProvider";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import CreatePost from "./components/admin/try";

import { createBrowserHistory as createHistory } from 'history';

import { createMuiTheme } from '@material-ui/core/styles';
import simpleRestProvider from 'ra-data-simple-rest';

const history = createHistory();

const theme = createMuiTheme({
  palette: {
    type: 'dark', 
  },
});

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

const App = () => (
  <Admin theme={theme} 
  authProvider={authProvider}
  dataProvider={dataProvider}>
    <Resource name="try" list={CreatePost} icon={DeleteSweepIcon} />

  
  </Admin>
);

export default App;
