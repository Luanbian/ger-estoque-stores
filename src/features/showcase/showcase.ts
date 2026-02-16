import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ShowcaseStore } from "./types";
import { getSubdomain } from "@/utils/getSubdomain";
import { getShowcase } from "./request";

export const useShowcaseStore = create<ShowcaseStore>()(
  persist(
    (set, get) => ({
      showcase: null,
      request: {
        success: true,
        message: null,
      },

      setShowcase: async () => {
        if (get().showcase?._id) {
          set({
            showcase: {
              ...get().showcase!,
            },
          });
          return;
        }
        const data = await getShowcase(getSubdomain());
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

      setRequest: (request) => set({ request }),
    }),
    {
      name: "showcase-store",
    },
  ),
);
