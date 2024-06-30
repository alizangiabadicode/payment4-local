export interface Post {
  cursor: string;
  node: {
    date: string;
    uri: string;
    link: string;
    title: string;
    id: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
  };
}
