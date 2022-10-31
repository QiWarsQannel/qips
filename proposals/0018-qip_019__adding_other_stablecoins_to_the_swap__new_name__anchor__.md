---
title: QIP 019: Adding other stablecoins to the Swap (New name: Anchor) 
url: https://snapshot.org/#/qidao.eth/proposal/QmWukFH6kD6ApVk9DN5nnbiGyR4MdUjCwSq4AjTpSrtFeA
start: 2021-08-12T03:00:00.000Z
end: 2021-08-16T03:00:00.000Z
---
### Summary:
This proposal is to add additional stablecoins to Anchor to mint MAI. The proposed stablecoins to add are USDT and DAI. Currently, Anchor only allows users to mint MAI with USDC. Minting through Anchor currently incurs a 1% fee.

Anchor is a protocol mechanism that helps MAI maintain its peg. Anchor ensures that there is always MAI-USDC liquidity at a price that is close to the peg. This allows users to be able to repay their loans at close to $1 even if the price of MAI deviates from the peg on the open market. If you would like to read more about the inner workings of the USDC Swap (Anchor) please read : https://docs.mai.finance/stablecoin-economics#usdc-swap 

If the proposed stablecoins are added to Anchor, users would be able mint MAI with USDT and DAI for a 1% fee. 

USDT and DAI are the largest stablecoins in terms of liquidity, along with USDC. They are both in Curve’s base stablecoin pool, which speaks to their stability. USDT and DAI are also listed on Aave.

### Liquidity on Polygon:

USDT liquidity:
* Aave: $175,873,203
* Curve: $108,915,747
* QuickSwap: $84,656,942
* Sushi: $45,405,840
* DFYN: $51,096,385
* Balancer: $8,460,795
* Others: $79,623,505

DAI liquidity:
* Aave: $898,671,441
* Curve: $78,075,279
* QuickSwap: $31,197,240
* Sushi: $30,607,884
* DFYN: $21,530,421
* Balancer: $8,053,944
* Others: $71,130,608

### Motivation:
* Add options for QiDao users to mint MAI with their stablecoins at a fixed rate
* Reduce the percent of MAI backed by one collateral type

### Options:
* Option 1: Add USDT to Anchor 
* Option 2: Add DAI to Anchor
* Option 3: Add both DAI and USDT to Anchor
* Option 4: Do not add USDT or DAI to Anchor

---
| Choices | Score |
| --- | --- |
| Option 1 | 0.01% |
| Option 2 | 8.53% |
| Option 3 | 58.96% |
| Option 4 | 32.50% |

