
# [QIP064: Add vGHST as Collateral for MAI](https://snapshot.org/#/qidao.eth/proposal/0x31e9dfc557e4ababb296d64f2481122f87ebc1f181889785dfd034cc9485f955)

---
| Start | End |
| --- | --- |
| 2022-02-02T10:00:00.000Z | 2022-02-06T10:00:00.000Z |


vGHST is a staked version of GHST that sells frens to buy more GHST. It also accrues deposit fees from Aave through amGHST. Adding it as collateral for MAI would remove the need to choose between staking GHST on Aavegotchi and depositing GHST on QiDao vaults.

### Security

Two multisigs will manage this product: an upgrade multisig and a vault manager multisig.

The upgrade multisig (3/3) will control any changes to the contract. Signers are Bearded, Ben from QiDao, and Marc Zeller.

The vault manager multisig (4/6) will control the management of frens earned. Signers are Bearded, Marc Zeller, and 4 OG Aavegotchi community members: Diddlypoo, Dr WAGMI, Cookiethief, and Ceza.

The code has been peer-reviewed by Nick Mudge. The review process from the QiDao team is ongoing. Adding vGHST as collateral is dependent on code approval from the QiDao team.

### Motivation

* Increase demand for borrowing against GHST on QiDao
* Allow users to benefit from staking for frens and borrowing MAI at the same time
* Increase TVL and revenue from heighten demand for MAI minting

### Quorum Standards

The option with the most votes will be adopted. 

A weighted average will be used to decide on the minimum CDR if the following conditions are met:

* The options to add vGHST collectively outweigh the option to not add vGHST
* No option to add vGHST receives a greater vote than the option to not add vGHST

### Options

* Add vGHST with 135% min CDR
* Add vGHST with 140% min CDR
* Add vGHST with 145% min CDR
* Further discussions needed

*min CDR = minimum collateral to debt ratio

---
| Choices | Score |
| --- | --- |
| Add vGHST with 135% min CDR | 97.13% |
| Add vGHST with 140% min CDR | 0.40% |
| Add vGHST with 145% min CDR | 2.46% |
| Further discussions needed | 0.01% |

