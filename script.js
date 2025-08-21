// Question banks for each subject
const questionBanks = {
    math: [
        {
            question: "What is the value of π (pi) rounded to two decimal places?",
            options: ["3.14", "3.16", "3.18", "3.12"],
            answer: 0
        },
        {
            question: "What is the square root of 144?",
            options: ["12", "14", "16", "18"],
            answer: 0
        },
        {
            question: "Solve for x: 2x + 5 = 15",
            options: ["5", "10", "7.5", "5.5"],
            answer: 0
        },
        {
            question: "What is the area of a circle with radius 5 units?",
            options: ["25π", "10π", "5π", "50π"],
            answer: 0
        },
        {
            question: "What is 3/4 expressed as a decimal?",
            options: ["0.75", "0.25", "0.5", "0.3"],
            answer: 0
        },
        {
            question: "What is the next prime number after 17?",
            options: ["19", "21", "23", "25"],
            answer: 0
        },
        {
            question: "What is the value of 5! (5 factorial)?",
            options: ["120", "60", "25", "15"],
            answer: 0
        }
    ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            answer: 0
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s"],
            answer: 0
        },
        {
            question: "Which law states that every action has an equal and opposite reaction?",
            options: ["Newton's Third Law", "Newton's First Law", "Newton's Second Law", "Law of Gravitation"],
            answer: 0
        }
    ],
    chemistry: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Go"],
            answer: 0
        },
        {
            question: "What is the pH value of pure water?",
            options: ["7", "5", "8", "0"],
            answer: 0
        },
        {
            question: "What is the lightest element?",
            options: ["Hydrogen", "Helium", "Oxygen", "Lithium"],
            answer: 0
        }
    ],
    biology: [
        {
            question: "What is the powerhouse of the cell?",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
            answer: 0
        },
        {
            question: "How many chromosomes do humans have?",
            options: ["46", "23", "48", "24"],
            answer: 0
        },
        {
            question: "What is the study of plants called?",
            options: ["Botany", "Zoology", "Ecology", "Genetics"],
            answer: 0
        }
    ],
    accountancy: [
        {
            question: "What is the basic accounting equation?",
            options: ["Assets = Liabilities + Equity", "Income = Revenue - Expenses", "Profit = Sales - Costs", "Debit = Credit"],
            answer: 0
        }
    ],
    "business": [
        {
            question: "What does SWOT stand for in business analysis?",
            options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Workforce, Operations, Technology", "Strategy, Workflow, Organization, Tactics", "Success, Wealth, Outreach, Trade"],
            answer: 0
        }
    ],
    economics: [
        {
            question: "What does GDP stand for?",
            options: ["Gross Domestic Product", "General Domestic Production", "Gross Development Product", "General Development Plan"],
            answer: 0
        }
    ],
    "social-science": [
        {
            question: "What is the study of human societies and cultures called?",
            options: ["Anthropology", "Sociology", "Psychology", "Archaeology"],
            answer: 0
        }
    ],
    geography: [
        {
            question: "What is the longest river in the world?",
            options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
            answer: 0
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1945", "1918", "1939", "1941"],
            answer: 0
        }
    ],
    psychology: [
        {
            question: "Who is known as the father of psychoanalysis?",
            options: ["Sigmund Freud", "Carl Jung", "B.F. Skinner", "Ivan Pavlov"],
            answer: 0
        }
    ],
    "physical-education": [
        {
            question: "How many players are there in a standard basketball team?",
            options: ["5", "6", "7", "4"],
            answer: 0
        }
    ],
    english: [
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            answer: 0
        }
    ],
    hindi: [
        {
            question: "Who is considered the father of modern Hindi literature?",
            options: ["Bharatendu Harishchandra", "Premchand", "Jaishankar Prasad", "Mahadevi Verma"],
            answer: 0
        }
    ],
    "general-knowledge": [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: 0
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: 0
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
            answer: 0
        }
    ],
    "environmental-studies": [
        {
            question: "What is the primary cause of global warming?",
            options: ["Greenhouse gases", "Ozone depletion", "Solar radiation", "Volcanic activity"],
            answer: 0
        },
        {
            question: "Which of these is a renewable energy source?",
            options: ["Solar power", "Coal", "Natural gas", "Petroleum"],
            answer: 0
        },
        {
            question: "What is the main gas found in Earth's atmosphere?",
            options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
            answer: 0
        }
    ],
    ai: [
        {
            question: "What does AI stand for?",
            options: ["Artificial Intelligence", "Automated Inference", "Advanced Interaction", "Algorithmic Intelligence"],
            answer: 0
        }
    ],
    ip: [
        {
            question: "What does IP stand for in technology?",
            options: ["Internet Protocol", "Intellectual Property", "Internal Processing", "Information Protocol"],
            answer: 0
        }
    ],
    "computer-science": [
        {
            question: "What is the brain of a computer?",
            options: ["CPU", "GPU", "RAM", "Hard Drive"],
            answer: 0
        }
    ],
    tech: [
        {
            question: "Which company created the iPhone?",
            options: ["Apple", "Samsung", "Google", "Microsoft"],
            answer: 0
        }
    ],
    sports: [
        {
            question: "How many players are there in a cricket team?",
            options: ["11", "10", "12", "9"],
            answer: 0
        }
    ],
    robotics: [
        {
            question: "What does ROS stand for in robotics?",
            options: ["Robot Operating System", "Robotic Organization Standard", "Remote Operating System", "Robotic Orientation System"],
            answer: 0
        },
        {
            question: "Which of these is a type of robot actuator?",
            options: ["Servo motor", "Sensor", "Camera", "Microphone"],
            answer: 0
        }
    ],
    "information-technology": [
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighTech Modern Language", "HyperTransfer Markup Language", "HighText Machine Language"],
            answer: 0
        },
        {
            question: "Which protocol is used for secure web browsing?",
            options: ["HTTPS", "HTTP", "FTP", "SMTP"],
            answer: 0
        }
    ]
};

