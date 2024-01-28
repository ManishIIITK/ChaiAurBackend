import express from 'express';

const app = express();

const jokesArray = [
    {
        id: 1,
        setup: "Why did the programmer quit his job?",
        punchline: "Because he didn't get arrays!"
    },
    {
        id: 2,
        setup: "How do you comfort a JavaScript bug?",
        punchline: "You console it!"
    },
    {
        id: 3,
        setup: "Why did the HTML element go to therapy?",
        punchline: "It had too many issues!"
    },
    {
        id: 4,
        setup: "What's a programmer's favorite place in a house?",
        punchline: "The living room, because there's no JavaScript there!"
    },
    {
        id: 5,
        setup: "Why do programmers prefer dark mode?",
        punchline: "Because light attracts bugs!"
    }
];

app.get('/api', (req, res) => {
    res.send('Server is ready');
})

app.get('/api/jokes', (req, res) => {
    res.send(jokesArray);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
}) 