const initialState = {
  userData: [],
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return {
        ...state,
        userData: action.data,
      };
    default:
      return state;
  }
};
