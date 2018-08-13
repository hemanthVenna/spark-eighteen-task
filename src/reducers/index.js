import {combineReducers} from 'redux';
import InputsReducer from './inputsReducer'

const appStore = combineReducers({
    dataList : InputsReducer
})

export default appStore;