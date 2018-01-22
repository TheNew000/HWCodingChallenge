
let userInfo = document.getElementsByClassName('user-info')[0];
let profPic = document.getElementsByClassName('profile-pic')[0];
let closeX = document.getElementsByClassName('close-x')[0];
let dropDown = document.getElementsByClassName('drop-down')[0];
let userName = document.getElementsByClassName('name')[0];
let caret = document.getElementsByClassName('caret')[0];
let leftNav = document.getElementsByClassName('left-nav')[0];
let dropDownItems = document.getElementsByClassName('d-d-item');
let navItems = document.getElementsByTagName('li');

profPic.onclick = () => {
    let counter = 0;

    userName.style.marginRight = "45px";
    profPic.classList.add('fade-out');
    closeX.classList.add('fade-in');
    userInfo.classList.add('active-u-i');
    dropDown.classList.add('open-d-d');
    [].forEach.call(dropDownItems, (item) => {
        setTimeout(() => {
            return item.classList.add('open-item')
        }, counter * 100);
        counter++;
    });
}

closeX.onclick = () => {
    let counter = 0;

    userName.style.marginRight = "15px";
    profPic.classList.remove('fade-out');
    closeX.classList.remove('fade-in');
    userInfo.classList.remove('active-u-i');
    dropDown.classList.remove('open-d-d');
    let reverseItems = [].slice.call(dropDownItems, 0).reverse();
    [].forEach.call(reverseItems, (item) => {
        setTimeout(() => {
            return item.classList.remove('open-item')
        }, counter * 100);
        counter++;
    });
}

caret.onclick = () => {
    if (leftNav.classList.contains('open-nav')){
        leftNav.classList.remove('open-nav');
    } else {
        leftNav.classList.add('open-nav');
    }
}

[].forEach.call(navItems, (item)=> {
    item.onclick = () => {
        if(item.classList.contains('active-nav-item')) {
            item.classList.remove('active-nav-item');
        } else {
            [].forEach.call(navItems, (subItem)=> {
                subItem.classList.remove('active-nav-item');
            });
            item.classList.add('active-nav-item');
        }
    }
});
