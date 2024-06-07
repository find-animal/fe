import { atom } from "recoil";

export const sexFilterState = atom({
  key: "sexFilterState",
  default: null,
});

export const ageFilterState = atom({
  key: "ageFilterState",
  default: { startYear: "", endYear: "" },
});

export const locationFilterState = atom({
  key: "locationFilterState",
  default: [],
});

export const adoptFilterState = atom({
  key: "adoptFilterState",
  default: false,
});
