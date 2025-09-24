import products from '../../../data/products';
export default function handler(req, res){
  const { id } = req.query;
  const p = products.find(x=>x._id===id);
  if(!p) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json(p);
}
