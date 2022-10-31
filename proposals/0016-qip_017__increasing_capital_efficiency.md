---
title: QIP 017: Increasing Capital Efficiency
url: https://snapshot.org/#/qidao.eth/proposal/QmcXKgpEFcptZgr8D8MqYUKbpKf5MrJdSqcYaXCQFWPvPC
start: 2021-08-11T02:00:00.000Z
end: 2021-08-15T02:00:00.000Z
---
### Summary

Through discussions on Discord and Telegram, we’ve seen desires to give users a higher Loan-to-Value (LTV) ratio. Increasing the LTV ratio for vaults would allow users to increase the amount of MAI they could borrow against their collateral, improving their capital efficiency. QiDao could achieve this by lowering liquidation ratios.

### Example
A user has $900 worth of tokens sitting in a QiDao vault

With a liquidation ratio of 150% the user would be allowed to borrow a maximum of $600 worth of MAI against their collateral
With a liquidation ratio of 120% the user would be allowed to borrow a maximum of $750 worth of MAI against their collateral

With the lower liquidation ratio the user can access more of the value of their tokens locked in a vault. 

### Current liquidation ratios per collateral
* MATIC - 150%
* WETH - 150%
* LINK - 150%
* AAVE - 150%
* CRV - 150%
* camwMATIC - 155%
* camWETH - 155%
* camAAVE - 155%

### QiDao current liquidation process:
When vaults fall below the liquidation ratio, liquidators repay 50% of the vault’s debt and withdraw a portion of the locked collateral tokens as compensation so that the liquidator gets a ~10% gain. The vault is then returned to the original vault owner at a healthy collateral to debt ratio. More info can be found at https://docs.mai.finance/liquidation

### Risk
Black swan events occur when prices of assets fall at very rapid rates. Lowering the liquidation ratio could decrease the collateral cushion that keeps MAI overcollateralized. We note that QiDao has experienced one historic black swan event in May as well as several market downturns throughout the past few weeks. During those events, liquidations functioned smoothly, and no vaults fell near 100%.

### How would we combat the risks?
Below are some mitigants to the risk of lower liquidation ratios to 120% that could be implemented.

* Ensure liquidator rewards are still worth it to encourage quick liquidations. Liquidations have been very effective so far. We have now been through multiple black swan events and liquidations worked extremely well through those events

* Implement a stability pool to manage liquidation (subject to community discussion). This stability pool would be protocol run to ensure that vaults would be liquidated quickly when falling below the determined liquidation ratio. This would ensure that any risky vaults are liquidated quickly 

* Use protocol treasury as an insurance policy in the case of MAI becoming undercollateralized 

### Competitive analysis on Polygon

Polyquity - Liquidation ratio 110%

![Polyquity average C/D](https://ibb.co/kmqwt8Z)
 
Aave - Risk Parameters - Risk 

100% / LTV = Collateral to Debt

![Aave LTV chart](https://ibb.co/8jq8gy4)

### Motivation
* Increase protocol’s capital efficiency without materially raising protocol risk
* Maintaining the competitiveness of the protocol
* Attract new users to borrow MAI through vaults

Option #1 
Lower minimum liquidation ratio to 120% for non-stablecoin collaterals

Option #2:
Maintain minimum 150% liquidation ratio for non-stablecoin collaterals (no change)

---
| Choices | Score |
| --- | --- |
| Option 1 | 66.59% |
| Option 2 | 33.41% |

