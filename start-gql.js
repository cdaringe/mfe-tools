const cp = require("child_process");
const fs = require("fs");

const sh = (cmd, opts) => cp.execSync(cmd, opts);

const pgTmpDir = "pg_graphql-master";
const pgGqlDirname = "pg_graphql";
const pgGraphqlUrl =
  "https://codeload.github.com/supabase/pg_graphql/tar.gz/master";

sh(`curl ${pgGraphqlUrl} | tar -xz`, {});
sh(`rm -rf ${pgGqlDirname} && mv ${pgTmpDir} ${pgGqlDirname}`);

const dockerSqlFilename = `${pgGqlDirname}/dockerfiles/db/setup.sql`;
const dockerSqlRaw = fs.readFileSync(dockerSqlFilename, "utf-8");
const [preTableSection] = dockerSqlRaw.split("create table account");

const thisProjectsSql = fs.readFileSync("schema.sql");
fs.writeFileSync(
  dockerSqlFilename,
  [preTableSection, `\n-- mfe schema`, thisProjectsSql].join("\n")
);

cp.spawn("docker-compose", ["up"], { cwd: pgGqlDirname, stdio: "inherit" });
