module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component for the website',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'name your component',
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{pascalCase name}}/index.js',
      templateFile: 'plop-templates/comp.js.txt',
    }, {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/index.module.css',
      templateFile: 'plop-templates/comp.module.css.txt',
    }],
  });
};
