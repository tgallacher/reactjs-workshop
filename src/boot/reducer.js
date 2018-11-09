import { combineReducers } from 'redux';

import consultants from 'consultants/ducks';
import ui from 'ui/ducks';

export default combineReducers({
  consultants,
  ui,
});
