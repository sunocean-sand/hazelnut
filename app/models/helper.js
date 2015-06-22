import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', {async: true}),
	todo: DS.belongsTo('todo', {async: true}),

	helperCount: function() {
        var helperLength = this.get('user.length');
        var ret = 0;
        this.get('user').forEach(function(user){
            ret += spread.get('helper.length');
        });
        return ret;
    }.property('user.@each.helper.length')
});
