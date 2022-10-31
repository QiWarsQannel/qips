---
title: QIP138: Seed Jarvis Jfiat Midas Market
url: https://snapshot.org/#/qidao.eth/proposal/0x99510cdf153f88b04cdf6f461700d7122e4a3aac5c5f48aea7c4f78d5615858c
start: 2022-08-18T04:13:13.000Z
end: 2022-08-22T16:00:00.000Z
---
Proposal

Deposit 100,000 MAI into each of the Jarvis jFIAT Midas Capital lending pools on BNB Chain and Polygon so users can borrow MAI against their collateral and earn yield on MAI deposits. After the initial deposit, it will be managed similar to debt ceiling increases, based on peg, asset liquidity, etc.

### Background on Midas

Midas Capital is an isolated money market platform that enables permissionless pool creation, novel forms of yield generation, and more granular risk management.

### Risk considerations

The main risk of this proposal is around the risk of the Jarvis jFIAT pools in going into bad debt, where a borrower’s collateral is insufficient to be liquidated and repay the borrower’s loan. These risks are mitigated by:
* Setting up LTV’s (loan to value) to allow for a sufficient margin to liquidate the borrower’s collateral to repay the loan
* Utilizing reliable oracles and price feeds – Midas Capital uses ChainLink oracles, DIA oracles, or custom TWAP’s
* Setting supply caps on collateral as a function of available DEX liquidity

### Motivation

* Allow users to borrow MAI against a wide variety of collateral and synthetic currencies for Jarvis
* Enable users to participate in decentralized FX trading
* Propagate MAI and create additional use cases for the stablecoin

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Approve proposal
* Further discussions needed
---
| Choices | Score |
| --- | --- |
| Approve proposal | 99.92% |
| Further discussions needed | 0.08% |

