const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Bar
const navs = document.querySelectorAll('header nav a');
// navs[0].style.color= "green";   // does not work, returns "Uncaught TypeError: Cannot set property 'color' of undefined"
 navs.forEach(element => element.style.color= "green");
 
navs[0].setAttribute('href', "#")
navs[0].textContent = siteContent["nav"]["nav-item-1"]
 
navs[1].setAttribute('href', "#")
navs[1].textContent = siteContent["nav"]["nav-item-2"]
 
navs[2].setAttribute('href', "#")
navs[2].textContent = siteContent["nav"]["nav-item-3"]
 
navs[3].setAttribute('href', "#")
navs[3].textContent = siteContent["nav"]["nav-item-4"]
 
navs[4].setAttribute('href', "#")
navs[4].textContent = siteContent["nav"]["nav-item-5"]
 
navs[5].setAttribute('href', "#")
navs[5].textContent = siteContent["nav"]["nav-item-6"]
 
// navAppend
navAppend = navs[0].cloneNode(true);
navAppend.textContent = "Append 1";
document.querySelector('nav').appendChild(navAppend);
 
navPrepend = navs[1].cloneNode(true);
navPrepend.textContent = "Prepend 1";
document.body.prepend(navPrepend);
 
//Header, button, img
const h1Title = document.querySelector("h1");
h1Title.textContent = siteContent["cta"]["h1"];
 
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]
 
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
 
 
//Features
const topContent1 = document.querySelector(".text-content h4")
topContent1.textContent = siteContent["main-content"]["features-h4"]
 
const toptext1 = document.querySelector('.text-content p')
toptext1.textContent = siteContent["main-content"]["features-content"]
 
//About
const topContent2 = document.querySelector('.top-content div:nth-child(2) h4') 
topContent2.textContent = siteContent['main-content']['about-h4'];
 
const topText2 = document.querySelector('.top-content div:nth-child(2) p') 
topText2.textContent = siteContent['main-content']['about-content'];
 
//Img
const midImg = document.querySelector('.middle-img')
midImg.src = siteContent["main-content"]["middle-img-src"];
 
//Services
const bottomContent1 = document.querySelector(".bottom-content .text-content h4")
bottomContent1.textContent = siteContent["main-content"]["services-h4"]
 
const bottomText1 = document.querySelector(".bottom-content .text-content p")
bottomText1.textContent = siteContent["main-content"]["services-content"]
 
//Product
const bottomContent2 = document.querySelector('.bottom-content div:nth-child(2) h4') //allows me to specifically access them even tho they have same class names
bottomContent2.textContent = siteContent['main-content']['product-h4'];
 
const bottomText2 = document.querySelector('.bottom-content div:nth-child(2) p') 
bottomText2.textContent = siteContent['main-content']['product-content'];
 
//Vision
const bottomContent3 = document.querySelector('.bottom-content div:nth-child(3) h4') 
bottomContent3.textContent = siteContent['main-content']['vision-h4'];
 
const bottomText3 = document.querySelector('.bottom-content div:nth-child(3) p') 
bottomText3.textContent = siteContent['main-content']['vision-content'];
 
//Contact
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4']
 
const contacts = document.querySelectorAll('.contact p') 
contacts[0].textContent = siteContent['contact']['address']
contacts[1].textContent = siteContent['contact']['phone']
contacts[2].textContent = siteContent['contact']['email']
 
//Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']