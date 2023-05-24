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
    fullName: 'Kilnam Chon',
    post: '',
    details: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: 'img/speaker-1.png',
    classes: '',
  },
  {
    id: 3,
    fullName: 'SohYeong Noh',
    post: 'Director of Art Centre Nabi and a board member of CC Korea',
    details: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'img/speaker-2.png',
    classes: 'desktop',
  },
  {
    id: 4,
    fullName: 'Julia Leda',
    post: 'President of Young Pirates of Europe',
    details: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: 'img/speaker-2.png',
    classes: 'desktop',
  },
  {
    id: 5,
    fullName: 'Yochai Benkler',
    post: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'img/speaker-1.png',
    classes: 'desktop',
  },
  {
    id: 6,
    fullName: 'Ryan Merkley',
    post: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    details: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    image: 'img/speaker-2.png',
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