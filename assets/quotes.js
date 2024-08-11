const quotes = {
    data: [
      {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
        category: "motivation"
      },
      {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
        category: "motivation"
      },
      {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "motivation"
      },
      {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi",
        category: "motivation"
      },
      {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        category: "motivation"
      },
      {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        category: "motivation"
      },
      {
        quote: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
        category: "motivation"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivation"
      },
      {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
        category: "motivation"
      },
      {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous",
        category: "motivation"
      },
      {
        quote: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle",
        category: "love"
      },
      {
        quote: "To love and be loved is to feel the sun from both sides.",
        author: "David Viscott",
        category: "love"
      },
      {
        quote: "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.",
        author: "Franklin P. Jones",
        category: "love"
      },
      {
        quote: "Where there is love there is life.",
        author: "Mahatma Gandhi",
        category: "love"
      },
      {
        quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        author: "Lao Tzu",
        category: "love"
      },
      {
        quote: "Love is not about how much you say 'I love you,' but how much you can prove that it's true.",
        author: "Anonymous",
        category: "love"
      },
      {
        quote: "Love is when the other person's happiness is more important than your own.",
        author: "H. Jackson Brown Jr.",
        category: "love"
      },
      {
        quote: "To love is nothing. To be loved is something. But to love and be loved, that's everything.",
        author: "T. Tolis",
        category: "love"
      },
      {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
        category: "love"
      },
      {
        quote: "Love is the only force capable of transforming an enemy into a friend.",
        author: "Martin Luther King Jr.",
        category: "love"
      },
      {
        quote: "It's impossible to avoid hurting someone's feelings, but it is possible to avoid hurting them physically.",
        author: "Renz Pajarito",
        category: "life"
      },
      {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
        category: "life"
      },
      {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "life"
      },
      {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson",
        category: "life"
      },
      {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        category: "life"
      },
      {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
        category: "life"
      },
      {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain",
        category: "life"
      },
      {
        quote: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
        author: "Oliver Goldsmith",
        category: "life"
      },
      {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        author: "Elbert Hubbard",
        category: "life"
      },
      {
        quote: "Life is short, and it is up to you to make it sweet.",
        author: "Sarah Louise Delany",
        category: "life"
      },
      {
        quote: "The good life is one inspired by love and guided by knowledge.",
        author: "Bertrand Russell",
        category: "life"
      },
      {
        quote: "Tears come from the heart and not from the brain.",
        author: "Leonardo da Vinci",
        category: "sad"
      },
      {
        quote: "Every man has his secret sorrows which the world knows not; and often we call a man cold when he is only sad.",
        author: "Henry Wadsworth Longfellow",
        category: "sad"
      },
      {
        quote: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
        author: "Christopher Morley",
        category: "sad"
      },
      {
        quote: "Sadness flies away on the wings of time.",
        author: "Jean de La Fontaine",
        category: "sad"
      },
      {
        quote: "The word 'happy' would lose its meaning if it were not balanced by sadness.",
        author: "Carl Jung",
        category: "sad"
      },
      {
        quote: "There is no greater sorrow than to recall happiness in times of misery.",
        author: "Dante Alighieri",
        category: "sad"
      },
      {
        quote: "The walls we build around us to keep sadness out also keeps out the joy.",
        author: "Jim Rohn",
        category: "sad"
      },
      {
        quote: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel.",
        author: "Tupac Shakur",
        category: "sad"
      },
      {
        quote: "Sadness is but a wall between two gardens.",
        author: "Khalil Gibran",
        category: "sad"
      },
      {
        quote: "Sadness is a necessary emotion to appreciate the happiness in life.",
        author: "Anonymous",
        category: "sad"
      },
      {
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
        category: "philosophy"
      },
      {
        quote: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche",
        category: "philosophy"
      },
      {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        category: "philosophy"
      },
      {
        quote: "Life must be understood backward. But it must be lived forward.",
        author: "Søren Kierkegaard",
        category: "philosophy"
      },
      {
        quote: "To be is to do.",
        author: "Immanuel Kant",
        category: "philosophy"
      },
      {
        quote: "It is not the man who has too little, but the man who craves more, that is poor.",
        author: "Seneca",
        category: "philosophy"
      },
      {
        quote: "The mind is everything. What you think, you become.",
        author: "Buddha",
        category: "philosophy"
      },
      {
        quote: "The only thing I know is that I know nothing.",
        author: "Socrates",
        category: "philosophy"
      },
      {
        quote: "The more man meditates upon good thoughts, the better will be his world and the world at large.",
        author: "Confucius",
        category: "philosophy"
      },
      {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
        category: "philosophy"
      },
      {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",
        category: "happiness"
      },
      {
        quote: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
        author: "Audrey Hepburn",
        category: "happiness"
      },
      {
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Mahatma Gandhi",
        category: "happiness"
      },
      {
        quote: "For every minute you are angry you lose sixty seconds of happiness.",
        author: "Ralph Waldo Emerson",
        category: "happiness"
      },
      {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        category: "happiness"
      },
      {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle",
        category: "happiness"
      },
      {
        quote: "Count your age by friends, not years. Count your life by smiles, not tears.",
        author: "John Lennon",
        category: "happiness"
      },
      {
        quote: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        author: "Franklin D. Roosevelt",
        category: "happiness"
      },
      {
        quote: "The only joy in the world is to begin.",
        author: "Cesare Pavese",
        category: "happiness"
      },
      {
        quote: "The best way to cheer yourself up is to try to cheer somebody else up.",
        author: "Mark Twain",
        category: "happiness"
      },
      {
        quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
        author: "Carl Jung",
        category: "relationship"
      },
      {
        quote: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
        category: "relationship"
      },
      {
        quote: "A successful marriage requires falling in love many times, always with the same person.",
        author: "Mignon McLaughlin",
        category: "relationship"
      },
      {
        quote: "We can improve our relationships with others by leaps and bounds if we become encouragers instead of critics.",
        author: "Joyce Meyer",
        category: "relationship"
      },
      {
        quote: "The greatest relationships are the ones you never expected to be in.",
        author: "Anonymous",
        category: "relationship"
      },
      {
        quote: "A relationship with no arguments is a relationship with a lot of secrets.",
        author: "Anonymous",
        category: "relationship"
      },
      {
        quote: "A good relationship is when someone accepts your past, supports your present, and encourages your future.",
        author: "Anonymous",
        category: "relationship"
      },
      {
        quote: "Assumptions are the termites of relationships.",
        author: "Henry Winkler",
        category: "relationship"
      },
      {
        quote: "A real friend is one who walks in when the rest of the world walks out.",
        author: "Walter Winchell",
        category: "relationship"
      },
      {
        quote: "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",
        author: "Jess C. Scott",
        category: "relationship"
      },
      {
        quote: "Hope is the thing with feathers that perches in the soul—and sings the tunes without the words—and never stops at all.",
        author: "Emily Dickinson",
        category: "hope"
      },
      {
        quote: "We must accept finite disappointment, but never lose infinite hope.",
        author: "Martin Luther King Jr.",
        category: "hope"
      },
      {
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        author: "Albert Einstein",
        category: "hope"
      },
      {
        quote: "Everything that is done in this world is done by hope.",
        author: "Martin Luther",
        category: "hope"
      },
      {
        quote: "Hope is being able to see that there is light despite all of the darkness.",
        author: "Desmond Tutu",
        category: "hope"
      },
      {
        quote: "However bad life may seem, there is always something you can do and succeed at. Where there's life, there's hope.",
        author: "Stephen Hawking",
        category: "hope"
      },
      {
        quote: "Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.",
        author: "Jonas Salk",
        category: "hope"
      },
      {
        quote: "Hope is a waking dream.",
        author: "Aristotle",
        category: "hope"
      },
      {
        quote: "Hope is the pillar that holds up the world. Hope is the dream of a waking man.",
        author: "Pliny the Elder",
        category: "hope"
      },
      {
        quote: "Once you choose hope, anything's possible.",
        author: "Christopher Reeve",
        category: "hope"
      },
      {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        category: "success"
      },
      {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
        category: "success"
      },
      {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett",
        category: "success"
      },
      {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
        category: "success"
      },
      {
        quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
        author: "Conrad Hilton",
        category: "success"
      },
      {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
        category: "success"
      },
      {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        category: "success"
      },
      {
        quote: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler",
        category: "success"
      },
      {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
        category: "success"
      },
      {
        quote: "Success is liking yourself, liking what you do, and liking how you do it.",
        author: "Maya Angelou",
        category: "success"
      },
      {
        quote: "An investment in knowledge pays the best interest.",
        author: "Benjamin Franklin",
        category: "knowledge"
      },
      {
        quote: "The only source of knowledge is experience.",
        author: "Albert Einstein",
        category: "knowledge"
      },
      {
        quote: "Knowledge is power.",
        author: "Francis Bacon",
        category: "knowledge"
      },
      {
        quote: "Real knowledge is to know the extent of one's ignorance.",
        author: "Confucius",
        category: "knowledge"
      },
      {
        quote: "Knowledge without application is simply knowledge. Applying the knowledge to one's life is wisdom—and that is the ultimate virtue.",
        author: "Anonymous",
        category: "knowledge"
      },
      {
        quote: "The good life is one inspired by love and guided by knowledge.",
        author: "Bertrand Russell",
        category: "knowledge"
      },
      {
        quote: "To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
        author: "Marilyn vos Savant",
        category: "knowledge"
      },
      {
        quote: "Knowledge will give you power, but character respect.",
        author: "Bruce Lee",
        category: "knowledge"
      },
      {
        quote: "Knowledge speaks, but wisdom listens.",
        author: "Jimi Hendrix",
        category: "knowledge"
      },
      {
        quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        author: "Dr. Seuss",
        category: "knowledge"
      }
    ]
  }

export default quotes