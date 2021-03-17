/* PX Converter main js file v-1.0 
   @mahidahmod.
*/

// Preloader
let preloader = document.getElementById('preloader');
setTimeout(preloaderOut, 1000);

function preloaderOut() {
    preloader.style.display = 'none';
    preloader.remove();
}

// converter box
if (document.querySelectorAll('.cbox').length) {
    // for px to rem 
    let inputPx = document.getElementById('js-user-input-px');
    let resultRem = document.getElementById('js-converted-result-rem');
    // for rem to px 
    let inputRem = document.getElementById('js-user-input-rem');
    let resultPx = document.getElementById('js-converted-result-px');
    // result input copy btn
    let copyResult = document.querySelectorAll('#js-copy-val');

    // copy btn click action 
    for (let i = 0; i < copyResult.length; i++) {
        let tooltip = document.querySelectorAll('#myTooltip'); // tooltip
        copyResult[i].addEventListener('click', () => {
            let resultVal = copyResult[i].previousElementSibling;
            tooltip[i].innerText = 'Copied';
            resultVal.select();
            document.execCommand('copy');
        });

        // mouseout action 
        copyResult[i].addEventListener('mouseout', () => {
            tooltip[i].innerText = 'Copy';
        });
    } /* End for loop */

    // for px to rem 
    inputPx.addEventListener('keyup', pxTorem);

    function pxTorem() {
        // 1rem = 16px 
        let defaultPx = 16;
        let inputVal = inputPx.value;
        let converted = `${inputVal / defaultPx}rem`;
        resultRem.value = converted;
    }

    // for rem to px 
    inputRem.addEventListener('keyup', remTopx);

    function remTopx() {
        // 16px = 1rem 
        let defaultRem = 16;
        let inputVal = inputRem.value;
        let converted = `${inputVal * defaultRem}px`;
        resultPx.value = converted;
    }
} else {
    console.error('Something is wrong! Refresh page again.');
}

// Copy Right Dynamic date {Today is 15/3/2021}
let copyRight = document.querySelector('#copyright-date');
let date = new Date();
let copyRightYear = date.getFullYear();
copyRight.innerText = copyRightYear;