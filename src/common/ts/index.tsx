import { getAction } from './actions/common';
import { get, post, del, makePath } from './API/common';
import { SocketsAPI } from './API/socketsAPI';
import configureStore, { getReducer } from './store/common';
import { combineClassNames } from './utils/utils';
import { getGainController } from './utils/audio';

export { 
    getAction,
    get, post, del, makePath,
    configureStore, getReducer,
    combineClassNames,
    getGainController,
    
    SocketsAPI
}