const initialState = {
  userData: [],
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      // var userName=[];
      // action.data.map(data => userName.push(data.real_name))
      return {
        ...state,
        userData: action.data,
      };
    default:
      return state;
  }
};
