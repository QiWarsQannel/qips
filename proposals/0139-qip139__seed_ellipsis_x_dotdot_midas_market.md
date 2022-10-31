---
title: QIP139: Seed Ellipsis x Dotdot Midas Market
url: https://snapshot.org/#/qidao.eth/proposal/0x24782fe7e9648d9c52974ad031843b64f42ec6cd17126eb97d6f7d9eba95be82
start: 2022-08-18T04:16:35.000Z
end: 2022-08-22T16:00:00.000Z
---
### Proposal

Deposit 100,000 MAI into the Ellipsis x DotDot Midas Capital lending pools on BNB Chain so users can borrow MAI against their collateral and earn yield on MAI deposits. After the initial deposit, it will be managed similar to debt ceiling increases, based on peg, asset liquidity, etc.

### Background on Midas

Midas Capital is an isolated money market platform that enables permissionless pool creation, novel forms of yield generation, and more granular risk management.

### Risk considerations

The main risk of this proposal is around the risk of the Ellipsis x DotDot pool in going into bad debt, where a borrower’s collateral is insufficient to be liquidated and repay the borrower’s loan. These risks are mitigated by:
* Setting up LTV’s (loan to value) to allow for a sufficient margin to liquidate the borrower’s collateral to repay the loan
* Utilizing reliable oracles and price feeds – Midas Capital uses ChainLink oracles, DIA oracles, or custom TWAP’s
* Setting supply caps on collateral as a function of available DEX liquidity

### Motivation

* Allow users to borrow MAI against Ellipsis/DotDot LP positions and increase capital efficiency
* Enable users to participate to amplify stablecoin LP yields
* Propagate MAI and create additional use cases for the stablecoin

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Approve proposal
* Further discussions needed 
---
| Choices | Score |
| --- | --- |
| Approve proposal | 99.86% |
| Further discussions needed | 0.14% |

