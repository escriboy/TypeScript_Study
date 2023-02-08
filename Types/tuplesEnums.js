"use strict";
// const stuff: (string | number)[] = ["asd", "adfsd", "asdff", 2];
// const color: number[] = [23, 45, 231, 123131, 1];
const color = [255, 0, 255];
const goodRes = [200, "OK"];
goodRes.push(123);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED11"] = 11] = "SHIPPED11";
    OrderStatus[OrderStatus["DELEIVERED"] = 12] = "DELEIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 13] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELEIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELEIVERED;
}
isDelivered(OrderStatus.RETURNED);
const ArrowKeys = {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
};
