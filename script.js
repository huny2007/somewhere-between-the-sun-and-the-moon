
/* =========================================
   MUSIC PLAYER
========================================= */

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");
const volumeSlider = document.getElementById("music-volume");

if (music && musicButton) {

    if (volumeSlider) {
        music.volume = 0.5;

        volumeSlider.addEventListener("input", () => {
            music.volume = Number(volumeSlider.value);
        });
    }

    musicButton.addEventListener("click", async () => {
        if (music.paused) {
            try {
                await music.play();
                musicButton.textContent = "♫ Pause music";
                musicButton.classList.add("playing");
            } catch (error) {
                musicButton.textContent = "♫ Play music";
                musicButton.classList.remove("playing");
            }
        } else {
            music.pause();
            musicButton.textContent = "♫ Play music";
            musicButton.classList.remove("playing");
        }
    });
}


/* =========================================
   POEMS
========================================= */

const poems = {
    "poem-one": {
        title: "The Things I Didn't See",
        text: `You were making room for me
in places I hadn't imagined reaching.

Leaving doors open,
placing possibilities within my reach,
quietly believing in a version of me
I had not yet learned to become.

And I was careless
with so many of those moments.

It is strange, looking back,
to discover how much kindness
was hidden inside ordinary days.

I wish I had recognised it sooner.
I wish I had met your efforts
with the understanding they deserved.

Some apologies arrive late,
but that does not make the realisation
any less true.`
    },

    "poem-two": {
        title: "In the Margins",
        text: `You may never know
how often you appear
in the person I am trying to become.

In the courage to begin,
in the willingness to try again,
in paths I once thought
were never meant for me.

You were never just
a part of the lessons.

You became part of the meaning.`
    }
};


/* =========================================
   LETTERS
========================================= */

const letters = {
    apology: {
        title: "An apology",
        text: `I don't think I fully understood, at the time, how much you were doing for me. You were quietly creating opportunities, opening doors and encouraging me to grow, while I was often too careless to recognise what was being offered. Looking back, I wish I had been more responsible, more attentive and more appreciative of your efforts. I cannot change how I handled those moments, but I can learn from them. I am genuinely sorry, and I hope the person I become reflects at least some of the faith you placed in me.`
    },

    gratitude: {
        title: "A thank you",
        text: `Thank you for seeing possibilities in me that I hadn't quite learned to see in myself. I know how often you stood up for my potential, how you convinced other teachers that I could do it, even when I hadn't given them much reason to believe it myself. That kind of faith is something I don't think I'll ever take lightly again.

I don't think I have the words to explain how much you mean to me. I love no teacher the way I love you, and I hope you know that your guidance has meant far more to me than I have ever managed to express.

Some lessons stay long after the classroom is left behind. You are one of mine.`
    }
};


/* =========================================
   READING WINDOW
========================================= */

const windowBox = document.getElementById("reading-window");
const readingTitle = document.getElementById("reading-title");
const readingLabel = document.getElementById("reading-label");
const readingText = document.getElementById("reading-text");

function openReading(title, label, text) {
    if (!windowBox) return;

    readingTitle.textContent = title;
    readingLabel.textContent = label;
    readingText.textContent = text;

    windowBox.classList.remove("hidden");
}

document.querySelectorAll(".read-poem").forEach(button => {
    button.addEventListener("click", () => {
        const poem = poems[button.dataset.poem];

        if (poem) {
            openReading(
                poem.title,
                "FROM THE POETRY GARDEN",
                poem.text
            );
        }
    });
});

document.querySelectorAll(".letter-card").forEach(button => {
    button.addEventListener("click", () => {
        const letter = letters[button.dataset.letter];

        if (letter) {
            openReading(
                letter.title,
                "A PERSONAL LETTER",
                letter.text
            );
        }
    });
});

const closeReading = document.getElementById("close-reading");

if (closeReading && windowBox) {
    closeReading.addEventListener("click", () => {
        windowBox.classList.add("hidden");
    });

    windowBox.addEventListener("click", event => {
        if (event.target === windowBox) {
            windowBox.classList.add("hidden");
        }
    });
}


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".hero, .introduction, .poetry, .quiz-section, .chaand, .letters, .ending"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================
   CLASSROOM CHALLENGE — QUESTIONS
