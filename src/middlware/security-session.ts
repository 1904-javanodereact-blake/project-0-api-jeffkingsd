import session from 'express-session';

const sess = {
    secret: 'omgwhatdidhesayaboutover9000',
    cookie: {secure: false},
    resave: false,
    saveUninitialized: false,
}

export const sessionERSmiddle = session(sess);
