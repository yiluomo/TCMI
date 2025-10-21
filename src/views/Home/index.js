pageUp = document.querySelector('.pageUp');

// 检查滚动位置并显示/隐藏pageUp元素 function togglePageUpVisibility() {
    if (window.scrollY > 100) { // 当页面向下滚动超过100px时显示
        pageUp.style.display = 'flex'; // 假设pageUp是一个块级元素，如果不是，可能需要调整为'flex'或'inline-block'
    } else {
        pageUp.style.display = 'none'; // 否则隐藏
    }


// 页面滚动时触发
window.addEventListener('scroll', togglePageUpVisibility);

// 页面加载时进行一次检查，以确保初始状态正确
togglePageUpVisibility();

// 点击pageUp元素时回到页面顶部
pageUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
    });
});