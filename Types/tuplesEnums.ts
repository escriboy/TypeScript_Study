// const stuff: (string | number)[] = ["asd", "adfsd", "asdff", 2];

// const color: number[] = [23, 45, 231, 123131, 1];
const color: [number, number, number] = [255, 0, 255];

// [200, "OK"][(404, "Not Found")];
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
goodRes.push(123);

enum OrderStatus {
  PENDING = 10,
  SHIPPED11,
  DELEIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELEIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELEIVERED;
}

isDelivered(OrderStatus.RETURNED);

const ArrowKeys = {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
};
