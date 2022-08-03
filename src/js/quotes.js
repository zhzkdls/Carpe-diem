const quotes = [
    {
      quote: "I can do everything through him who gives me strength.",
      author: "Philippians 4:13",
    },
    {
      quote: "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. ",
      author: "Matthew 11:29",
    },
    {
      quote:
        "for wisdom is more precious than rubies, and nothing you desire can compare with her. ",
      author: "Proverbs 8:11",
    },
    {
      quote: "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God.",
      author: "Philippians 4:6 ",
    },
    {
      quote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      author: "Romans 8:28",
    },
    {
      quote: "but those who hope in the LORD will renew their strength. They will soar on wings like eagles they will run and not grow weary, they will walk and not be faint.",
      author: "Isaiah 40:31",
    },
    {
      quote: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
      author: "Jeremiah 33:3",
    },
    {
      quote: "Jesus answered, I am the way and the truth and the life. No one comes to the Father except through me.",
      author: "john 14:6  ",
    },
    {
      quote: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. ",
      author: "john 16:33",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;

