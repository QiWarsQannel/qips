---
title: QIP134: Switch Bribes on Balancer Arbitrum to Masterchef on Curve Arbitrum
url: https://snapshot.org/#/qidao.eth/proposal/0x42cd50ea4c7fb9614cb64524ff25cee6fecde9024f9db7e8f75f6fa990cde74b
start: 2022-08-05T02:32:01.000Z
end: 2022-08-07T17:00:00.000Z
---
### Context

We currently bribe veBAL holders with 2,000 QI / week for a pool on Arbitrum. That pool is currently $25,000 in TVL. At a pool APR of 4.5%, we have a negative ROI on this bribe.

If we were to incentivize a Curve pool directly through a masterchef, we would house a larger amount of liquidity. Assuming a 14% APR for the pool and QI at 25.8 cents, the new curve pool would have around $190,000 in liquidity (7.6x the size of the Balancer pool on Arbitrum).

### Proposal

Switch the 2,000 QI / week bribe to a reward on Curve through our own masterchef. This implies the creation of a new Arbitrum pool on https://app.mai.finance/farm

### Quorum Standards

The option with the most votes will be adopted.

### Options

Accept proposal
Reject proposal 
---
| Choices | Score |
| --- | --- |
| Accept proposal | 93.28% |
| Reject proposal | 6.72% |

