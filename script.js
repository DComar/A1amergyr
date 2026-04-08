// Translations
const translations = {
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.contact': 'Kontakt',
        
        // Home Page
        'home.title': 'Willkommen bei alamyerGYR',
        'home.subtitle': 'Ihr Institut für erstklassigen Nachhilfeunterricht',
        'home.description': 'Wir bieten professionellen Nachhilfeunterricht in Mathematik, Deutsch und Physik für Schüler aller Klassenstufen. Unser erfahrenes Team unterstützt Sie beim Erreichen Ihrer schulischen Ziele.',
        
        // Subjects
        'subjects.title': 'Unsere Fächer',
        'subjects.math': 'Mathematik',
        'subjects.math.desc': 'Von Grundrechenarten bis zur höheren Mathematik - wir machen Mathe verständlich.',
        'subjects.german': 'Deutsch',
        'subjects.german.desc': 'Grammatik, Rechtschreibung, Textanalyse und kreatives Schreiben.',
        'subjects.physics': 'Physik',
        'subjects.physics.desc': 'Mechanik, Elektrizität, Optik und moderne Physik einfach erklärt.',
        
        // Location
        'location.title': 'Unser Standort',
        'location.address': 'Besuchen Sie uns',
        
        // Contact Page
        'contact.title': 'Kontaktieren Sie uns',
        'contact.subtitle': 'Haben Sie Fragen? Wir helfen Ihnen gerne weiter!',
        'contact.name': 'Nachname',
        'contact.firstname': 'Vorname',
        'contact.email': 'E-Mail',
        'contact.date': 'Datum',
        'contact.class': 'Klasse',
        'contact.subject': 'Fach',
        'contact.message': 'Nachricht',
        'contact.submit': 'Nachricht senden',
        'contact.success': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
        'contact.error': 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.',
        
        // Subject Options
        'subject.math': 'Mathematik',
        'subject.german': 'Deutsch',
        'subject.physics': 'Physik',
        'subject.other': 'Andere',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.contact': 'Contact',
        
        // Home Page
        'home.title': 'Welcome to alamyerGYR',
        'home.subtitle': 'Your Institute for Excellent Tutoring',
        'home.description': 'We offer professional tutoring in Mathematics, German, and Physics for students of all grade levels. Our experienced team supports you in achieving your academic goals.',
        
        // Subjects
        'subjects.title': 'Our Subjects',
        'subjects.math': 'Mathematics',
        'subjects.math.desc': 'From basic arithmetic to advanced mathematics - we make math understandable.',
        'subjects.german': 'German',
        'subjects.german.desc': 'Grammar, spelling, text analysis, and creative writing.',
        'subjects.physics': 'Physics',
        'subjects.physics.desc': 'Mechanics, electricity, optics, and modern physics explained simply.',
        
        // Location
        'location.title': 'Our Location',
        'location.address': 'Visit Us',
        
        // Contact Page
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Have questions? We\'re happy to help!',
        'contact.name': 'Last Name',
        'contact.firstname': 'First Name',
        'contact.email': 'Email',
        'contact.date': 'Date',
        'contact.class': 'Class',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.submit': 'Send Message',
        'contact.success': 'Thank you! Your message has been sent successfully.',
        'contact.error': 'There was a problem sending your message. Please try again.',
        
        // Subject Options
        'subject.math': 'Mathematics',
        'subject.german': 'German',
        'subject.physics': 'Physics',
        'subject.other': 'Other',
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.contact': 'اتصل بنا',
        
        // Home Page
        'home.title': 'مرحباً بكم في alamyerGYR',
        'home.subtitle': 'معهدكم للدروس الخصوصية المتميزة',
        'home.description': 'نقدم دروساً خصوصية احترافية في الرياضيات والألمانية والفيزياء لطلاب جميع المراحل الدراسية. يدعمكم فريقنا ذو الخبرة في تحقيق أهدافكم الأكاديمية.',
        
        // Subjects
        'subjects.title': 'المواد الدراسية',
        'subjects.math': 'الرياضيات',
        'subjects.math.desc': 'من العمليات الحسابية الأساسية إلى الرياضيات المتقدمة - نجعل الرياضيات مفهومة.',
        'subjects.german': 'اللغة الألمانية',
        'subjects.german.desc': 'القواعد، الإملاء، تحليل النصوص والكتابة الإبداعية.',
        'subjects.physics': 'الفيزياء',
        'subjects.physics.desc': 'الميكانيكا، الكهرباء، البصريات والفيزياء الحديثة مشروحة ببساطة.',
        
        // Location
        'location.title': 'موقعنا',
        'location.address': 'قم بزيارتنا',
        
        // Contact Page
        'contact.title': 'اتصل بنا',
        'contact.subtitle': 'هل لديك أسئلة؟ يسعدنا مساعدتك!',
        'contact.name': 'اسم العائلة',
        'contact.firstname': 'الاسم الأول',
        'contact.email': 'البريد الإلكتروني',
        'contact.date': 'التاريخ',
        'contact.class': 'الصف',
        'contact.subject': 'المادة',
        'contact.message': 'الرسالة',
        'contact.submit': 'إرسال الرسالة',
        'contact.success': 'شكراً لك! تم إرسال رسالتك بنجاح.',
        'contact.error': 'حدثت مشكلة أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
        
        // Subject Options
        'subject.math': 'الرياضيات',
        'subject.german': 'الألمانية',
        'subject.physics': 'الفيزياء',
        'subject.other': 'أخرى',
    },
};

// Current language
let currentLang = localStorage.getItem('language') || 'de';

// Translate page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update text direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sections with dir attribute
    updateDirectionAttributes(lang);
}

// Update direction attributes for specific sections
function updateDirectionAttributes(lang) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    const sectionsToUpdate = [
        '.hero-content',
        '.subject-card',
        '.location-card',
        '.contact-header',
        '.card-header',
        '.form-group'
    ];
    
    sectionsToUpdate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.setAttribute('dir', dir);
        });
    });
}

// Initialize language switcher
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
}

// Initialize contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const submitBtn = form.querySelector('.submit-btn');
        const submitBtnText = submitBtn.querySelector('span');
        const originalText = submitBtnText.textContent;
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtnText.textContent = '...';
        
        // Hide previous messages
        formMessage.style.display = 'none';
        
        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formMessage.textContent = translations[currentLang]['contact.success'];
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formMessage.textContent = translations[currentLang]['contact.error'];
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtnText.textContent = originalText;
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Translate page to saved language
    translatePage(currentLang);
    
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Initialize contact form if it exists
    initContactForm();
});
