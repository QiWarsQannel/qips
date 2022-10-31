---
title: QIP161: Add Support for xcDOT Vaults on StellaSwap
url: https://snapshot.org/#/qidao.eth/proposal/0x866ad8acef86fdbe5d09d0fe9bf48ddc7e3d78165d9c1f016eb40c0e69b0c7fc
start: 2022-09-29T10:50:04.000Z
end: 2022-10-02T10:00:00.000Z
---
Polkadot is the 11th largest cryptocurrency by market cap, with liquidity on every major exchange. On Stellaswap (the most convenient exchange for liquidating xcDOT) there is at the time of writing this almost $2m in liquidity. Note that transferring xcDOT is fast, cheap, and occurs on the Polkadot network's shared security, for liquidators that would prefer to offramp their DOT from Moonbeam.

### Risk analysis

xcDOT scores a B+ on QiDao's risk management matrix: https://riskmanagement.qidao.community/en/tokens/xcdot-moonbeam

### Proposal: 

In line with other B+ assets with deep liquidity, add xcDOT as collateral for MAI on Moonbeam with the following parameters:
* 130% CDR
* 1% interest rate (to QiDao)
* 0.5% repayment fee (to Stellaswap)

Other tokens that have a 130% CDR and a B+ risk rating:
* Polygon WBTC
* Optimism WETH
* Avax WETH
* Fantom WFTM
* Arbitrum WETH
* Avax WAVAX
* Polygon WMATIC
* BNB CAKE 

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Add support for xcDOT
* Further discussions needed
---
| Choices | Score |
| --- | --- |
| Accept Support for xcDOT | 99.84% |
| Further discussions needed | 0.16% |

