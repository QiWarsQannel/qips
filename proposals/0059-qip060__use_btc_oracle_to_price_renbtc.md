---
title: QIP060: Use BTC oracle to price renBTC
url: https://snapshot.org/#/qidao.eth/proposal/0x987b4e6a58c6c6ba1372d8683a8b0b03175505b2255eede9d73a6db9982ef2ac
start: 2022-01-23T23:00:00.000Z
end: 2022-01-27T23:00:00.000Z
---
This proposal is to use BTC price oracles for renBTC.

Currently, there are no renBTC price oracles for us to use on Polygon vaults. This restricts QiDao from adding WBTC/renBTC Curve LPs and its derivatives (like the StakeDAO BTC strategy) as collateral for MAI.

If this proposal is approved, we would take renBTC to have the exact price of BTC. The risk involved is that Ren Project is exploited or that renBTC depegs from BTC. 

BTC and renBTC tend to trade fairly closely. QiDao's Chainlink contact has also advised us to use their BTC oracle to price renBTC.

Link to Ren Project: https://renproject.io/

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Use BTC oracle for renBTC
* Further discussions needed
---
| Choices | Score |
| --- | --- |
| Use BTC oracle for renBTC | 88.82% |
| Further discussions needed | 11.18% |

