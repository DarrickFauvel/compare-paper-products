const calcCostPerRoll = (numOfRollsInput, totalCostInput) => {
  const numOfRolls = !numOfRollsInput ? 1 : parseInt(numOfRollsInput)
  const totalCost = !totalCostInput ? 0 : parseFloat(totalCostInput)
  const costPerRoll = totalCost / numOfRolls
  return costPerRoll
}

export default calcCostPerRoll
