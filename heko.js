function hk(){
  var el = document.createElement('iframe');
  var mq = window.matchMedia('(min-width: 500px)');
  el.src='//heko-chat.herokuapp.com';
  el.style.position = 'fixed';
  el.style.bottom = 0;
  el.style.right = 0;
  el.style.border = 0;
  el.style.width = mq.matches ? '300px' : 'calc(100% + 8px)';
  el.style.height = '100%';
  var inside = document.querySelector('body');
  inside.appendChild(el);
}
