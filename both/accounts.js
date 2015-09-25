AccountsTemplates.configure({
    texts: {
        title: {
            signUp: "Sign Up"
        },
    }
});

AccountsTemplates.configureRoute('signIn', {
	template: 'signIn',
    layoutTemplate: 'appLayout'
});

AccountsTemplates.configureRoute('signUp', {
	template: 'signUp',
    layoutTemplate: 'appLayout'
});


