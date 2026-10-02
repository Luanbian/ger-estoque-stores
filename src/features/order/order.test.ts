import { beforeEach, describe, expect, it, vi } from "vitest";
import type { CatalogItem } from "../catalog/types";
import type { CreateOrderPayload } from "./types";
import { useOrderStore } from "./order";
import { postMakeOrder } from "./requests";

vi.hoisted(() => {
  const storage = new Map<string, string>();
  vi.stubGlobal("window", {
    localStorage: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
      removeItem: (key: string) => storage.delete(key),
    },
  });
});

vi.mock("./requests", () => ({ postMakeOrder: vi.fn() }));

const item: CatalogItem = {
  _id: "1",
  tenantId: "tenant",
  showcaseId: "showcase",
  title: "Camiseta",
  pricing: { basePriceInCents: 5000, finalPriceInCents: 4000 },
  createdAt: new Date(),
  updatedAt: new Date(),
};

const payload: CreateOrderPayload = {
  tenantId: "tenant",
  domain: "loja",
  totalAmount: 4000,
  items: [],
  customer: { name: "Ana", email: null, phone: "11912345678" },
};

beforeEach(() => {
  useOrderStore.setState({ products: [] });
  vi.mocked(postMakeOrder).mockReset();
});

describe("useOrderStore", () => {
  it("accumulates quantity when the same item is added twice", () => {
    useOrderStore.getState().addItem(item);
    useOrderStore.getState().addItem(item);

    expect(useOrderStore.getState().products).toEqual([
      { ...item, quantity: 2 },
    ]);
  });

  it("totals with the final price when there is a discount", () => {
    useOrderStore.getState().addItem(item);
    useOrderStore.getState().addItem(item);

    expect(useOrderStore.getState().totalPrice()).toBe(8000);
  });

  it("clears the cart only when the order succeeds", async () => {
    useOrderStore.getState().addItem(item);

    vi.mocked(postMakeOrder).mockResolvedValueOnce({
      success: false,
      message: "erro",
    });
    await useOrderStore.getState().makeOrder(payload);
    expect(useOrderStore.getState().products).toHaveLength(1);

    vi.mocked(postMakeOrder).mockResolvedValueOnce({
      success: true,
      message: "ok",
    });
    await useOrderStore.getState().makeOrder(payload);
    expect(useOrderStore.getState().products).toEqual([]);
  });
});
