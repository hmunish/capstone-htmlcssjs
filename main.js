// DOM Elements
const mobileMenu = document.querySelector('.mobile.menu');
const hamburgerIcon = document.querySelector('.hamburger_icon');
const closeIcon = document.querySelector('.close_icon');
const speakersContainer = document.querySelector('#speakers_container');
const speakersMoreButton = document.querySelector('.more_speakers');
const downIcon = document.querySelector('.down_icon');
let hiddenSpeakers;
const speakersData = [
  {
    id: 1,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker_01.png',
    classes: '',
  },
  {
    id: 2,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker_01.png',
    classes: '',
  },
  {
    id: 3,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker_01.png',
    classes: 'desktop',
  },
  {
    id: 4,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker_01.png',
    classes: 'desktop',
  },
  {
    id: 5,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker_01.png',
    classes: 'desktop',
  },
  {
    id: 6,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker_01.png',
    classes: 'desktop',
  },
];

// Functions

// Loading Speakers Fucntion

function loadSpeakers() {
  let speakerHtml;

  speakersData.forEach((o) => {
    speakerHtml = `<li class="speakers_box d-md-flex ${o.classes}">
                        <img src="${o.image}" alt="Speaker">
                        <div>
                            <div class="speakers_details">
                                <h3 class="speakers_details">${o.fullName}</h3>
                                <h5 class="speakers_details">${o.post}</h5>
                            </div>
                        <p class="speakers_details">${o.details}</p>
                        </div>
                        </li>`;
    speakersContainer.innerHTML += speakerHtml;
  });

  hiddenSpeakers = speakersContainer.querySelectorAll('.desktop');
}

function loadMoreSpeakers() {
  if (speakersMoreButton.textContent === 'Less') {
    speakersMoreButton.childNodes[0].nodeValue = 'More';
  } else {
    speakersMoreButton.childNodes[0].nodeValue = 'Less';
  }
  downIcon.classList.toggle('rota180');
  hiddenSpeakers.forEach((e) => {
    e.classList.toggle('desktop');
  });
}

// Toggling Menu Function

function toggleMenu() {
  hamburgerIcon.classList.toggle('dsp_none');
  mobileMenu.classList.toggle('dsp_none');
}

// Event Listeners
window.addEventListener('load', loadSpeakers);
hamburgerIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
speakersMoreButton.addEventListener('click', loadMoreSpeakers);