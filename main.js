import inquirer from 'inquirer';
// import separator from 'inquirer/lib/objects/separator';
import confirm from '@inquirer/confirm';

function write(text) {
    process.stdout.write(text);
}

const answer = await confirm({message: 'Are you ready?' });

inquirer
  .prompt([
    {type:'input', name:'name', message:'What is your name?'},
    {type:'number', name:'age', message:'What is your age?'},
    {type:'password', name:'password', message:'What is your password?'},
    {type:'editor', name:'story', message:'Describe your life story.'},
    {type:'list', name:'screensize', message:'What is your screen resolution?', choices: ['360x800', '1366x768', '1280x720', '1536x864', '1920x1080', '3840x2160']},
    {type:'list', name:'screensize', message:'What is your screen resolution?', choices: ['360x800', '1366x768', '1280x720', '1536x864', '1920x1080', '3840x2160']},
    {type:'rawlist', name:'videogame', message:'Your favorite video game.', choices: ['Hollow Knight', 'Doom (1993)', 'The Messenger', "Baldur's Gate 3", 'South-Park The Stick of Truth', 'Super Mario Galaxy']},
    {type:'expand', name:'platform', message:'Your preferred platform.', choices: [{key:'a', value:"Console",},{key:'b', value:"Mobile",},{key:'c', value:'PC',}]},
    {type:'checkbox', name:'devices', message:'Devices you own:', choices: ['Phone','Tablet','Wristwatch', 'PC', 'Console', 'Fridge']},
    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