// DOM elements
const subjectSelectionEl = document.getElementById('subject-selection');
const quizScreenEl = document.getElementById('quiz-screen');
const questionEl = document.querySelector('.question');
const optionsContainer = document.querySelector('.options-container');
const feedbackEl = document.querySelector('.feedback');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.querySelector('.score');
const progressBar = document.querySelector('.progress-bar');
const timeEl = document.getElementById('time');
const completionPopupEl = document.getElementById('completion-popup');
const finalScoreEl = document.getElementById('final-score');
const totalQuestionsEl = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const changeSubjectBtn = document.getElementById('change-subject-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
const subjectBtns = document.querySelectorAll('.subject-btn');
const clickSound = document.getElementById('click-sound');
const celebrationSound = document.getElementById('celebration-sound');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer = null;
let answered = false;
let selectedSubject = null;
let currentQuestions = [];
let questionQueue = [];
let allQuestionsUsed = false;

// Speech synthesis setup
let speechSynth = window.speechSynthesis;
let speechUtterance = null;

// Fisher-Yates shuffle algorithm for true randomness
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize quiz
function initQuiz() {
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Subject buttons
    subjectBtns.forEach(btn => {
        btn.addEventListener('click', handleSubjectSelection);
    });
    
    // Start quiz button
    startQuizBtn.addEventListener('click', startQuiz);
    
    // Next question button
    nextBtn.addEventListener('click', handleNextQuestion);
    
    // Restart button
    restartBtn.addEventListener('click', handleRestart);
    
    // Change subject button
    changeSubjectBtn.addEventListener('click', handleChangeSubject);
}

// Handle subject selection
function handleSubjectSelection(event) {
    playClickSound();
    subjectBtns.forEach(b => b.classList.remove('selected'));
    event.target.classList.add('selected');
    selectedSubject = event.target.getAttribute('data-subject');
    startQuizBtn.disabled = false;
}

// Handle next question button click
function handleNextQuestion() {
    if (!answered) return;
    
    playClickSound();
    
    if (questionQueue.length > 0) {
        // Get next question from queue
        currentQuestions.push(questionQueue.shift());
        currentQuestionIndex++;
        resetTimer();
        loadQuestion();
    } else {
        // All questions used, complete quiz
        completeQuiz();
    }
}

// Handle restart button click
function handleRestart() {
    playClickSound();
    completionPopupEl.style.display = 'none';
    initializeQuestionQueue();
    resetQuiz();
    loadQuestion();
}

// Handle change subject button click
function handleChangeSubject() {
    playClickSound();
    completionPopupEl.style.display = 'none';
    subjectSelectionEl.style.display = 'flex';
    quizScreenEl.style.display = 'none';
    selectedSubject = null;
    startQuizBtn.disabled = true;
    subjectBtns.forEach(b => b.classList.remove('selected'));
    // Reset question queue when changing subjects
    questionQueue = [];
}

// Play click sound
function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Audio play failed:", e));
    }
}

// Play celebration sound
function playCelebrationSound() {
    if (celebrationSound) {
        celebrationSound.currentTime = 0;
        celebrationSound.play().catch(e => console.log("Audio play failed:", e));
    }
}

// Speak text using Web Speech API
function speakText(text, rate = 1.0, pitch = 1.0) {
    // Cancel any ongoing speech
    if (speechSynth.speaking) {
        speechSynth.cancel();
    }
    
    // Create new utterance
    speechUtterance = new SpeechSynthesisUtterance(text);
    speechUtterance.rate = rate;
    speechUtterance.pitch = pitch;
    
    // Speak the text
    speechSynth.speak(speechUtterance);
}

