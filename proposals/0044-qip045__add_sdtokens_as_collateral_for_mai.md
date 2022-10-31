---
title: QIP045: Add sdTokens as Collateral for MAI
url: https://snapshot.org/#/qidao.eth/proposal/0x815862cda473ead4e50f347e9d44612326a90881efb735b04d9541c1223cfed2
start: 2021-12-08T14:00:00.000Z
end: 2021-12-13T14:00:00.000Z
---
QiDao has received a proposal from Stake DAO to add Stake DAO vault tokens (sdTokens) as collateral for borrowing MAI.

Stake DAO vault tokens are received when users deposit tokens into Stake DAO’s smart contracts. For example, depositing ETH on Stake DAO gives users sdEth as a receipt of deposit.

Tokens added would have to have underlying tokens that are already accepted as collateral. For example, if ETH is already accepted as collateral, then the protocol could add sdEth as collateral.

Adding sdTokens as collateral would allow users to borrow against their sdTokens at 0% interest, while still earning yield from Stake DAO strategies.

Stake DAO: https://stakedao.org/

### Motivation

* Introduce QiDao to a new audience
* Decrease protocol risk
* Increase TVL
* Increase protocol revenue

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Add sdTokens at 140% min CDR
* Add sdTokens at 135% min CDR
* Add sdTokens at 130% min CDR
* Further discussion needed

min CDR = minimum collateral to debt ratio
---
| Choices | Score |
| --- | --- |
| Add sdTokens at 140% min CDR | 42.98% |
| Add sdTokens at 135% min CDR | 55.94% |
| Add sdTokens at 130% min CDR | 0.74% |
| Further discussion needed | 0.34% |

