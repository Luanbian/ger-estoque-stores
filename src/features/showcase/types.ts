export interface Showcase {
  _id: string;
  tenantId: string;
  domain: string;
  name: string;
  hash: string;
  banner: string;
  logo: string;
  showName: boolean;
  showStories: boolean;
  presentation: {
    title: string;
    image: string;
    sections: {
      title: string;
      description: string;
    }[];
  };
  body: {
    title: string;
    image: string;
    section: {
      title: string;
      description: string;
    };
  };
  testimonials: {
    title: string;
    sections: {
      title: string;
      description: string;
    }[];
  };
  stories?: {
    title: string;
    thumbnail: string;
    items: {
      title: string;
      subtitle: string;
      profileImage: string;
      image: string;
    }[];
  }[];
}

export interface ShowcaseStore {
  showcase: Showcase | null;
  request: {
    success: boolean;
    message: string | null;
  };
  setShowcase: (showcase: Showcase | null) => void;
  setRequest: (request: { success: boolean; message: string | null }) => void;
}
