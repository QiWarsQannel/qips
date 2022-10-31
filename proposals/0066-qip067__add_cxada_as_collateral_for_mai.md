---
title: QIP067: Add cxADA as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0x87381f9901a16e925ff037650dd966784f1149111b7c42d8cca9da2d9bd512f2
start: 2022-02-05T12:02:00.000Z
end: 2022-02-10T12:02:00.000Z
---
This proposal is to add cxADA (ADA wrapped by CelsiusX) as collateral for MAI.

### Summary

Celsius is launching CelsiusX to bridge the CeFi and DeFi worlds. CelsiusX will be wrapping and bridging tokens to Polygon—both ERC20 tokens as well as non-ERC20 tokens. The purpose is to foster liquidity and adoption in the Polygon ecosystem by partnering with DeFi protocols. The initial wrapped tokens will be cxADA, cxDOGE, and cxETH (utilizing Chainlink Proof of Reserve—reserve info here: https://celsiusx.io/reserves).

CelsiusX would love to partner with QiDao to use its cxTokens as collateral for MAI. We believe this will create utility and adoption for both parties—increasing the liquidity for MAI (as the premier stablecoin on Polygon) and for cxTokens (as a vehicle to bring retail and institutional users onto Polygon).

### Proposal details:

* Initial vault deposit: $20-25mm of cxADA by CelsiusX to mint MAI
* The initial MAI minted will be used to provide MAI liquidity on AMMs

### Quorum Standards

The option with the most votes will be adopted.

A weighted average will be used to decide on the minimum CDR if the following conditions are met:

* The options to add cxADA collectively outweigh the option to not add cxADA
* The option to not add cxADA receives fewer votes than any option to add cxADA

### Options

* Add cxADA at 130% min CDR
* Add cxADA at 135% min CDR
* Add cxADA at 140% min CDR
* Add cxADA at 145% min CDR
* Further discussion needed

*min CDR = minimum collateral to debt ratio
---
| Choices | Score |
| --- | --- |
| Add cxADA at 130% min CDR | 92.27% |
| Add cxADA at 135% min CDR | 4.56% |
| Add cxADA at 140% min CDR | 0.01% |
| Add cxADA at 145% min CDR | 0.38% |
| Further discussion needed | 2.78% |

