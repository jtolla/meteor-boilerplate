Router.route('/', {
    name: 'home',
    layoutTemplate: 'appLayout'
});

Router.route('/dashboard', {
    name: 'dashboard',
    layoutTemplate: 'appLayout',
    waitOn: function() {
        return this.subscribe('relationships');
    },
    data: {
        urls: Relationships.find(),
    }
});

Router.route('signOut', {
    path: '/sign-out',
    onBeforeAction: Meteor.logout
});
