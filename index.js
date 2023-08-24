import fetch from 'node-fetch'

export const getExchangeRate = async (req, res) => {
  const date = req.query.date || 'latest'
  const from = (req.query.from || 'eur').toLowerCase()
  const to = (req.query.to || 'sek').toLowerCase()
  const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${from}/${to}.json`)
  const data = await response.json()
  res.status(200).json(data)
}
