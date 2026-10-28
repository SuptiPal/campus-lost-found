const {createItem}=require('../patterns/itemFactory');const {toPublicItem}=require('../patterns/itemAdapter');const {buildQuery}=require('../patterns/searchStrategies');
test('factory trims and defaults',()=>{const x=createItem({title:' Bag ',type:'lost',category:'Books',location:'Library',contactName:'Sam'});expect(x.title).toBe('Bag');expect(x.status).toBe('open')});
test('factory rejects missing title',()=>expect(()=>createItem({type:'lost'})).toThrow());
test('adapter hides internal fields',()=>expect(toPublicItem({_id:'123',title:'Bag',secret:'no'})).not.toHaveProperty('secret'));
test('strategy builds combined query',()=>expect(buildQuery({type:'lost',keyword:'bag'})).toMatchObject({type:'lost',title:{$options:'i'}}));
