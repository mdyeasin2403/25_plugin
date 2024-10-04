$(function(){

// one
$('.c1').counterUp({
    delay: 10,
    time: 1000
});

// two
$(".c2").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
                                $(this).text(now);
        },
      }
    );
});

// three
$('.c3').counterUp({
        delay: 10,
        time: 1000
    });

// four
$(".num").numScroll({
    number: 123456
  });

// five
// Selector
const counters = document.querySelectorAll('.c4');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}

});