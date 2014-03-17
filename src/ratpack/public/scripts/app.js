App = Ember.Application.create();

App.Project = DS.Model.extend({
  url : '/projects/',
  name : DS.attr('string')
});

App.User = DS.Model.extend({
  username : DS.attr('string')
});

App.ProjectSerializer = DS.LSSerializer.extend();
App.ProjectAdapter = DS.LSAdapter.extend({
  namespace : 'projects'
});

App.Router.map(function() {
  this.route('projects');
  this.route('users');
});

App.ProjectsRoute = Ember.Route.extend({
  model : function() {
    return this.store.find('project');
  }
});

App.ProjectsController = Ember.ArrayController.extend({
  actions : {
    create : function() {
      var name = this.get('name');
      var project = this.store.createRecord('project', {
        name : name
      });

      project.save()
      this.set('name', '');
    }
  }
});

App.UsersRoute = Ember.Route.extend({
  model : function() {
    return this.store.find('user');
  }
});
