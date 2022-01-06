import { Layout } from "../Layout";
import { MfeList } from "../MfeList";

export default function Web() {
  return (
    <Layout>
      <h1>Deploy MicroFrontends</h1>
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
