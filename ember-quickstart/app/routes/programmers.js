import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return ['Bill Gates','Linus Torvalds','Ada Lovelace']
	}
});
