const chars = "1234567890!&$#?%".split("");
const shuffle_duration = 400, shuffle_count = 5, shuffle_interval = shuffle_duration / shuffle_count;
let interval, timeout, original, element;
const handleRandomizeText = (e) => {
  timeout && clearTimeout(timeout);
  interval && clearInterval(interval);
  element && (element.innerText = original.join(""));
  element = e.target;
  randomizeText();          };
const randomizeText = () => {
  original = element.innerText.split("");
  interval = setInterval(() => element.innerText = getRandomText([...original]), shuffle_interval);
  timeout = setTimeout(() => {
    clearInterval(interval);
    element.innerText = original.join("");
    interval = element = original = timeout = null;
  }, shuffle_duration);      };
const getRandomText = (arr) => arr.map(char => (char !== "\n" && Math.random() >= 0.5) ? chars[
  Math.floor(Math.random() * chars.length)] : char).join("");
document.querySelectorAll('.shuffle-num').forEach(el =>
  el.addEventListener('mouseenter', handleRandomizeText));
