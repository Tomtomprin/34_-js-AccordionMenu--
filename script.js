// slideUp
const slideUp = (el, duration = 300) => {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
        el.style.display = "none";
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
    }, duration);
};


// slideDown
const slideDown = (el, duration = 300) => {
    // ↓elに対するdisplayスタイルを一旦除去。（なくても動いた）
    el.style.removeProperty("display");
    // ↓改めてgetComputedStyle・・・()の要素の、スタイル状況を取得
    let display = window.getComputedStyle(el).display;
    // ↓もし、上記で定義したdisplayが「none」で合った場合、blockとする（表示させる）
    if (display === "none") {
        display = "block";
    }
    el.style.display = display;
    // ↓offsetHeight関数で、el.の高さを取得して、heightと定義する
    let height = el.offsetHeight;
    console.log(height);
    el.style.overflow = "hidden";

    // ↓（備考）下述のheightは、js定義のheightではなく、CSSのスタイル名のheightである。
    // CSSのスタイルは一旦高さなどはなくしておく　
    // el.style.height = 0;

    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;


    // 変化する項目・秒数などの記述
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";

    // 変更後の高さをどれだけにするか。elの高さにすると記述
    el.style.height = height + "px";

    // パディングなど一旦なくしておいたスタイルについて、「なくす」をなくす→CSSのスタイルを活かす
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");

    setTimeout(() => {
        el.style.removeProperty("height");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
    }, duration);
};




const ClassOpenBtnWrapper = document.querySelectorAll('.open_btn_wrapper');
const ClassOpenBtnOn = document.querySelectorAll('.open_btn_on');
const ClassOpenBtnOff = document.querySelectorAll('.open_btn_off');
const ClassOpenBtnArea = document.querySelectorAll('.open_btn_area');
const el = document.querySelectorAll('.description');




for (let i = 0; i < ClassOpenBtnOn.length; i++) {
    ClassOpenBtnOn[i].addEventListener('click', () => {
        slideDown(el[i], 300);
        ClassOpenBtnArea[i].classList.add('active')
        ClassOpenBtnOn[i].classList.add('active');
        ClassOpenBtnOff[i].classList.add('active');

    })

}

for (let i = 0; i < ClassOpenBtnOff.length; i++) {
    ClassOpenBtnOff[i].addEventListener('click', () => {
        slideUp(el[i], 300);
        ClassOpenBtnArea[i].classList.remove('active')
        ClassOpenBtnOn[i].classList.remove('active');
        ClassOpenBtnOff[i].classList.remove('active');
    })
}


// 参考URL
// https://web-dev.tech/front-end/javascript/slide-methods-on-vanilla-javascript/#index_id1