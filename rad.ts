import type { Task, Tasks } from "https://deno.land/x/rad@v6.7.1/src/mod.ts";

const pgGqlDirname = "pg_graphql";

const downloadPgApiResources: Task = {
  async fn({ sh, fs }) {
    const pgGraphqlUrl =
      "https://codeload.github.com/supabase/pg_graphql/tar.gz/master";
    const pgTmpDir = "pg_graphql-master";
    try {
      // download latest version of repo
      await sh(`curl ${pgGraphqlUrl} | tar -xz`);
      await sh(`rm -rf ${pgGqlDirname} && mv ${pgTmpDir} ${pgGqlDirname}`);

      // update setup.sql
      const dockerSqlFilename = `${pgGqlDirname}/dockerfiles/db/setup.sql`;
      const dockerSqlRaw = await fs.readFile(dockerSqlFilename);
      const [preTableSection] = dockerSqlRaw.split("create table account");

      const thisProjectsSql = await fs.readFile("schema.sql");
      await fs.writeFile(
        dockerSqlFilename,
        [preTableSection, `\n-- mfe schema`, thisProjectsSql].join("\n")
      );
    } finally {
      await sh(`rm -rf ${pgTmpDir}`);
    }
  },
};

const dev: Task = `cd ${pgGqlDirname} && docker-compose up`;

export const tasks: Tasks = {
  ...{ dlp: downloadPgApiResources, downloadPgApiResources },
  dev,
};
