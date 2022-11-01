
# [QIP 003: Decreasing the Liquidation Ratio](https://snapshot.org/#/qidao.eth/proposal/QmSN27tNdD4ETTgcy9dhSD3aQRN6xoJYDSQgjmJ6Hwy8LB)

---
| Start | End |
| --- | --- |
| 2021-05-18T10:00:00.000Z | 2021-05-19T17:00:00.000Z |


Through discussions on Discord and Telegram, we’ve seen some desires to rethink the liquidation process. Many in the community want to lower the downside of being liquidated. Right now, a risky vault is bought at ~149% collateral to debt ratio. This results in a loss of ~1/3 of the collateral value for the original vault owner (+ 100% of the debt is paid off and gained as an asset - 100% of the Matic is lost).

In order to minimize this loss, we propose lowering the liquidation ratio.

In addition to lowering the liquidation ratio, we could structure borrowing so that the minimum collateral to debt ratio at the time of borrowing is still 150% (on the front end), but the liquidation ratio is lower (125%). 

This would both reduce the chances of being liquidated and manage the miMatic supply as it relates to locked collateral.

As the Protocol grows, we plan on implementing a stability pool to manage liquidation (subject to community discussion).


---
| Choices | Score |
| --- | --- |
| Lower liquidation ratio to 125% | 27.97% |
| Maintain 150% liquidation ratio  | 72.03% |

