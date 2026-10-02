export interface Catalog {
  categories: CatalogCategory[] | null;
  items: CatalogItem[] | null;
}

export interface CatalogCategory {
  _id: string;
  tenantId: string;
  showcaseId: string;
  name: string;
  fatherCategoryId?: string;
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
}

export interface CatalogStore {
  catalog: Catalog | null;
  selectedCategoryId: string | null;
  request: {
    success: boolean;
    message: string | null;
  };
  setCatalog: (showcaseId: string) => Promise<void>;
  selectCatalogCategory: (categoryId: string | null) => Promise<void>;
}
