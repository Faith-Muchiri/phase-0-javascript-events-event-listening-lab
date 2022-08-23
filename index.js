function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
        alert("Hee hee, that tickles!");
    }

    input.addEventListener('click', clickAlert);
}
// const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });
addingEventListener();