console.clear();

const $Ap = [];
let banner = document.getElementById('banner');

const bannerPic = banner.getElementsByClassName('pic');
const bannerLength = bannerPic.length;
let index = 0;
let change = true;

//.pics banner
const picWrapper = document.createElement('DIV');
picWrapper.id = 'pics';
banner.appendChild(picWrapper);
$Ap.forEach.call(bannerPic, () => {
  picWrapper.appendChild(bannerPic[0]);
});

//
function slider(i) {
  picWrapper.style.left = i * -100 + '%';
  index = i;
  //active active
  $Ap.forEach.call(dot, (e, i) => {
    e.classList.remove('active');
    dot[index].classList.add('active');
  });
}

//
const autoPlayer = setInterval(() => {
  change && (

  index >= bannerLength - 1 ? index = 0 : index++,
  slider(index));

}, 5000);
//touch
'ontouchend' in document == false && (

banner.onmouseenter = () => change = !change,
banner.onmouseleave = () => change = !change);


//.dots dot
const dots = document.createElement('DIV');
dots.id = 'dots';
banner.appendChild(dots);
$Ap.forEach.call(bannerPic, () => {
  let dot = document.createElement('SPAN');
  dot.className = 'dot';
  dots.appendChild(dot);
});
//dot
const dot = dots.getElementsByClassName('dot');
$Ap.forEach.call(dot, (e, i) => {
  e.onclick = () => {
    const thisIndex = $Ap.indexOf.call(dot, dot[i]);
    slider(thisIndex);
  };
});

//.prev,.next
const prev = document.createElement('SPAN');
prev.id = 'prev';
banner.appendChild(prev);
prev.onclick = () => slider(index <= 0 ? index = bannerLength - 1 : index - 1);
//.next
const next = document.createElement('SPAN');
next.id = 'next';
banner.appendChild(next);
next.onclick = () => slider(index >= bannerLength - 1 ? index = 0 : index + 1);