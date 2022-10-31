---
title: QIP101:  Add xxDAI as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0xa52c446526069030261027ee063aa3c451db5992e2e9982abb1083ca61708aa0
start: 2022-05-16T15:56:34.000Z
end: 2022-05-19T16:00:00.000Z
---
### Proposal

xxDai is an interest-bearing derivative of Maker’s Dai and is provided by Tetu. This proposal aims to add xxDai as a collateral option for minting MAI.

### Risks and Benefits

Tetu’s xxDai strategy is an autompounding version of Tetu's xDai, which itself uses a vault feature the Tetu protocol calls Strategy Splitter. The Strategy Splitter, or Splitter for short, allows for the implementation of multiple strategies to generate yield on the underlying Dai across multiple platforms, reducing yield volatility and boosting returns. On Polygon, this strategy leverages Impermax and Aave, and developers have proposed adding Market.xyz, a protocol with which members of the QiDao community should be familiar as it is currently used to leverage borrowing of partner protocols’ tokens which do not currently have a Chainlink oracle and are therefore disqualified from being used as collateral to mint Mai. 

The Tetu team has shown to be open to community suggestions on other potential destinations for the Splitter, including Aave v3.More information on Strategy Splitter can be found on Tetu’s Medium article on the subject.

See the xxDai Risk Assessment link located under Resources for a full list of risks and benefits.

### Quorum Standards

The option with the most votes will be adopted. A weighted average will be used to decide on the minimum CDR (collateral to debt ratio) if the following conditions are met:
• The options to add xxDai collectively outweigh the option to not add xxDai.
• The option to not add xxDai receives more votes than any option to add xxDai.

### Options

• Add xxDai at 110% min CDR
• Add xxDai at 120% min CDR
• Add xxDai at 130% min CDR
• Further discussion needed

### Resources

• xxDai Risk Assessment by @geekvine and @rob(ooor): https://cryptpad.fr/pad/#/3/pad/view/fcfbe14a268eff123778493e00a334cf/
• xxDai Vault: https://app.tetu.io/vault/0xf52b3250e026e0307d7d717ae0f331baaa4f83a8

• xxDai Contract: 0xf52B3250E026E0307d7d717AE0f331baAA4F83a8 
---
| Choices | Score |
| --- | --- |
| Add xxDai at 110% min CDR | 59.48% |
| Add xxDai at 120% min CDR | 4.59% |
| Add xxDai at 130% min CDR | 1.38% |
| Further discussions needed | 34.55% |

