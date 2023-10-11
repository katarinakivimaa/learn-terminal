import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

// console.log(chalk.bgBlueBright.magenta('Hello world'));
// console.log(chalk.underline.magenta('Hello world'));
// console.log(chalk.italic.magenta('Hello world'));
// console.log(chalk.bgBlackBright.strikethrough('Hello world'));
// console.log(chalk.bgWhite.inverse('Hello world'));
// console.log(boxen('box', {borderStyle: "round"}));
// console.log(boxen('Hello world', chalk.bgBlueBright.magenta()));


console.log(boxen(chalk.bgWhite.black('I am Me'), {title: 'Me', borderStyle:'double'}));
console.log(boxen(chalk.bgBlueBright.greenBright('Hello Me'), {padding: 2, margin: 1, borderStyle: 'classic'}));
console.log(boxen(chalk.italic.blueBright('No, they meant me!'), {padding: 1, margin: 4, borderColor: 'magenta', borderStyle: 'arrow'}));
console.log(boxen(chalk.bold.strikethrough('Are you sure?'), {padding: 3, margin: 1,  borderStyle: 'none'}));
console.log(boxen(chalk.italic.blueBright('Definitely! I am me!'), {padding: 1, margin: 4, borderColor: 'magenta', borderStyle: 'arrow'}));
console.log(boxen(chalk.bgBlueBright.greenBright('Oh, okay! Hello Me & Me!'), {padding: 2, margin: 1, borderStyle: 'classic'}));
console.log(boxen(chalk.bgWhite.black('You guys are idiots.'), {title: 'Me', borderStyle:'double'}));
console.log(boxen('Fin', {dimBorder: 0.5, width: 35,height:3}));