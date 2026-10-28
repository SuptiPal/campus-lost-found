function escapeRegex(s){return String(s).replace(/[^a-zA-Z0-9 ]/g, ch => "\\" + ch)}
const strategies={keyword:v=>({title:{$regex:escapeRegex(v),$options:'i'}}),type:v=>({type:v}),category:v=>({category:{$regex:`^${escapeRegex(v)}$`,$options:'i'}})};
function buildQuery(filters={}){const query={};for(const [key,value] of Object.entries(filters)){if(value&&strategies[key])Object.assign(query,strategies[key](value))}return query;}
module.exports={buildQuery};
