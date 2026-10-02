import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ShowcaseStore } from "./types";
import { getSubdomain } from "@/utils/getSubdomain";
import { getShowcase } from "./request";

export const useShowcaseStore = create<ShowcaseStore>()(
  persist(
    (set) => ({
      showcase: null,
      request: {
        success: true,
        message: null,
      },

      fetchShowcase: async () => {
        const domain = getSubdomain();
        if (!domain) {
          set({
            request: {
              success: false,
              message:
                "Loja não identificada. Acesse pelo endereço da loja, por exemplo minhaloja.localhost.",
            },
          });
          return;
        }

        set({ request: { success: true, message: null } });
        const data = await getShowcase(domain);
        if ("success" in data) {
          set({
            request: {
              success: data.success,
              message: data.message,
            },
          });
          return;
        }
        set({ showcase: data });
      },
    }),
    {
      name: "showcase-store",
      version: 1,
      partialize: (state) => ({ showcase: state.showcase }),
    },
  ),
);
