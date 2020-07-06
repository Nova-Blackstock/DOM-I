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

const image1 = document.querySelector('#cta-img')

image1.setAttribute('src', './img/header-img.png')

const image2 = document.querySelector('#middle-img')

image2.setAttribute('src', './img/mid-page-accent.jpg')

const navstuff = document.querySelectorAll('nav a')
navstuff[0].textContent = 'Services'
navstuff[1].textContent = 'Product'
navstuff[2].textContent = 'Vision'
navstuff[3].textContent = 'Features'
navstuff[4].textContent = 'About'
navstuff[5].textContent = 'Contact'

navstuff.forEach(it =>{
  it.style.color = 'green';
  it.style.fontSize = '1.2rem'
})

const navbox = document.querySelector('nav')
navbox.prepend('---->')
navbox.append('<----')
navbox.style.color = 'green'
navbox.style.fontSize = '1.2rem'



const bigwords = document.querySelector('h1')
console.log(bigwords)

bigwords.textContent = 'DOM is Awesome'

const buttonish = document.querySelector('button')
console.log(buttonish)

buttonish.textContent = 'Get Started'

const featurewords = document.querySelector('div.text-content')
featurewords.className = 'featuretextables'


featureword = featurewords.querySelector('h4')
featureword.textContent = 'Features'
featureword.style.fontSize = '1.5rem'

featuretext = featurewords.querySelector('p')
featuretext.textContent = 'It can do...you guessed it...anything. It does not do everything however.'
featuretext.style.fontSize = '1.2rem'

const aboutwords = document.querySelector('div.text-content')
aboutwords.className = 'abouttextables'

aboutword = aboutwords.querySelector('h4')
aboutword.textContent = 'About'
aboutword.style.fontSize = '1.5rem'

abouttext = aboutwords.querySelector('p')
abouttext.textContent = 'More than nothing but less than everything'
abouttext.style.fontSize = '1.2rem'

const serviceswords = document.querySelector('div.text-content')
serviceswords.className = 'servicestextables'

servicesword = serviceswords.querySelector('h4')
servicesword.textContent = 'Services'
servicesword.style.fontSize = '1.5rem'

servicestext = serviceswords.querySelector('p')
servicestext.textContent = 'We service anything, anytime, anywhere'
servicestext.style.fontSize = '1.2rem'

const productwords = document.querySelector('div.text-content')
productwords.className = 'producttextables'

productword = productwords.querySelector('h4')
productword.textContent = 'Product'
productword.style.fontSize = '1.5rem'

producttext = productwords.querySelector('p')
producttext.textContent = 'It is anything you want it to be'
producttext.style.fontSize = '1.2rem'

const visionwords = document.querySelector('div.text-content')
visionwords.className = 'visiontextables'

visionword = visionwords.querySelector('h4')
visionword.textContent = 'Vision'
visionword.style.fontSize = '1.5rem'

visiontext = visionwords.querySelector('p')
visiontext.textContent = 'We see the value of anything and want to share it'
visiontext.style.fontSize = '1.2rem'

contactwords = document.querySelector('section.contact')

contactword = contactwords.querySelector('h4')
contactword.textContent = 'Contact'
contactword.style.fontSize = '1.5rem'

contactmeta = contactwords.querySelectorAll('p')


contactmeta[0].textContent = '1234 Anywhere St., Anywhere USA 12345'
contactmeta[0].style.fontSize = '1.2rem'
contactmeta[1].textContent = '1 800 dial anything you want'
contactmeta[1].style.fontSize = '1.2rem'
contactmeta[2].textContent = 'idontemail@donttryit.com'
contactmeta[2].style.fontSize = '1.2rem'
//contactaddress = contactwords.querySelector('paragraph')
//contactaddress.textContent = '12321 Anywhere St, Anywhere USA 23423'

footerwords = document.querySelector('footer')
footerwords.textContent = 'Copyright Great Idea! 2018'
footerwords.style.fontSize = '1.2rem'