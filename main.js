function start() {
  document.getElementById('screen-1').style.display = 'none';
  document.getElementById('screen-2').style.display = 'block';
}

var btns = document.querySelectorAll('.select');

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', swapit);
}

function swapit(e) {
  let tar_ele = e.target.getAttribute('data-target');
  let curr_ele = e.target.getAttribute('data-curr');
  console.log(tar_ele);
  console.log(curr_ele);
  document.getElementById(curr_ele).style.display = 'none';
  document.getElementById(tar_ele).style.display = 'block';
}

document.querySelector('.btn-join').addEventListener('click', function() {
  window.location.replace(
    'https://dltclubs.com/?utm_source=application&utm_medium=medium&utm_campaign=campaign&utm_content=content#contact'
  );
});
