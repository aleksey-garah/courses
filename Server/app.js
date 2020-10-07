const express = require('express');
const app = express();
var cors = require('cors');

const port = 3000;

app.use(cors());

app.get('/courses', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Fundamentals of Credit',
            imageUrl: 'https://picsum.photos/100/100',
            status: 'DRAFT',
            instructors: [
                {
                    name: '"Roli Jain',
                    image: 'https://picsum.photos/300/300'
                },
                {
                    name: 'Sebastian Taylor',
                    image: 'https://picsum.photos/300/300'
                }
            ]
        },
        {
            id: 2,
            name: 'Accounting Fundamentals',
            imageUrl: 'https://picsum.photos/100/100',
            status: 'PUBLISHED',
            instructors: [
                {
                    name: 'Roli Jain',
                    image: 'https://picsum.photos/300/300'
                }
            ]
        }
    ])
});

app.get('/courses/:id', (req, res) => {
    res.json({
        id: 2,
        name: 'Accounting Fundamentals',
        images: ['https://picsum.photos/100/100'],
        status: 'PUBLISHED',
        instructors: [
            {
                name: 'Roli Jain',
                image: 'https://picsum.photos/300/300'
            }
        ]
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});