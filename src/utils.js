export const getLastChild = (node, selector) => {
    const nodes = node.querySelectorAll(selector);
    return nodes[nodes.length - 1];
};

export const getCookie = (cookie) => {
    const callback = (row) => row.startsWith(`${cookie}=`);
    return document.cookie?.split('; ')?.find(callback)?.split('=')[1];
};

export const showRefreshToken = () => {
    document.querySelector('#auth').classList.remove('hidden');
    document.querySelector('#orders').innerText = '';
};

export const hideRefreshToken = () => document.querySelector('#auth').classList.add('hidden');
