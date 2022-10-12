import { useState, useEffect } from 'react'

import calcTotalCost from '../../utils/calcTotalCost'
import calcCostPerSqFt from '../../utils/calcCostPerSqFt'
import calcCostPerRoll from '../../utils/calcCostPerRoll'

const Form = () => {
  const [formValue, setFormValue] = useState({
    brand_A: '',
    name_A: '',
    numOfRolls_A: '',
    totalSqFt_A: '',
    price_A: '',
    tax_A: '',
    totalCost_A: 0,
    costPerSqFt_A: 0,
    costPerRoll_A: 0,
    //
    brand_B: '',
    name_B: '',
    numOfRolls_B: '',
    totalSqFt_B: '',
    price_B: '',
    tax_B: '',
    totalCost_B: 0,
    costPerSqFt_B: 0,
    costPerRoll_B: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const calculateTotalCost = (price, tax) => {
    if (!tax) tax = 0
    price = parseFloat(price)
    tax = parseFloat(tax)
    const totalCost = price * (tax / 100) + price
    return totalCost
  }

  const calculateCostPerSqFt = (totalCost, totalSqFt) => {
    if (!totalCost || !totalSqFt) return 0
    totalCost = parseFloat(totalCost)
    totalSqFt = parseFloat(totalSqFt)
    const costPerSqFt = totalCost / totalSqFt
    return costPerSqFt
  }

  const calculateCostPerRoll = (numOfRolls, totalCost) => {
    if (!numOfRolls) return 0
    numOfRolls = parseInt(numOfRolls)
    totalCost = parseFloat(totalCost)
    const costPerRoll = totalCost / numOfRolls
    return costPerRoll
  }

  const isGreater = () => {}

  useEffect(() => {
    if (formValue.price_A) {
      const totalCost = calculateTotalCost(formValue.price_A, formValue.tax_A)
      setFormValue((prevState) => ({
        ...prevState,
        totalCost_A: totalCost
      }))
    }
  }, [formValue.price_A, formValue.tax_A])

  useEffect(() => {
    if (formValue.price_B) {
      const totalCost = calculateTotalCost(formValue.price_B, formValue.tax_B)
      setFormValue((prevState) => ({
        ...prevState,
        totalCost_B: totalCost
      }))
    }
  }, [formValue.price_B, formValue.tax_B])

  useEffect(() => {
    const costPerSqFt = calculateCostPerSqFt(
      formValue.totalCost_A,
      formValue.totalSqFt_A
    )
    setFormValue((prevState) => ({
      ...prevState,
      costPerSqFt_A: costPerSqFt
    }))
  }, [formValue.totalCost_A])

  useEffect(() => {
    const costPerSqFt = calculateCostPerSqFt(
      formValue.totalCost_B,
      formValue.totalSqFt_B
    )
    setFormValue((prevState) => ({
      ...prevState,
      costPerSqFt_B: costPerSqFt
    }))
  }, [formValue.totalCost_B])

  useEffect(() => {
    const costPerRoll = calculateCostPerRoll(
      formValue.numOfRolls_A,
      formValue.totalCost_A
    )
    setFormValue((prevState) => ({
      ...prevState,
      costPerRoll_A: costPerRoll
    }))
  }, [formValue.totalCost_A])

  useEffect(() => {
    const costPerRoll = calculateCostPerRoll(
      formValue.numOfRolls_B,
      formValue.totalCost_B
    )
    setFormValue((prevState) => ({
      ...prevState,
      costPerRoll_B: costPerRoll
    }))
  }, [formValue.totalCost_B])

  return (
    <Box component='form' sx={{ mt: 2 }}>
      <Container maxWidth='sm'>
        <Stack direction='row' spacing={2}>
          <Box>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Product A
            </Typography>
            <Stack spacing={2}>
              <TextField
                size='small'
                variant='outlined'
                id='brand_A'
                name='brand_A'
                label='Brand'
                value={formValue.brand_A}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='name_A'
                name='name_A'
                label='Name'
                value={formValue.name_A}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='numOfRolls_A'
                name='numOfRolls_A'
                label='Number of Rolls'
                value={formValue.numOfRolls_A}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='totalSqFt_A'
                name='totalSqFt_A'
                label='Total Sq Ft'
                value={formValue.totalSqFt_A}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='price_A'
                name='price_A'
                label='Price'
                value={formValue.price_A}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='tax_A'
                name='tax_A'
                label='Tax %'
                value={formValue.tax_A}
                onChange={handleChange}
              />
              <Box sx={{ textAlign: 'right' }}>
                <Typography>
                  Total Cost: {'$' + formValue.totalCost_A.toFixed(2)}
                </Typography>
                <Typography>
                  / Sq Ft: {'$' + formValue.costPerSqFt_A.toFixed(2)}
                </Typography>
                <Typography>
                  / Roll: {'$' + formValue.costPerRoll_A.toFixed(2)}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Product B
            </Typography>
            <Stack spacing={2}>
              <TextField
                size='small'
                variant='outlined'
                id='brand_B'
                name='brand_B'
                label='Brand'
                value={formValue.brand_B}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='name_B'
                name='name_B'
                label='Name'
                value={formValue.name_B}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='numOfRolls_B'
                name='numOfRolls_B'
                label='Number of Rolls'
                value={formValue.numOfRolls_B}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='totalSqFt_B'
                name='totalSqFt_B'
                label='Total Sq Ft'
                value={formValue.totalSqFt_B}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='price_B'
                name='price_B'
                label='Price'
                value={formValue.price_B}
                onChange={handleChange}
              />
              <TextField
                size='small'
                variant='outlined'
                id='tax_B'
                name='tax_B'
                label='Tax %'
                value={formValue.tax_B}
                onChange={handleChange}
              />
              <Box sx={{ textAlign: 'right' }}>
                <Typography>
                  Total Cost: {'$' + formValue.totalCost_B.toFixed(2)}
                </Typography>
                <Typography>
                  / Sq Ft: {'$' + formValue.costPerSqFt_B.toFixed(2)}
                </Typography>
                <Typography>
                  / Roll: {'$' + formValue.costPerRoll_B.toFixed(2)}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
export default Form
