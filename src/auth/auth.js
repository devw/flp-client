import { getLastChild, hideRefreshToken } from '../utils';
import html from './auth.html';
import css from './auth.css';

const APP_API = process.env.APP_API;

const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${APP_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    const { accessToken } = await res.json();
    document.cookie = `accessToken=${accessToken};`;
    hideRefreshToken();
};

export const init = () => {
    const node = document.querySelector('#flp-app');
    node.insertAdjacentHTML('beforeend', html);
    getLastChild(node, 'form').addEventListener('submit', submitHandler);
};
