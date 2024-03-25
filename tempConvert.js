/* eslint-disable no-param-reassign */
let tempSetting = 'c';

export default function toggleFarenCel() {
    const cList = document.querySelectorAll('.tempC');
    const fList = document.querySelectorAll('.tempF');

    if (tempSetting === 'f') {
        tempSetting = 'c';
        fList.forEach((item) => {
            item.style.display = 'none';
        });
        cList.forEach((item) => {
            item.style.display = 'block';
        });
    } else {
        tempSetting = 'f';
        fList.forEach((item) => {
            item.style.display = 'block';
        });
        cList.forEach((item) => {
            item.style.display = 'none';
        });
    }
}