const calcTotalCost = (priceInput, taxInput) => {
  const price = !priceInput ? 0 : parseFloat(priceInput)
  const tax = !taxInput ? 0 : parseFloat(taxInput)
  const totalCost = price * (tax / 100) + price
  return totalCost
}

export default calcTotalCost
