declare module '*.graphql' {
  import { DocumentNode, DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema;
}

declare module '*.gql' {
  const Schema: DocumentNode;

  export = Schema;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
