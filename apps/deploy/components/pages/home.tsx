import { Layout } from "../Layout";
import { MfeList } from "../MfeList";
import { useQuery } from "mfe-admin-gql-client";

export default function Web() {
  const query = useQuery({
    suspense: false,
  });
  if (query.$state.isLoading) return <p>Loading...</p>;
  return (
    <Layout>
      <h1>Deploy MicroFrontends</h1>
      <pre>
        {query.allMfes().edges?.map((e) => {
          return e.node.version; // 😵
        })}
      </pre>
      <MfeList
        mfeAssets={[
          {
            name: "abc",
            version: "123",
            urls: {
              umd: "",
              es: "",
            },
          },
          {
            name: "def",
            version: "456",
            urls: {
              umd: "",
              es: "",
            },
          },
          {
            name: "qwfpqwfpqwfpqwfpwfqfpqwfpqwfpqwfpqwpf",
            version: "456",
            urls: {
              umd: "",
              es: "",
            },
          },
        ]}
      />
    </Layout>
  );
}
