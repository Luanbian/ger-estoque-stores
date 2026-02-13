export interface Showcase {
  _id: string;
  tenantId: string;
  name: string;
  hash: string;
  banner: string;
  logo: string;
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
}
