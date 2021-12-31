import { getLastChild, getCookie, showRefreshToken } from '../utils';
import html from './orders.html';
import css from './orders.css';

const APP_API = process.env.APP_API;

const getOrders = ({ target }) => target.querySelector('textarea').value.split(/\n|,/);

const getHeader = () => ({ headers: new Headers({ Authorization: getCookie('accessToken') }) });

const showOrders = ({ target }, stdout) => (target.nextElementSibling.innerHTML = stdout);

const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${APP_API}/orders/${getOrders(e).join(',')}`, getHeader());
    const resText = await res.text();
    resText === 'Forbidden' ? showRefreshToken() : showOrders(e, resText);
};

export const init = () => {
    const node = document.querySelector('#flp-app');
    node.insertAdjacentHTML('beforeend', html);
    getLastChild(node, 'form').addEventListener('submit', submitHandler);
};
