import { selector } from "recoil";
import { authButtonLoading } from "../atoms/globalAtoms";

export const isAuthButtonLoading = selector({
  key: "authButtonLoadingState",
  get: ({ get }) => {
    const loading = get(authButtonLoading);

    return loading;
  },
});
