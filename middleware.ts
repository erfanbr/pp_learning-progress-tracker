export {default} from 'next-auth/middleware';

export const config = {
    matcher: [
        '/platforms/:paths*',
        '/categories/:paths*',
        '/technologies/:paths*',
        '/courses/:paths*',
        '/learning_paths/:paths*',
    ]
}

// TODO: fix API authentication error, now its not working, even after authentication