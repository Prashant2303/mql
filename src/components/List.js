import React from 'react';

const List = () => {
    let questions = [
        {
            link: 'https://leetcode.com/problems/game-of-life/',
            site: 'Leetcode',
            name: 'Game of Life',
            difficulty: '',
            status: '',
            notes: '',
        },
        {
            link: 'https://leetcode.com/problems/set-matrix-zeroes/',
            site: 'Leetcode',
            name: 'Set Matrix Zeroes',
            difficulty: '',
            status: '',
            notes: '',
        },
    ];

    return (
        <div>
            {
                questions.map((question) => <div><a href={question.link} target='_blank'>{question.name}</a> </div>)
            }
        </div>
    )
}

export default List;