document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactivity to cards
document.querySelectorAll('.alumni-card, .notice-card, .social-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Pause ticker on hover
const ticker = document.querySelector('.ticker-content');
const tickerContainer = document.querySelector('.news-ticker');

tickerContainer.addEventListener('mouseenter', function () {
    ticker.style.animationPlayState = 'paused';
});

tickerContainer.addEventListener('mouseleave', function () {
    ticker.style.animationPlayState = 'running';
});
let current = 0;
const slides = document.querySelectorAll(".slides img");
setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 3000);
function viewMore() {
    alert("Redirecting to full Welcome Message...");
    // Example redirection
    window.location.href = "about.html";
}

function autoScrollElement(el) {
  let scrollAmount = 0;
  let direction = 1;
  setInterval(() => {
    el.scrollTop += direction;
    scrollAmount += direction;
    if (scrollAmount > el.scrollHeight - el.clientHeight || scrollAmount < 0) {
      direction *= -1;
    }
  }, 50);
}

autoScrollElement(document.getElementById('insta'));
autoScrollElement(document.getElementById('yt'));
autoScrollElement(document.getElementById('twitter'));
  const instaFeed = document.getElementById('instaFeed');
  let direction = 1;

  function autoScroll() {
    instaFeed.scrollTop += direction;
    if (instaFeed.scrollTop + instaFeed.clientHeight >= instaFeed.scrollHeight) {
      direction = -1;
    }
    if (instaFeed.scrollTop <= 0) {
      direction = 1;
    }
  }

  setInterval(autoScroll, 50);

function updateDateTime() {
  const dateEl = document.getElementById("date");
  const timeEl = document.getElementById("time");

  const now = new Date();
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('en-US', optionsDate).toUpperCase();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  timeEl.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();