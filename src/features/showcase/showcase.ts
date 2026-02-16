import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Showcase, ShowcaseStore } from "./types";
import { getSubdomain } from "@/utils/getSubdomain";
import { getShowcase } from "./request";

export const useShowcaseStore = create<ShowcaseStore>()(
  persist(
    (set, get) => ({
      showcase: null,

      setShowcase: async () => {
        if (get().showcase?._id) {
          set({
            showcase: {
              ...get().showcase!,
            },
          });
          return;
        }
        const data: Showcase = await getShowcase(getSubdomain());
        set({ showcase: data });
      },
    }),
    {
      name: "showcase-store",
    },
  ),
);
