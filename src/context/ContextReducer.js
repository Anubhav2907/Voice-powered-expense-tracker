const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    case "DELETE_TRANSACTION":
      const transactions = state.filter((t) => t.id !== action.payload);
      return transactions;
    default:
      return state;
  }
};
export default contextReducer;