========================================= */

const quizQuestions = [
    {
        question: "Your teacher says, 'This won't be in the exam.' What do you do?",
        options: [
            "Relax. Finally, some good news.",
            "Write it down. Trust no one.",
            "Ask if the entire chapter is also excluded.",
            "Start packing your bags."
        ],
        answer: 1
    },

    {
        question: "The teacher asks, 'Who wants to answer?' The entire class suddenly becomes...",
        options: [
            "Extremely interested",
            "Deeply fascinated by their notebooks",
            "Professional statue models",
            "Fluent in avoiding eye contact"
        ],
        answer: 3
    },

    {
        question: "You hear: 'Take out a blank sheet of paper.' Your immediate reaction?",
        options: [
            "A surprise test. Wonderful.",
            "I suddenly cannot remember my own name.",
            "Can I please transfer schools?",
            "All of the above."
        ],
        answer: 3
    },

    {
        question: "Your teacher says, 'I will only take five minutes.' What does that mean?",
        options: [
            "Exactly five minutes",
            "One entire geological era",
            "The bell is now a distant dream",
            "Time has lost all meaning"
        ],
        answer: 1
    },

    {
        question: "You submit an assignment late. Your teacher asks, 'Any explanation?'",
        options: [
            "My printer developed a personality disorder.",
            "The assignment and I needed some space.",
            "I was waiting for the right creative inspiration.",
            "I have no defence. I plead guilty."
        ],
        answer: 3
    }
];


/* =========================================
   QUIZ GAME FUNCTIONALITY
========================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;

const welcomeScreen = document.getElementById("quiz-welcome");
const gameScreen = document.getElementById("quiz-game");
const resultScreen = document.getElementById("quiz-result");

const startButton = document.getElementById("start-quiz");
const nextButton = document.getElementById("next-question");
const restartButton = document.getElementById("restart-quiz");

const progressText = document.getElementById("quiz-progress");
const questionText = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");
const feedbackText = document.getElementById("quiz-feedback");
const scoreText = document.getElementById("quiz-score");
const messageText = document.getElementById("quiz-message");


function startQuiz() {

    currentQuestion = 0;
    score = 0;

    welcomeScreen.style.display = "none";
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";

    showQuestion();
}


function showQuestion() {

    answered = false;

    const question = quizQuestions[currentQuestion];

    progressText.textContent =
        "QUESTION " + (currentQuestion + 1) +
        " OF " + quizQuestions.length;

    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";
    feedbackText.textContent = "";
    nextButton.style.display = "none";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("quiz-option");

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        optionsContainer.appendChild(button);
    });
}


function selectAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    answered = true;

    const correctAnswer = quizQuestions[currentQuestion].answer;

    const allOptions =
        optionsContainer.querySelectorAll(".quiz-option");

    allOptions.forEach((button, index) => {

        button.disabled = true;

        if (index === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === correctAnswer) {

        score++;

        feedbackText.textContent =
            "Correct! Your teacher is almost impressed. ✨";

    } else {

        selectedButton.classList.add("wrong");

        feedbackText.textContent =
            "Incorrect. Please see me after class.";
    }

    nextButton.textContent =
        currentQuestion === quizQuestions.length - 1
        ? "Reveal my fate"
        : "Next question";

    nextButton.style.display = "inline-block";
}


function showResults() {

    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    scoreText.textContent =
        "You scored " + score + " out of " +
        quizQuestions.length + "!";

    if (score === 5) {

        messageText.textContent =
            "TEACHER'S FAVOURITE! Allegedly. Don't let it get to your head.";

    } else if (score === 4) {

        messageText.textContent =
            "Academic weapon. The staff room has heard of you.";

    } else if (score === 3) {

        messageText.textContent =
            "A respectable performance. Could do better. See me after class.";

    } else if (score >= 1) {

        messageText.textContent =
            "Survived by pure luck. Please revise.";

    } else {

        messageText.textContent =
            "We need to have a serious conversation about your classroom survival skills.";
    }
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}


if (
    welcomeScreen &&
    gameScreen &&
    resultScreen &&
    startButton &&
    nextButton &&
    restartButton
) {
    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", startQuiz);
}
