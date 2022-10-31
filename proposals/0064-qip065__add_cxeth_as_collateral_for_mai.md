---
title: QIP065: Add cxETH as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0x244c00658c55c32a207daefcc2cca2bf8c0895c89acb084de2dcc11b4643f734
start: 2022-02-05T12:00:00.000Z
end: 2022-02-10T12:00:00.000Z
---
This proposal is to add cxETH (ETH wrapped by CelsiusX) as collateral for MAI.

### Summary

Celsius is launching CelsiusX to bridge the CeFi and DeFi worlds. CelsiusX will be wrapping and bridging tokens to Polygon—both ERC20 tokens as well as non-ERC20 tokens. The purpose is to foster liquidity and adoption in the Polygon ecosystem by partnering with DeFi protocols. The initial wrapped tokens will be cxADA, cxDOGE, and cxETH (utilizing Chainlink Proof of Reserve—reserve info here: https://celsiusx.io/reserves).
 
CelsiusX would love to partner with QiDao to use its cxTokens as collateral for MAI. We believe this will create utility and adoption for both parties—increasing the liquidity for MAI (as the premier stablecoin on Polygon) and for cxTokens (as a vehicle to bring retail and institutional users onto Polygon).

### Proposal details:

* Initial vault deposit: $20-25mm of cxETH by CelsiusX to mint MAI
* The initial MAI minted will be used to provide MAI liquidity on AMMs

### Quorum Standards

The option with the most votes will be adopted. 

A weighted average will be used to decide on the minimum CDR if the following conditions are met:
* The options to add cxETH collectively outweigh the option to not add cxETH
* The option to not add cxETH receives fewer votes than any option to add cxETH
 
### Options
* Add cxETH at 130% min CDR
* Add cxETH at 135% min CDR
* Add cxETH at 140% min CDR
* Further discussion needed

*min CDR = minimum collateral to debt ratio
---
| Choices | Score |
| --- | --- |
| Add cxETH at 130% min CDR | 96.55% |
| Add cxETH at 135% min CDR | 0.68% |
| Add cxETH at 140% min CDR | 0.15% |
| Further discussion needed | 2.62% |

