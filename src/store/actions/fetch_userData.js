import {userData} from '../test';

export const receive_userData = () => {
    return{
        type : "FETCH_USER_DATA",
        data : userData.members
    }
}
