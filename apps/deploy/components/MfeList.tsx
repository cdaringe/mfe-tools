import { MfeAsset } from "mfe-core";
type Props = {
  mfeAssets: MfeAsset[];
};
export const MfeList: React.FC<Props> = ({ mfeAssets }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {mfeAssets.map((asset) => {
          return (
            <tr key={asset.name}>
              <td
                title={asset.name}
                style={{
                  maxWidth: 250,
                  whiteSpace: "nowrap",
                  overflowX: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {asset.name}
              </td>
              <td
                style={{
                  display: "block",
                  maxWidth: "calc(100vw - 500px)",
                  overflow: "scroll",
                  whiteSpace: "nowrap",
                }}
              >
                {/* <input type="range" value="5" min="0" max="10" /> */}
                {[...new Array(20)].map((_, i) => {
                  return <button key={i} />;
                })}
                {[...new Array(10)].map((_, i) => {
                  return <button key={i * 100} type="button" />;
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
