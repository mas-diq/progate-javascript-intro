import chalk from "chalk";

// https://www.npmjs.com/package/chalk

// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));