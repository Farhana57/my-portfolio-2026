// ১. এনিমেশন ইনিশিয়ালাইজ (AOS)
AOS.init({ duration: 1000, once: true });

// ২. টাইপিং এনিমেশন (Typed.js)
new Typed('#typed', {
    strings: ['KHATUN', 'FRONT-END DEV', 'UI ARCHITECT', 'COO @ UPTO TECH'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ৩. নেভিগেশন বার স্ক্রল ইফেক্ট
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});

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

// ৫. কাস্টম কার্সার এনিমেশন
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');
window.addEventListener('mousemove', (e) => {
    if (cursor && dot) {
        cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
    }
});

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
        fabIcon.classList.toggle('rotate-45');
    });
}
// ৭. ব্যাক-এন্ড কানেকশন (Fetch API) - Updated
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // input এর ID ব্যবহার করে সরাসরি ভ্যালু নেওয়া
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            const res = await fetch('http://localhost:3000/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert('Success! 🚀 Email has been sent.');
                contactForm.reset();
            } else {
                alert('Error: Message not sent. Check your App Password.');
            }
        } catch (err) {
            console.error(err);
            alert('Server is not running! Please start server.js.');
        }
    });
}
