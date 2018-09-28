export default (state, action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY":
            //do something.
            // state.tech = action.tech; 
            // console.log('state.tech: ' + state.tech);
            // return state;

            return {
                ...state,
                tech: action.tech
            };

        default:
            return state;
    }
};

  // console.log(action.tech);