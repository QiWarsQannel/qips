---
title: QIP143: Add mooAaveETH as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0x335397b92c625cf75f1e1a7b4ca714600d9f2551d2c825aa059af27bbb7fb190
start: 2022-08-28T21:09:54.000Z
end: 2022-09-01T05:00:00.000Z
---
mooAaveETH is a receipt token from Beefy Finance, which autocompounds yield earned on ETH on Aave Optimism. This yield comes from both interest on Aave as well as added OP incentives.

At the time of writing, mooAaveETH earns 3.83% APY, with $95k TVL on Beefy out of Aave’s $132.62M TVL for this asset.

### Proposed risk parameters

* 135% minimum collateral to debt ratio
* Minimum borrow: 10 MAI
* Maximum borrow per vault: 1M MAI

*note: mooAaveETH’s risk rating is a C+, mainly due to the Beefy strategy’s recent creation. This strategy exists on other chains (such as Avalanche). Therefore, the risk associated with this strategy is mitigated by the safety history of its counterparts on other chains.

### Motivation

* Appeal to the user rush that is currently farming OP incentives on Aave
* Grow TVL on Optimism
* Increase revenue
* Strengthen relationship with Beefy

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Add mooAaveETH as collateral
* Further discussions needed

Risk grading: C+

https://riskmanagement.qidao.community/en/tokens/mooaaveeth-optimism
---
| Choices | Score |
| --- | --- |
| Approve proposal | 99.69% |
| Further discussions needed | 0.31% |

