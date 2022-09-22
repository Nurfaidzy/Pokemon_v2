export const KIRIM_DETAIL = "KIRIM_DETAIL";
export const TERIMA_DETAIL = "TERIMA_DETAIL";

export const kirim_detail = (Action) => {
  return {
    type: KIRIM_DETAIL,
    payload: Action,
  };
};
