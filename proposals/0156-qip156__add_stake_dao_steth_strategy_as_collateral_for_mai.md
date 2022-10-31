---
title: QIP156: Add Stake DAO stETH Strategy as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0xcaa45205aae09d0ec987eecfb53c61b34cefb2094cc9d3f7a845789af466b22d
start: 2022-09-12T11:22:59.000Z
end: 2022-09-15T11:00:00.000Z
---
Stake DAO’s stETH strategy invests ETH stablecoins (ETH, stETH) into the Curve Liquidity Pool (steth). The strategy earns trading fees based on the pool trading volume, and it earns additional CRV token rewards from Curve. The strategy rewards are periodically compounded to maximize returns.

At the time of writing, this strategy is meaning 6.07% APY and has 873 steCRV in TVL.

### Proposed risk parameters

* 125% minimum collateral to debt ratio
* Minimum borrow: 10,000 MAI
* Maximum borrow per vault: 20M MAI

### Motivation

* Grow TVL on Ethereum
* Increase revenue
* Strengthen relationship with Stake DAO
* Stake DAO will be using some of their CRV voting power to vote for QiDao’s MAI-FRAXBP LP on Curve

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Add StakeDAO stETH as collateral
* Further discussions needed

Risk grading: C+

https://riskmanagement.qidao.community/en/tokens/curve-steth-ethereum 
---
| Choices | Score |
| --- | --- |
| Add StakeDAO stETH as collateral | 99.91% |
| Further discussions needed | 0.09% |

