const reducers = {
  setLoadingUserDetails: (state, action) => {
    const { id } = action.payload;

    state.details[id] = {
      isLoading: true,
      error: false,
      data: null,
    };
  },
  setErrorUserDetails: (state, action) => {
    const { id } = action.payload;

    state.details[id] = {
      isLoading: false,
      error: true,
      data: null,
    };
  },
  setDataUserDetails: (state, action) => {
    const { id, data } = action.payload;

    state.details[id] = {
      isLoading: false,
      error: false,
      data: data,
    };
  },

  setLoadingUserList: (state, action) => {
    const { page } = action.payload;

    state.list[page] = {
      isLoading: true,
      error: false,
      data: null,
    };
  },
  setErrorUserList: (state, action) => {
    const { page } = action.payload;

    state.list[page] = {
      isLoading: false,
      error: true,
      data: null,
    };
  },
  setDataUserList: (state, action) => {
    const { data, page } = action.payload;

    state.list[page] = {
      isLoading: false,
      error: false,
      data: data,
    };
  },
};

export default reducers;
