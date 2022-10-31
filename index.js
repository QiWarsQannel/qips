import { request, gql } from 'graphql-request'
import fs from 'fs';


const query = gql`
query {
    proposals(first: 9999, where: {space: "qidao.eth"}, orderBy: "created", orderDirection: asc) {
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
`

request('https://hub.snapshot.org/graphql', query).then((data) => {
    const proposals = data["proposals"];

    proposals.forEach((proposal,k) => {

    const choices = proposal["choices"];
    const scores = proposal["scores"];
    const total = proposal["scores_total"]
    let table = "";

    choices.forEach((choice,i) => {
        table+="| "+choice+" | "+Number((scores[i]*100)/total).toFixed(2)+"% |\n";
    })
    
    const content = 
`---
title: ${proposal["title"]}
url: ${proposal["link"]}
start: ${new Date(proposal["start"]*1000).toISOString()}
end: ${new Date(proposal["end"]*1000).toISOString()}
---
${proposal["body"]}
---
| Choices | Score |
| --- | --- |
${table}
`;
let filename = proposal["title"].replace(/[^a-z0-9]/gi, '_').toLowerCase();

    try {
        fs.writeFileSync("proposals/"+String(k+1).padStart(4, '0')+"-"+filename+'.md', content);
    // file written successfully
    } catch (err) {
        console.error(err);
    }
});
})