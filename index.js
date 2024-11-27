// messageGenerator.js

// Define arrays for different pieces of the message
const phrases = [
    "You can achieve",
    "Believe in yourself",
    "Success is",
    "Dream big",
    "The future belongs to"
  ];
  
  const names = [
    "Steve Jobs",
    "Albert Einstein",
    "Oprah Winfrey",
    "Eleanor Roosevelt",
    "Walt Disney"
  ];
  
  const quotes = [
    "the impossible.",
    "your greatest asset.",
    "the key to success.",
    "anything you want.",
    "limitless."
  ];
  
  // Function to generate a random message
  function generateMessage() {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    return `${phrase} ${name} ${quote}`;
  }
  
  // Output the message to the console
  console.log(generateMessage());
  