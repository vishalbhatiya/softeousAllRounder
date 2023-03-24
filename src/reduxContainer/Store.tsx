 import { legacy_createStore as createStore} from 'redux'

import BookReducer from './bookReducer'

const store = createStore(BookReducer);

export default store;