// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();


//const shortGreeting = `Welcome, ${currentUser[0].${currentUser.split(' ')[1]}!`;

const shortGreeting = `Welcome, ${currentUser[0].slice(0, 1)}!`;