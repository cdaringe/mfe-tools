/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  DateTime: string;
  JSON: any;
  UUID: any;
}

export interface MfeOrderBy {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  urlEs?: InputMaybe<OrderByDirection>;
  urlUmd?: InputMaybe<OrderByDirection>;
  version?: InputMaybe<OrderByDirection>;
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = "AscNullsFirst",
  AscNullsLast = "AscNullsLast",
  DescNullsFirst = "DescNullsFirst",
  DescNullsLast = "DescNullsLast",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  BigInt: true,
  Boolean: true,
  Cursor: true,
  DateTime: true,
  Float: true,
  ID: true,
  Int: true,
  JSON: true,
  OrderByDirection: true,
  String: true,
  UUID: true,
};
export const generatedSchema = {
  Mfe: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    id: { __type: "String!" },
    name: { __type: "String!" },
    nodeId: { __type: "ID!" },
    updatedAt: { __type: "DateTime!" },
    urlEs: { __type: "String!" },
    urlUmd: { __type: "String!" },
    version: { __type: "String!" },
  },
  MfeConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[MfeEdge]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int!" },
  },
  MfeEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Mfe" },
  },
  MfeOrderBy: {
    createdAt: { __type: "OrderByDirection" },
    id: { __type: "OrderByDirection" },
    name: { __type: "OrderByDirection" },
    updatedAt: { __type: "OrderByDirection" },
    urlEs: { __type: "OrderByDirection" },
    urlUmd: { __type: "OrderByDirection" },
    version: { __type: "OrderByDirection" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String!" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    allMfes: {
      __type: "MfeConnection",
      __args: {
        after: "Cursor",
        before: "Cursor",
        first: "Int",
        last: "Int",
        orderBy: "[MfeOrderBy!]",
      },
    },
    mfe: { __type: "Mfe", __args: { nodeId: "ID!" } },
  },
  subscription: {},
} as const;

export interface Mfe {
  __typename?: "Mfe";
  createdAt: ScalarsEnums["DateTime"];
  id: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  nodeId: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["DateTime"];
  urlEs: ScalarsEnums["String"];
  urlUmd: ScalarsEnums["String"];
  version: ScalarsEnums["String"];
}

export interface MfeConnection {
  __typename?: "MfeConnection";
  edges?: Maybe<Array<Maybe<MfeEdge>>>;
  pageInfo: PageInfo;
  totalCount: ScalarsEnums["Int"];
}

export interface MfeEdge {
  __typename?: "MfeEdge";
  cursor: ScalarsEnums["String"];
  node?: Maybe<Mfe>;
}

export interface PageInfo {
  __typename?: "PageInfo";
  endCursor: ScalarsEnums["String"];
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  startCursor: ScalarsEnums["String"];
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  allMfes: (args?: {
    after?: Maybe<Scalars["Cursor"]>;
    before?: Maybe<Scalars["Cursor"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Array<MfeOrderBy>>;
  }) => Maybe<MfeConnection>;
  mfe: (args: { nodeId: Scalars["ID"] }) => Maybe<Mfe>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Mfe: Mfe;
  MfeConnection: MfeConnection;
  MfeEdge: MfeEdge;
  Mutation: Mutation;
  PageInfo: PageInfo;
  Query: Query;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "Mfe"
  | "MfeConnection"
  | "MfeEdge"
  | "Mutation"
  | "PageInfo"
  | "Query"
  | "Subscription";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  OrderByDirection: OrderByDirection | undefined;
}
