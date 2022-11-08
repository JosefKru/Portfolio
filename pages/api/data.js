import { client } from '../../lib/client'

export default async function data(req, res) {
  const { start, end } = req.query

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({
      error: 'Data invalid',
    })
  }

  const { portfolioList, total } = await loadData(start, end)

  res.status(200).json({
    portfolioList,
    total,
  })
}

export async function loadData(start, end) {
  const query = `{
    "portfolioList": *[_type == "toys"] | order(date desc) [${start}...${end}] {_id, date, title, imagesGallery, description, slug},
    "total": count(*[_type == "toys"])
  }`
  const { portfolioList, total } = await client.fetch(query)

  return {
    portfolioList,
    total,
  }
}
