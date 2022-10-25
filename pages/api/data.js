import { client } from '../../lib/client'

export default function data(req, res) {}

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
