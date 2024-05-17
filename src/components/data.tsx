export const userData = [
    {
        id: 1,
        avatar: '/src/assets/doctorimg.png',
        messages: [
            {
                id: 1,
                avatar: '/src/assets/doctorimg.png',
                name: 'Jane Doe',
                message: 'Hey, Jakob',
            },
            {
                id: 2,
                avatar: '/src/assets/doctorimg.png',
                name: 'Jakob Hoeg',
                message: 'Hey!',
            },
            {
                id : 3,
                avatar: '/src/assets/doctorimg.png',
                name: 'Jane Doe',
                message: 'How are you?',
            },
            {
                id: 4,
                avatar: '/src/assets/doctorimg.png',
                name: 'Jakob Hoeg',
                message: 'I am good, you?',
            },
            {
                id: 5,
                avatar: '/src/assets/doctorimg.png',
                name: 'Jane Doe',
                message: 'I am good too!',
            },
            {
                id: 6,
                avatar: '/src/assets/doctorimg.png',
                name: 'Jakob Hoeg',
                message: 'That is good to hear!'
            },
           
        ],
        name: 'Jane Doe',
    },
    {
        id: 2,
        avatar: '/src/assets/doctorimg.png',
        name: 'John Doe',
    },
    {
        id: 3,
        avatar: '/src/assets/doctorimg.png',
        name: 'Elizabeth Smith',
    },
    {
        id: 4,
        avatar: '/src/assets/doctorimg.png',
        name: 'John Smith',
    }
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
    id: 5,
    avatar: '/src/assets/doctorimg.png',
    name: 'Jakob Hoeg',
};

export type LoggedInUserData = (typeof loggedInUserData);

export interface Message {
    id: number;
    avatar: string;
    name: string;
    message: string;
}

export interface User {
    id: number;
    avatar: string;
    messages: Message[];
    name: string;
}