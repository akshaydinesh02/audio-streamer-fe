import { atom } from "recoil";

export const authCardToRender = atom<number>({
  key: "authCardToRender",
  default: 0,
});

export const authButtonLoading = atom<boolean>({
  key: "authButtonLoading",
  default: false,
});
