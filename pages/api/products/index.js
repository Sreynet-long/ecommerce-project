import products from '../../../data/products';
export default function handler(req, res){
  const { q = '', page='1', limit='9' } = req.query;
  const pageNum = parseInt(page,10)||1; const lim = parseInt(limit,10)||9;
  const filtered = products.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()));
  const start = (pageNum-1)*lim; const paged = filtered.slice(start, start+lim);
  res.status(200).json({ items: paged, total: filtered.length });
}
