/*Todo List:
* Test1: 
* Entrada -> Salida
* [] -> []
* ['test@test.com'] -> ['test@test.com']
* ['test@test.com', 'test@test.com'] -> ['test@test.com']
* ['test@test.com', 'test@test.com', 'haha@haha.com'] -> ['test@test.com'. haha@haha.com]
* ['test(AT)test.com'] -> ['test@test.com']
* ['test@test(DOT)com'] -> ['test@test.com']
* 
*/

function filterList(list){
	return [];
}


describe('List filter',function(){
	it('That when empty list as input, outputs empty list',function(){
		var result = filterList([]);
		expect(result).toEqual([]);
	});
});
