---
title: QIP132: Remove Certain Owner Privileges and Implement Timelock
url: https://snapshot.org/#/qidao.eth/proposal/0xf74a6f506eb8c5cc297cdc6cace12beffda7084a928439cae6e34d7e76e4056f
start: 2022-08-01T16:48:38.000Z
end: 2022-08-06T17:00:00.000Z
---
### Context

The current vaults at QiDao rest on a 2/4 multisig. As there is currently $75.51m of collateral locked in the  platform (as per DeFi Llama), we believe this is no longer acceptable and that steps should be taken to protect users in the unlikely event of a multisig compromise.

Other lending platforms such as Aave and Compound do not allow for oracle changes without a timelock. See https://governance.aave.com/t/arc-move-control-of-price-oracle-to-governance-v2/3946/2 and https://compound.finance/docs/governance. Some platforms such as Liquity do not allow for changing the oracle at all.

### Proposal

Voting "yes" on this QIP directs the DAO to implement a small governance wrapper contract that will become the owner of the vaults. This wrapper contract should do the following:

* Implement a timelock in order to change the oracle address
* Implement a timelock in order to set the token peg
* Remove access to the transferToken(address to, address token, uint256 amountToken) function
* Allow for setting a new owner (for example, to upgrade the governance contract) but only with a timelock

New governance contract option (WIP): https://github.com/ajb/qidao-governance-contract/blob/main/src/QiVaultGovernance.sol

### Quorum Standards

The option with the most votes will be adopted.

### Options

* Accept proposal
* Reject proposal
---
| Choices | Score |
| --- | --- |
| Approve proposal | 99.94% |
| Reject proposal | 0.06% |

