export const AMBIL_DATA_PERTAMA = "AMBIL_DATA_PERTAMA";
export const KIRIM_DATA_PERTAMA = "KIRIM_DATA_PERTAMA";
export const KIRIM_DATA_KEDUA = "KIRIM_DATA_KEDUA";
export const PINDAH_NEXT = "PINDAH_NEXT";

export const ambil_data_pertama = () => {
  return {
    type: AMBIL_DATA_PERTAMA,
  };
};

export const pindah_next = (Action) => {
  console.log(Action);
  return {
    type: PINDAH_NEXT,
    payload: Action,
  };
};
