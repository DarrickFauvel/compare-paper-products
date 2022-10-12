const calcCostPerSqFt = (totalSqFtInput, totalCostInput) => {
  const totalSqFt = !totalSqFtInput ? 1 : parseFloat(totalSqFtInput)
  const totalCost = !totalCostInput ? 0 : parseFloat(totalCostInput)
  const costPerSqFt = totalCost / totalSqFt
  return costPerSqFt
}

export default calcCostPerSqFt
