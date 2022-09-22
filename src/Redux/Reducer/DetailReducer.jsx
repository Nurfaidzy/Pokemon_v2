import { KIRIM_DETAIL, TERIMA_DETAIL } from "../Action/Actiondetail";

const detail = {
  nama: null,
  data: [],
};

const DetailReducer = (state = detail, action) => {
  switch (action.type) {
    case KIRIM_DETAIL:
      return {
        ...state,
        nama: action.payload,
      };
    case TERIMA_DETAIL:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default DetailReducer;
