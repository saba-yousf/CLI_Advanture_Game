import inquirer from "inquirer";
//................Games Variable .....................
let enemies = ["skeleton", "zombie", "warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//............... player variable .......................
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
//..............// while loop condition ...................
let gameRunning = true;
console.log("Welcom to DeadZone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`your Health: ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "what would you like to do?",
            choices: ["1. Attack", "2. Take Health potion", "3. Run"]
        });
        if (option.ans === "1. Attack") {
            let attackDamageToEnemy = 50;
            let demageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let demageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= demageToEnemy;
            heroHealth -= demageToHero;
            console.log(`you strike the ${enemy} for ${demageToEnemy}`);
            console.log(`${enemy} strike you for ${demageToHero} damage.`);
            if (heroHealth < 1) {
                console.log("you have taken too much damage . you are too weak to continue.");
                break;
            }
        }
        else if (option.ans === "2. Take Health potion") {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(` you use Health potion for ${healthPotionHealAmount}`);
                console.log(`you now have ${heroHealth} Health`);
                console.log(`you have ${numHealthPotion} Health potion left.`);
            }
            else {
                console.log(`you have no Health potion left. defeat enemy for a chance get Health potion`);
            }
        }
        else if (option.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from battle. you are to weak.`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`you have ${heroHealth} Health`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(`enemy give you Health potion`);
        console.log(`your health is: ${heroHealth}`);
        console.log(`your health potion is: ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "what would you like to do now",
        choices: ["1. continue", "2. Exit"]
    });
    if (userOption.ans === "1.continue") {
        console.log("you are continue on your advanture");
    }
    else {
        console.log("you successfuly EXit from DeadZone");
        break;
    }
    console.log("Thank you for playing.\n");
}
