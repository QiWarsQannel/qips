import pkg from "graphql-request";
import fs from "fs";
const { request, gql } = pkg;

const query = gql`
  query {
    proposals(
      first: 9999
      where: { space: "qidao.eth" }
      orderBy: "created"
      orderDirection: asc
    ) {
      title
      body
      scores_total
      choices
      scores
      scores_total
      link
      start
      end
    }
  }
`;

request("https://hub.snapshot.org/graphql", query).then((data) => {
  const proposals = data["proposals"];
  let summary = 
`# Summary

## QiDAO Improvement Proposals

`;

  proposals.forEach((proposal, k) => {
    const choices = proposal["choices"];
    const scores = proposal["scores"];
    const total = proposal["scores_total"];
    let table = "";

    choices.forEach((choice, i) => {
      table +=
        "| " +
        choice +
        " | " +
        Number((scores[i] * 100) / total).toFixed(2) +
        "% |\n";
    });

    const content = `
# [${proposal["title"]}](${proposal["link"]})

---
| Start | End |
| --- | --- |
| ${new Date(proposal["start"] * 1000).toISOString()} | ${new Date(proposal["end"] * 1000).toISOString()} |


${proposal["body"]}

---
| Choices | Score |
| --- | --- |
${table}
`;
    let filename = proposal["title"].replace(/[^a-z0-9]/gi, "_").toLowerCase();
    let filepath =
      "proposals/" + String(k + 1).padStart(4, "0") + "-" + filename + ".md";
      summary+="* ["+proposal["title"]+"]("+filepath+")\n";

    try {
      fs.writeFileSync(filepath, content);
      // file written successfully
    } catch (err) {
      console.error(err);
    }
  });
  try {
    fs.writeFileSync("summary.md", summary);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
  let last_updated = new Date().toISOString();
  let readme =
  `# QiDAO Improvement Proposals

  Full list of QIPs (QiDAO Improvement Proposals). Data generated from the official snapshot with the intent of making it easier to search through all the proposals.
  
  ---
  *Last updated at ${last_updated}*`;

  try {
    fs.writeFileSync("README.md", readme);
    fs.writeFileSync("proposals/README.md", readme);
    // file written successfully
  } catch (err) {
    console.error(err);
  }

});
