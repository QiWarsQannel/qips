---
title: QIP144: Add mooAaveBTC as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0x7cc75541cf15a0420cb4acd44a194e20edcc83fc92b22e69abfba9a2f012edcf
start: 2022-08-28T21:11:37.000Z
end: 2022-09-01T05:00:00.000Z
---
mooAaveBTC is a receipt token from Beefy Finance, which autocompounds yield earned on BTC on Aave Optimism. This yield comes from both interest on Aave as well as added OP incentives.

At the time of writing, mooAaveBTC earns 2.90% APY, with $38k TVL on Beefy out of Aave’s $72.39M TVL for this asset.

### Proposed risk parameters

* 135% minimum collateral to debt ratio
* Minimum borrow: 10 MAI
* Maximum borrow per vault: 300,000 MAI

*note: mooAaveBTC’s risk rating is a C, mainly due to the Beefy strategy’s recent creation. This strategy exists on other chains (such as Avalanche). Therefore, the risk associated with this strategy is mitigated by the safety history of its counterparts on other chains.

### Motivation

* Appeal to the user rush that is currently farming OP incentives on Aave
* Grow TVL on Optimism
* Increase revenue
* Strengthen relationship with Beefy

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Add mooAaveBTC as collateral
* Further discussions needed

Risk grading: C

https://riskmanagement.qidao.community/en/tokens/mooaavebtc-optimism
---
| Choices | Score |
| --- | --- |
| Approve proposal | 99.68% |
| Further discussions needed | 0.32% |

