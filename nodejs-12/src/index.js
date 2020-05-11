const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getShoppingCart(ids, productsList) {
  const look = new Set();
  let regularPrice = 0;
  let discountPrice = 0;

  const shopList = productsList.filter((product) => {
    if (ids.includes(product.id)) {
      look.add(product.category);
      return true;
    }
    return false;
  });
  const validPromotion = promotions[look.size - 1];

  const products = shopList.map((product) => {
    const activePromotion = product.promotions.find((promocao) => {
      return promocao.looks.find((look) => look === validPromotion);
    });

    activePromotion
      ? (discountPrice += activePromotion.price)
      : (discountPrice += product.regularPrice);

    regularPrice += product.regularPrice;

    return {
      name: product.name,
      category: product.category,
    };
  });

  const discountValue = (regularPrice - discountPrice).toFixed(2);

  const percentageDiscount = () => {
    const oi = ((discountValue * 100) / regularPrice).toFixed(2);
    return `${oi}%`;
  };

  return {
    products: products,
    promotion: validPromotion,
    totalPrice: discountPrice.toFixed(2),
    discountValue,
    discount: percentageDiscount(),
  };
}

module.exports = { getShoppingCart };