// Play positive feedback for correct answer
function playPositiveFeedback() {
    const phrases = [
        "Perfect! Correct answer!",
        "Excellent! You got it right!",
        "Well done! That's correct!",
        "Great job! You're doing amazing!",
        "Brilliant! Keep up the good work!"
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    speakText(randomPhrase, 1.1, 1.1);
}

// Play encouraging feedback for wrong answer
function playEncouragingFeedback() {
    const phrases = [
        "Keep going! Try the next one!",
        "Don't worry! You'll get the next one!",
        "Good effort! Let's try another question!",
        "Almost there! Keep trying!",
        "No problem! Learning is a process!"
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    speakText(randomPhrase, 1.0, 1.0);
}

// Play celebratory feedback for quiz completion
function playCelebratoryFeedback() {
    const scorePercentage = (score / currentQuestions.length) * 100;
    let message;
    
    if (scorePercentage >= 80) {
        message = "Outstanding! You aced this quiz with " + score + " out of " + currentQuestions.length + " correct!";
    } else if (scorePercentage >= 60) {
        message = "Great job! You scored " + score + " out of " + currentQuestions.length + "! Well done!";
    } else {
        message = "Good effort! You got " + score + " out of " + currentQuestions.length + ". Keep practicing!";
    }
    
    speakText(message, 1.0, 1.1);
}

// Initialize question queue with shuffled questions
function initializeQuestionQueue() {
    const allQuestions = questionBanks[selectedSubject];
    questionQueue = shuffleArray([...allQuestions]);
    currentQuestions = [];
    allQuestionsUsed = false;
}

// Start quiz with selected subject
function startQuiz() {
    if (!selectedSubject) return;
    
    playClickSound();
    subjectSelectionEl.style.display = 'none';
    quizScreenEl.style.display = 'block';
    
    // Initialize quiz state
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = score;
    progressBar.style.width = '0%';
    
    // Initialize question queue and start quiz
    initializeQuestionQueue();
    
    // Get first question
    if (questionQueue.length > 0) {
        currentQuestions.push(questionQueue.shift());
        resetTimer();
        loadQuestion();
    }
}

// Load current question
function loadQuestion() {
    resetQuestionState();
    const question = currentQuestions[currentQuestionIndex];
    questionEl.textContent = question.question;
    
    // Create options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress
    updateProgressBar();
    
    // Start timer
    startTimer();
}

// Reset question state
function resetQuestionState() {
    answered = false;
    feedbackEl.textContent = '';
    feedbackEl.style.color = '#333';
    nextBtn.disabled = true;
    optionsContainer.innerHTML = '';
}

// Update progress bar
function updateProgressBar() {
    const totalQuestionsInSubject = questionBanks[selectedSubject].length;
    const questionsAnswered = currentQuestionIndex + 1;
    const progressPercentage = (questionsAnswered / totalQuestionsInSubject) * 100;
    progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
}

// Handle option selection
function selectOption(index) {
    if (answered) return;
    
    answered = true;
    clearInterval(timer);
    playClickSound();
    
    const options = document.querySelectorAll('.option');
    const correctIndex = currentQuestions[currentQuestionIndex].answer;
    
    if (index === correctIndex) {
        options[index].classList.add('correct');
        feedbackEl.innerHTML = '<i class="fas fa-check-circle"></i> Correct!';
        feedbackEl.style.color = '#28a745';
        score++;
        scoreEl.textContent = score;
        playPositiveFeedback();
    } else {
        options[index].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
        feedbackEl.innerHTML = '<i class="fas fa-times-circle"></i> Incorrect!';
        feedbackEl.style.color = '#dc3545';
        playEncouragingFeedback();
    }
    
    nextBtn.disabled = false;
}

// Start timer for current question
function startTimer() {
    timeLeft = 15;
    timeEl.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            handleTimeUp();
        }
    }, 1000);
}

// Handle when time runs out
function handleTimeUp() {
    clearInterval(timer);
    if (!answered) {
        feedbackEl.innerHTML = '<i class="fas fa-clock"></i> Time\'s up!';
        feedbackEl.style.color = '#dc3545';
        
        const correctIndex = currentQuestions[currentQuestionIndex].answer;
        const options = document.querySelectorAll('.option');
        options[correctIndex].classList.add('correct');
        
        answered = true;
        nextBtn.disabled = false;
        playEncouragingFeedback();
    }
}

// Reset timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 15;
    timeEl.textContent = timeLeft;
}

// Reset quiz for a new round
function resetQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = score;
    progressBar.style.width = '0%';
    
    resetTimer();
}

// Complete quiz and show results
function completeQuiz() {
    playCelebrationSound();
    playCelebratoryFeedback();
    
    finalScoreEl.textContent = score;
    totalQuestionsEl.textContent = currentQuestions.length;
    completionPopupEl.style.display = 'flex';
    
    // Update progress bar to full
    progressBar.style.width = '100%';
}

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);