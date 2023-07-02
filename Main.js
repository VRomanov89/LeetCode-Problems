// Problem - 121. Best Time to Buy and Sell Stock
//Testing
/*
[7,1,5,3,6,4]
Initi - 
7 - 
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minBuy;
        if (currentProfit > profit) {
            profit = currentProfit;
        }
        if (currentPrice < minBuy) {
            minBuy = currentPrice;
        }
    }
    return profit;
};

