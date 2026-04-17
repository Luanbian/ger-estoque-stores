export interface Catalog {
  categories: CatalogCategory[] | null;
  items: CatalogItem[] | null;
}

export interface CatalogCategory {
  _id: string;
  tenantId: string;
  showcaseId: string;
  name: string;
}

export interface CatalogItem {
  _id: string;
  tenantId: string;
  showcaseId: string;
  title: string;
  description?: string;
  image?: string;
  categoryId?: string;
  pricing?: {
    basePriceInCents: number;
    finalPriceInCents?: number;
    discount?: {
      type: "percentage" | "fixed";
      value: number;
    };
    installments?: {
      maxInstallments: number;
      installmentPriceInCents: number;
      interestFree: boolean;
    };
  };
  createdAt: Date;
  updatedAt: Date;

  quantity: number;
}

export interface CatalogStore {
  catalog: Catalog | null;
  request: {
    success: boolean;
    message: string | null;
  };
  setCatalog: (showcaseId: string) => Promise<void>;
  setRequest: (request: { success: boolean; message: string | null }) => void;
  selectCatalogCategory: (categoryId: string | null) => Promise<void>;
}
