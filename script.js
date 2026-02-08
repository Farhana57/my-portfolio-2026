// ১. এনিমেশন ইনিশিয়ালাইজ (AOS)
AOS.init({ duration: 1000, once: true, disable: 'mobile' });

// ২. টাইপিং এনিমেশন
if(document.getElementById('typed')) {
    new Typed('#typed', {
        strings: ['KHATUN', 'FRONT-END DEV', 'UI ARCHITECT', 'COO @ UPTO TECH'],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// ৩. নেভিগেশন বার স্ক্রল ইফেক্ট (এটি আপডেট করা হয়েছে)
const handleNavbarScroll = () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        // ২০ পিক্সেলের বেশি স্ক্রল করলেই 'scrolled' ক্লাস যোগ হবে
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
};

window.addEventListener('scroll', handleNavbarScroll);
// পেজ লোড হওয়ার সময়ও একবার চেক করবে
window.addEventListener('load', handleNavbarScroll);

// ৪. মোবাইল মেনু কন্ট্রোল
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
}

const closeMenu = () => {
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
};

if (closeBtn) closeBtn.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// ৫. কাস্টম কার্সার
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');

if (window.innerWidth > 768) { 
    window.addEventListener('mousemove', (e) => {
        if (cursor && dot) {
            cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
        }
    });
} else {
    if(cursor) cursor.style.display = 'none';
    if(dot) dot.style.display = 'none';
}

// ৬. ফ্লোটিং অ্যাকশন বাটন (FAB)
const fabMain = document.getElementById('fab-main');
const fabOptions = document.getElementById('fab-options');
const fabIcon = document.getElementById('fab-icon');

if (fabMain) {
    fabMain.addEventListener('click', () => {
        fabOptions.classList.toggle('scale-0');
        fabOptions.classList.toggle('opacity-0');
        fabOptions.classList.toggle('scale-100');
        fabOptions.classList.toggle('opacity-100');
        if(fabIcon) fabIcon.classList.toggle('rotate-45');
    });
}

// ৭. কন্টাক্ট ফর্ম
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        alert('কন্টাক্ট ফর্মটি বর্তমানে Localhost এ সেট করা। লাইভ ওয়েবসাইটে কাজ করানোর জন্য আপনাকে EmailJS বা Formspree ব্যবহার করতে হবে।');
    });
}