#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponet {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let Player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name :",
});
let opp = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponet",
    choices: ["Skeleton", "zombie", "Loin"]
});
const p1 = new player(Player.name);
const o1 = new opponet(opponet.name);
do {
    if (opp.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "select the option",
            choices: ["drink portion", "Attack", "Run of life.."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${opp.select} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(`${p1.name} lose the game and ${opp.select} win this game `);
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${opp.select} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(`${opp.select} lose the game and ${p1.name} win this game `);
                    break;
                }
            }
        }
        if (ask.option == "drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run of life..") {
            console.log(`${p1.name} left ring so the winner is ${opp.select}`);
            break;
        }
    }
    if (opp.select == "zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "select the option",
            choices: ["drink portion", "Attack", "Run of life.."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${opp.select} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(`${p1.name} lose the game and ${opp.select} win this game `);
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${opp.select} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(`${opp.select} lose the game and ${p1.name} win this game `);
                    break;
                }
            }
        }
        if (ask.option == "drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run of life..") {
            console.log(`${p1.name} left ring so the winner is ${opp.select}`);
            break;
        }
    }
    if (opp.select == "Loin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "select the option",
            choices: ["drink portion", "Attack", "Run of life.."]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${opp.select} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(`${p1.name} lose the game and ${opp.select} win this game `);
                    break;
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${opp.select} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(`${opp.select} lose the game and ${p1.name} win this game `);
                    break;
                }
            }
        }
        if (ask.option == "drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.option == "Run of life..") {
            console.log(`${p1.name} left ring so the winner is ${opp.select}`);
            break;
        }
    }
} while (true);
// Pick<QuestionMap[keyof QuestionMap], 'message'> | AsyncGetterFunction<Pick<QuestionMap[keyof QuestionMap],
//'message'>, Prettify<A>>;
