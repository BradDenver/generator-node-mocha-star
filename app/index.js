'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NodeMochaStarGenerator = module.exports = function NodeMochaStarGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NodeMochaStarGenerator, yeoman.generators.Base);

NodeMochaStarGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(
    this.yeoman +
    '\nThe name of your project shouldn\'t contain "node" or "js" and' +
    '\nshould be a unique ID not already in use at search.npmjs.org.');

  var prompts = [{
    name: 'name',
    message: 'Module Name',
    default: path.basename(process.cwd())
  }, {
    name: 'description',
    message: 'Description',
    default: 'The best module ever.'
  }, /*{
    name: 'homepage',
    message: 'Homepage'
  }, {
    name: 'license',
    message: 'License',
    default: 'MIT'
  }, {
    name: 'githubUsername',
    message: 'GitHub username'
  }, {
    name: 'authorName',
    message: 'Author\'s Name'
  }, {
    name: 'authorEmail',
    message: 'Author\'s Email'
  }, {
    name: 'authorUrl',
    message: 'Author\'s Homepage'
  },*/ {
    type: 'list',
    name: 'assertionLib',
    message: 'Which assertion library would you like to use?',
    choices: ['assert','chai-assert','expect.js','should.js'],
    default: 1
  }];

  this.currentYear = (new Date()).getFullYear();

  this.prompt(prompts, function (props) {
    this.slugname = this._.slugify(props.name);

    this.repoUrl = 'https://github.com/' + props.githubUsername + '/' + this.slugname;

    if (!props.homepage) {
      props.homepage = this.repoUrl;
    }

    this.props = props;

    cb();
  }.bind(this));
};

NodeMochaStarGenerator.prototype.lib = function lib() {
  this.mkdir('lib');
  this.template('lib/_name.js', 'lib/' + this.slugname + '.js');
};

NodeMochaStarGenerator.prototype.test = function test() {
  this.assertionGuide = this.readFileAsString(path.join(this.sourceRoot(), '/test/_' + this._.slugify(this.props.assertionLib) + '.js'));
//console.log(this._.slugify('should.js'));
  this.mkdir('test');
  this.template('test/_name_test.js', 'test/' + this.slugname + '_test.js');
};

NodeMochaStarGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('travis.yml', '.travis.yml');

  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_jshintrc', '.jshintrc');
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
};
