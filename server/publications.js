Meteor.publish("relationships", function() {
    return Relationships.find();
});