---
title: QIP 014: Incentivize collateral vaults to borrow MAI
url: https://snapshot.org/#/qidao.eth/proposal/QmXz4Stz71nEgzsADZ1wbhABpNHTVdSBjSba9ofjMgMMht
start: 2021-08-03T22:00:00.000Z
end: 2021-08-07T22:00:00.000Z
---
### Summary:

How might we incentivize borrowing MAI through vaults and attract new users?

Currently around 90% of the MAI in circulation was minted through the USDC swap. We want to increase the amount of MAI in circulation minted through vaults. Having more collateral in our vaults will help grow our TVL as well as increase the protocol repayment fees (30% of which are distributed to Qi stakers).

We also want to attract new users to try our vaults and become part of the QiDao community. With attractive borrowing offers we should be able to increase the number of users, TVL, MAI in circulation, and protocol revenue. 

### Incentive Proposal

* Minting MAI through collateral vaults would be incentivized for vaults whose collateral to debt ratio is between 25% and 270% above the liquidation ratio.
* The rewards would last as long as they are net profitable to the protocol.

### How it would work:

Users will be eligible for rewards for opening vaults and borrowing MAI through a boosted vault type. These rewards will come in the form of Qi. These incentives will transform QiDao vaults from being 0% loans to negative interest loans (getting paid to take loans) during the boost period. Users would get rewarded based on the amount of the MAI they borrow through a specific collateral type. For example, if a user minted 10% of the MAI attributed to WETH collateral, they would receive 10% of the Qi / block rewards for that vault type.

### Additional info & Resources:

Current collateral types accepted on QiDao are MATIC, wETH, AAVE, LINK, and CRV (as well as their amTokens if they have one). We will have weekly QIPs for our community to vote on collaterals they would like to see added.

Partner projects could incentivize their community to lock up their tokens in QiDao vaults by adding additional rewards. Project boosts will be separate from the Qi rewards. The projects will determine the amount and length of their boost. Their boost would likely be paid in their token.

Qi emissions currently sit around 3.34/block. Assuming 1 to 2 debt ceiling increases per week, the protocol would accrue more repayment fee revenue than it would spend in Qi incentives at 0.05 Qi / block (at $1.07 Qi price) for each vault type.

Vault incentives would be claimed each week on Wednesday for the previous week. Users will be able to claim incentives by going to the rewards page and clicking claim on the vault incentives line item.

### Motivation

* Promote locking collateral to borrow MAI
* Attract new users
* Increase QiDao TVL
* Introduce negative interest rates (earning yield for borrowing) to vault owners

Option 1: Incentivize minting MAI through vaults with 0.1 Qi/block
Option 2: Incentivize minting MAI through vaults with 0.05 Qi/block
Option 3: Do not incentivize borrowing MAI through vaults

---
| Choices | Score |
| --- | --- |
| Option 1 | 29.95% |
| Option 2 | 61.55% |
| Option 3 | 8.50% |

