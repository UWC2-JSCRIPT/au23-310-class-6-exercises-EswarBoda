// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$('a').on('click', function(e) {
  e.preventDefault();
  alert(`Here's some info`);
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$('button').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  alert(`Bow wow!`);
})