import DS from 'ember-data';

export default DS.Model.extend({

    user: DS.attr('string', {defaultValue: false}),
    path: DS.attr('string', {defaultValue: false}),
    event: DS.attr('string', {defaultValue: false}),

    detail: DS.attr('string', {defaultValue: false}),
    jsondata: DS.attr('string', {defaultValue: false}),

    timestamp: DS.attr('date'),
    


});

