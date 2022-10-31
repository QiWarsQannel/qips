---
title: QIP145: Add mooAaveDAI as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0x47cb775fd7e24e13cb9946cb851b0c85b7c82854377c41601d480fe7844d4901
start: 2022-08-28T21:32:00.000Z
end: 2022-09-01T05:00:00.000Z
---
mooAaveDAI is a receipt token from Beefy Finance, which autocompounds yield earned on DAI on Aave Optimism. This yield comes from both interest on Aave as well as added OP incentives.

At the time of writing, mooAaveDAI earns 4.05% APY, with $4k TVL on Beefy out of Aave’s $374.91M TVL for this asset.

### Proposed risk parameters

* 110% minimum collateral to debt ratio
* Minimum borrow: 10 MAI
* Maximum borrow per vault: 500,000 MAI

*note: mooAaveDAI’s risk rating is a C, mainly due to the Beefy strategy’s recent creation. This strategy exists on other chains (such as Avalanche). Therefore, the risk associated with this strategy is mitigated by the safety history of its counterparts on other chains. Additionally, the underlying asset in question is a long-standing stablecoin. This reduces, but does not remove, the chances of liquidation events.

### Motivation

* Appeal to the user rush that is currently farming OP incentives on Aave
* Grow TVL on Optimism
* Increase revenue
* Strengthen relationship with Beefy

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Add mooAaveDAI as collateral
* Further discussions needed

Risk grading: C

https://riskmanagement.qidao.community/en/tokens/mooaavedai-optimism 
---
| Choices | Score |
| --- | --- |
| Approve proposal | 99.69% |
| Further discussions needed | 0.31% |

