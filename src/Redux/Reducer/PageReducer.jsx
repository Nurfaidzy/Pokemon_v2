import { KIRIM_DATA_PERTAMA, KIRIM_DATA_KEDUA } from "./../Action/Actiondata1";

const res = {
  next: null,
  previous: null,
  maxdata: 0,
  asetpoke: [],
};

const PageReducer = (state = res, action) => {
  switch (action.type) {
    case KIRIM_DATA_PERTAMA:
      return {
        ...state,
        next: action.payload.next,
        previous: action.payload.previous,
        maxdata: state.maxdata + 20,
      };
    case KIRIM_DATA_KEDUA:
      return {
        ...state,
        asetpoke: [...state.asetpoke, action.payload.data],
      };
    default:
      return state;
  }
};

export default PageReducer;
