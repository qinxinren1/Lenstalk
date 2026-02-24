// Unified Locations Data
// This file contains all location information used across the website

const LOCATIONS_DATA = [
    {
        id: 'kunming',
        title: 'Kunming HQ',
        shortTitle: 'Kunming HQ',
        description: 'Main campus with full facilities',
        fullDescription: 'Kunming, the "City of Eternal Spring" with pleasant climate and beautiful scenery, offers the perfect environment for learning Chinese while experiencing the collision of modern urban life and traditional Chinese culture.',
        image: 'assets/Kunming HQ/Cover.jpg',
        video: 'assets/Kunming HQ/01 video.mp4',
        gradient: 'linear-gradient(135deg, rgba(102, 204, 255, 0.25), rgba(0, 102, 204, 0.25))',
        videoTitle: 'Kunming HQ campus tour',
        videoDescription: 'Experience our Kunming headquarters and discover your new campus.',
        highlights: [
            'One on one personalized course',
            'Rich supporting facilities',
            'Excellent tutors with professional certificates and rich experience',
            '3 meals Monday to Friday and accommodation included'
        ],
        course: {
            intro: 'We will tailor your course to your personal demand and language level and match you with the tutor who is most suitable for you.',
            courseTypes: [
                { name: 'One on one Intensive Chinese', description: 'One on one intensive course for all language level/goals and culture demand' },
                { name: 'One on one HSK preparation', description: 'Personalized coaching focused on HSK goals' },
                { name: 'One on one Business Chinese', description: 'Specialized training for business communication and career development' },
                { name: 'One on one Travel Chinese', description: 'Practical Chinese designed for exploring China with confidence' }
            ],
            schedule: 'Classes are held from Monday to Friday. You can choose to study 4 hours, 5 hours, or 6 hours per day with flexible scheduling adjusted to your needs.',
            practice: 'We adopt a learning-practice combination model. Your tutor creates rich real-world contexts, accompanies you in all-Chinese speaking environments, and helps you integrate naturally into local life.'
        },
        experiences: {
            title: 'Abundant supporting facilities & vibrant city life',
            sections: [
                {
                    title: 'All-in-one campus facilities',
                    paragraphs: [
                        'Our main campus is located in the core of Kunming city center, offering the most convenient and comprehensive learning and living facilities.',
                        'Full campus facilities, modern classrooms, library and study areas, leisure space, and a cultural activities center are all available.'
                    ],
                    bullets: [
                        'Study areas',
                        'Leisure areas',
                        'Public communal areas'
                    ]
                },
                {
                    title: 'Life moments right downstairs',
                    paragraphs: [
                        'All the life scenes you need are at your side—you only need to go downstairs to encounter the vivid local life.'
                    ],
                    bullets: [
                        'Cafes',
                        'Gyms',
                        'Cinemas',
                        'Live houses',
                        'Bars',
                        'Shopping malls',
                        'Restaurants',
                        'Snack streets and food courts',
                        'Open-air markets',
                        'Supermarkets',
                        'Banks'
                    ]
                },
                {
                    title: 'Connected city transport',
                    paragraphs: [
                        'It is also very convenient to explore the rest of the city with nearby subway and bus stations.'
                    ]
                }
            ]
        },
        tutors: {
            description: 'All tutors undergo comprehensive training and hold CTCSOL or national teacher qualification certificates together with rich teaching experience. Lessons stay patient, professional, and engaging while using diverse methods to solve learning challenges.',
            linkText: 'More info about tutor team',
            linkHref: 'about.html#team'
        },
        accommodation: {
            description: 'Accommodation is right next to the main campus. Enjoy an independent room with private bathroom, daily room cleaning, 24-hour hot water, air conditioning, WiFi, and all essential living facilities.'
        },
        transport: {
            description: 'Kunming is located in Yunnan Province in southwest China. The most convenient way to arrive is by plane to Kunming Changshui International Airport, which operates 33 international routes across 17 countries and regions.'
        },
        pricing: {
            tagline: 'Special offer!',
            options: [
                { label: '4 hours per day (20 hours a week)', price: '$688 / week' },
                { label: '5 hours per day (25 hours a week)', price: '$785 / week' },
                { label: '6 hours per day (30 hours a week)', price: '$880 / week' }
            ],
            note: '',
            includes: [
                'Personalized Chinese course per week',
                'Program certificate',
                '3 meals Monday to Friday and accommodation',
                'Airport pick-up and drop-off',
                'Orientation',
                'All campus facilities',
                'Room cleaning everyday',
                'Free coffee everyday (Kunming HQ only)',
                'Free WiFi',
                'After-class activities and cultural activities (Kunming HQ)',
                'Commonly used medicines',
                '24/7 support',
                'Visa support materials'
            ],
            headline: 'Ready to launch your Chinese learning journey?',
            ctaText: 'Apply now',
            ctaUrl: 'apply.html'
        }
    },
    {
        id: 'dali',
        title: 'Dali',
        shortTitle: 'Dali',
        description: 'Historic city by Erhai Lake',
        fullDescription: 'Study Chinese in the historic city of Dali, surrounded by Erhai Lake, ancient alleyways, and Bai ethnic culture.',
        image: 'assets/locations/dali.jpg',
        gradient: 'linear-gradient(135deg, rgba(255, 204, 128, 0.25), rgba(255, 128, 0, 0.25))',
        videoTitle: 'Dali cultural experience',
        videoDescription: 'Discover the charm of learning Chinese in historic Dali.',
        highlights: [
            'Immersive one-on-one courses',
            'Historic old town atmosphere',
            'Excursions around Erhai Lake',
            'Homestay-style accommodation options'
        ],
        course: {
            intro: 'Build a personalized learning plan that connects your Chinese study with Dali\'s rich cultural backdrop.',
            courseTypes: [
                { name: 'One on one Intensive Chinese', description: 'Rapid progress tailored to your goals in Dali\'s inspiring setting' },
                { name: 'One on one Business Chinese', description: 'Develop professional communication with cultural insights' },
                { name: 'One on one Travel Chinese', description: 'Learn essential language for exploring Dali and beyond' },
                { name: 'One on one HSK preparation', description: 'Focused preparation for every HSK level' }
            ],
            schedule: 'Weekday classes with flexible 4h/5h/6h daily schedules to match your pace.',
            practice: 'Blend classroom study with real-life practice around the old town, markets, and lakeside communities.'
        },
        experiences: {
            title: 'Historic culture & Erhai lakeside life',
            sections: [
                {
                    title: 'Cultural immersion',
                    paragraphs: [
                        'Visit ancient architecture, explore vibrant local markets, and experience Bai ethnic traditions up close.'
                    ]
                },
                {
                    title: 'Lake and mountain adventures',
                    paragraphs: [
                        'Spend your free time around Erhai Lake, cycling through villages or hiking Cangshan Mountain for unforgettable views.'
                    ]
                }
            ]
        },
        tutors: {
            description: 'Our dedicated tutors travel with you through language and culture, ensuring every lesson stays meaningful and practical.',
            linkText: 'More info about tutor team',
            linkHref: 'about.html#team'
        },
        accommodation: {
            description: 'Stay in carefully selected guesthouses within Dali Old Town or nearby villages, with private rooms and local breakfasts available.'
        },
        transport: {
            description: 'Reach Dali via high-speed rail or short domestic flights from Kunming. Our team helps coordinate transfers from Dali Railway Station or airport.'
        },
        pricing: {
            tagline: 'Custom pricing packages',
            options: [
                { label: 'Tailored weekly programs', price: 'Contact us' }
            ],
            note: 'Tell us your study goals and length of stay to receive a personalized quote.',
            includes: [
                'One-on-one Chinese classes',
                'Cultural immersion activities',
                'Accommodation coordination',
                'Local support team assistance'
            ],
            headline: 'Ready to plan your stay in Dali?',
            ctaText: 'Talk to us',
            ctaUrl: 'contact.html'
        }
    },
    {
        id: 'fuxianhu',
        title: 'Fuxian Lake',
        shortTitle: 'Fuxian Lake',
        description: 'Lakeside learning environment',
        fullDescription: 'In beautiful Yunnan, Fuxian Lake shines like a pearl. Clear waters surrounded by mountains create a peaceful classroom in nature.',
        image: 'assets/locations/fuxian-lake.jpg',
        gradient: 'linear-gradient(135deg, rgba(128, 222, 234, 0.25), rgba(3, 169, 244, 0.25))',
        videoTitle: 'Fuxian Lake lakeside learning',
        videoDescription: 'Peaceful study environment by the shores of Fuxian Lake.',
        highlights: [
            'One on one personalized course',
            'Immersive experiences of scenery, history, and local life',
            'Excellent tutors with professional certificates',
            '3 meals Monday to Friday and accommodation included'
        ],
        course: {
            intro: 'We will tailor your course to your personal demand and language level, and match you with the tutor who is most suitable for you.',
            courseTypes: [
                { name: 'One on one Intensive Chinese', description: 'One on one intensive course for all language level/goals and culture demand' },
                { name: 'One on one Travel Chinese', description: 'Designed for travelers seeking confident communication' },
                { name: 'One on one HSK preparation', description: 'Comprehensive preparation for Chinese proficiency tests' }
            ],
            schedule: 'Classes run Monday to Friday with flexible 4h/5h/6h per day options to fit your rhythm.',
            practice: 'Tutors accompany you into authentic settings around the lake, connecting classroom learning with real scenarios and local life.'
        },
        experiences: {
            title: 'Immersive experiences of scenery, history, and local life',
            sections: [
                {
                    title: '',
                    bullets: [
                        'Get close to nature in the Moon Bay Wetland',
                        'Meet extraordinary lakeside beauty painted by nature',
                        'Set sail against the wind and try your favorite water sports',
                        'Climb Bijia Mountain nestled beside the lake and enjoy the gentle breeze',
                        'Visit the Yunnan Provincial Museum of Natural History on the Fuxian Lake fossil site and listen to the story of life evolution'
                    ]
                }
            ]
        },
        tutors: {
            description: 'All tutors undergo comprehensive training and hold CTCSOL or national teacher qualification certificates, providing patient, professional, and targeted teaching.',
            linkText: 'More info about tutor team',
            linkHref: 'about.html#team'
        },
        accommodation: {
            description: 'Accommodation is very close to Fuxian Lake with private rooms, daily cleaning, 24-hour hot water, and WiFi for a safe and comfortable stay.'
        },
        transport: {
            description: 'Fuxian Lake is located in Yuxi city, around 60 km from Kunming. The most convenient way is a 1.5-hour taxi ride, and you can easily use Didi to hail a ride in China.'
        },
        pricing: {
            tagline: 'Special offer!',
            options: [
                { label: '4 hours per day (20 hours a week)', price: '$1300 / week' },
                { label: '5 hours per day (25 hours a week)', price: '$1490 / week' },
                { label: '6 hours per day (30 hours a week)', price: '$1630 / week' }
            ],
            note: '',
            includes: [
                'Personalized Chinese classes per week',
                'Program certificate',
                '3 meals Monday to Friday and accommodation',
                'Kunming airport pick-up and drop-off',
                'Orientation',
                'All campus facilities',
                'Moon Bay Wetland Park fees',
                'Room cleaning everyday',
                'Free WiFi',
                'Commonly used medicines',
                '24/7 support',
                'Visa support materials'
            ],
            headline: 'Ready to launch your Chinese learning journey?',
            ctaText: 'Apply now',
            ctaUrl: 'apply.html'
        }
    },
    {
        id: 'jingmai',
        title: 'Jingmai Tea Mountain',
        shortTitle: 'Jingmai Mountain',
        description: 'Tea mountain cultural experience',
        fullDescription: 'Jingmai Tea Mountain is famous for its ancient tea forests, minority villages, and poetic scenery—perfect for immersive language learning.',
        image: 'assets/locations/jingmai.jpg',
        gradient: 'linear-gradient(135deg, rgba(200, 230, 201, 0.25), rgba(76, 175, 80, 0.25))',
        videoTitle: 'Tea mountain learning',
        videoDescription: 'Learn Chinese in the famous tea mountains.',
        highlights: [
            'One on one personalized course',
            'Immersive experiences of scenery, culture, and local life',
            'Excellent tutors with professional certificates',
            '3 meals Monday to Friday and accommodation included'
        ],
        course: {
            intro: 'We will tailor your course to your personal demand and language level, and match you with the tutor who is most suitable for you.',
            courseTypes: [
                { name: 'One on one Intensive Chinese', description: 'One on one intensive course for all language level/goals and culture demand' },
                { name: 'One on one Travel Chinese', description: 'Connect language learning with tea mountain adventures' },
                { name: 'One on one HSK preparation', description: 'Focused preparation for Chinese proficiency tests' }
            ],
            schedule: 'Classes run Monday to Friday with flexible 4h/5h/6h per day options to match your pace.',
            practice: 'Tutors combine lessons with real-life tea culture experiences, helping you integrate learning with daily local life.'
        },
        experiences: {
            title: 'Immersive experiences of scenery, culture, and local life',
            sections: [
                {
                    title: '',
                    bullets: [
                        'See how nature turns mountains, clouds, and trees into paintings',
                        'Feel the charm of thousand-year-old tea trees',
                        'Pick fresh tea leaves with locals and experience the full tea-making process',
                        'Walk through ethnic minority villages and admire traditional architecture',
                        'Immerse yourself in Bulang and Dai cultures and daily life'
                    ]
                }
            ]
        },
        tutors: {
            description: 'All tutors hold CTCSOL or national teacher qualification certificates, delivering patient, professional, and engaging lessons tailored to you.',
            linkText: 'More info about tutor team',
            linkHref: 'about.html#team'
        },
        accommodation: {
            description: 'Live among local villages with private rooms, daily cleaning, 24-hour hot water, WiFi, and essential living facilities for a comfortable stay.'
        },
        transport: {
            description: 'Travel to Kunming by plane, take the high-speed rail to Pu\'er City, and we will pick you up for a complimentary ride to Jingmai Tea Mountain.'
        },
        pricing: {
            tagline: 'Special offer!',
            options: [
                { label: '4 hours per day (20 hours a week)', price: '$1740 / week' },
                { label: '5 hours per day (25 hours a week)', price: '$1920 / week' },
                { label: '6 hours per day (30 hours a week)', price: '$2050 / week' }
            ],
            note: '',
            includes: [
                'Personalized Chinese classes per week',
                'Program certificate',
                '3 meals Monday to Friday and accommodation',
                'Kunming airport pick-up and drop-off',
                'Pu\'er to Jingmai Tea Mountain transfers',
                'Orientation',
                'All campus facilities',
                'Room cleaning everyday',
                'Free WiFi',
                'Commonly used medicines',
                '24/7 support',
                'Visa support materials'
            ],
            headline: 'Ready to launch your Chinese learning journey?',
            ctaText: 'Apply now',
            ctaUrl: 'apply.html'
        }
    },
    {
        id: 'shaxi',
        title: 'Shaxi',
        shortTitle: 'Shaxi',
        description: 'Ancient tea horse road town',
        fullDescription: 'Shaxi is a well-preserved ancient town on the Tea Horse Road, offering a unique blend of history, culture, and natural beauty for immersive Chinese learning.',
        image: 'assets/shaxi/cover.jpg',
        video: null,
        gradient: 'linear-gradient(135deg, rgba(183, 149, 11, 0.25), rgba(230, 126, 34, 0.25))',
        videoTitle: 'Shaxi ancient town experience',
        videoDescription: 'Discover the charm of learning Chinese in historic Shaxi.',
        highlights: [
            'One on one personalized course',
            'Ancient tea horse road culture',
            'Well-preserved historic architecture',
            '3 meals Monday to Friday and accommodation included'
        ],
        course: {
            intro: 'We will tailor your course to your personal demand and language level, and match you with the tutor who is most suitable for you.',
            courseTypes: [
                { name: 'One on one Intensive Chinese', description: 'One on one intensive course for all language level/goals and culture demand' },
                { name: 'One on one Travel Chinese', description: 'Learn Chinese while exploring ancient tea horse road culture' },
                { name: 'One on one HSK preparation', description: 'Focused preparation for Chinese proficiency tests' }
            ],
            schedule: 'Classes run Monday to Friday with flexible 4h/5h/6h per day options to match your pace.',
            practice: 'Tutors combine lessons with real-life cultural experiences in the ancient town, helping you integrate learning with local traditions.'
        },
        experiences: {
            title: 'Immersive experiences of history, culture, and local life',
            sections: [
                {
                    title: '',
                    bullets: [
                        'Explore the ancient Sideng Square and historic architecture',
                        'Experience traditional Bai ethnic culture and customs',
                        'Walk along the ancient tea horse road routes',
                        'Visit local markets and experience authentic daily life',
                        'Enjoy the peaceful atmosphere of this well-preserved historic town'
                    ]
                }
            ]
        },
        tutors: {
            description: 'All tutors hold CTCSOL or national teacher qualification certificates, delivering patient, professional, and engaging lessons tailored to you.',
            linkText: 'More info about tutor team',
            linkHref: 'about.html#team'
        },
        accommodation: {
            description: 'Stay in carefully selected accommodations within or near the ancient town, with private rooms, daily cleaning, 24-hour hot water, WiFi, and essential living facilities.'
        },
        transport: {
            description: 'Travel to Kunming by plane, then take transportation to Dali or Lijiang, and we will help coordinate transfers to Shaxi.'
        },
        pricing: {
            tagline: 'Special offer!',
            options: [
                { label: '4 hours per day (20 hours a week)', price: 'Contact us' },
                { label: '5 hours per day (25 hours a week)', price: 'Contact us' },
                { label: '6 hours per day (30 hours a week)', price: 'Contact us' }
            ],
            note: 'Please contact us for detailed pricing information.',
            includes: [
                'Personalized Chinese classes per week',
                'Program certificate',
                '3 meals Monday to Friday and accommodation',
                'Kunming airport pick-up and drop-off',
                'Orientation',
                'Room cleaning everyday',
                'Free WiFi',
                'Commonly used medicines',
                '24/7 support',
                'Visa support materials'
            ],
            headline: 'Ready to launch your Chinese learning journey?',
            ctaText: 'Contact us',
            ctaUrl: 'contact.html'
        }
    },
    {
        id: 'tengchong',
        title: 'Tengchong',
        shortTitle: 'Tengchong',
        description: 'Volcanic hot springs and ancient town',
        fullDescription: 'Tengchong offers a unique learning environment with volcanic hot springs, ancient town charm, and rich cultural heritage in western Yunnan.',
        image: 'assets/locations/tengchong.jpg',
        gradient: 'linear-gradient(135deg, rgba(142, 68, 173, 0.25), rgba(155, 89, 182, 0.25))',
        videoTitle: 'Tengchong cultural experience',
        videoDescription: 'Discover the charm of learning Chinese in Tengchong.',
        highlights: [
            'One on one personalized course',
            'Volcanic hot springs and natural beauty',
            'Ancient town atmosphere',
            '3 meals Monday to Friday and accommodation included'
        ],
        course: {
            intro: 'We will tailor your course to your personal demand and language level, and match you with the tutor who is most suitable for you.',
            courseTypes: [
                { name: 'One on one Intensive Chinese', description: 'One on one intensive course for all language level/goals and culture demand' },
                { name: 'One on one Travel Chinese', description: 'Learn Chinese while exploring volcanic landscapes and hot springs' },
                { name: 'One on one HSK preparation', description: 'Focused preparation for Chinese proficiency tests' }
            ],
            schedule: 'Classes run Monday to Friday with flexible 4h/5h/6h per day options to match your pace.',
            practice: 'Tutors combine lessons with real-life experiences in the ancient town and natural surroundings, helping you integrate learning with local culture.'
        },
        experiences: {
            title: 'Immersive experiences of nature, culture, and local life',
            sections: [
                {
                    title: '',
                    bullets: [
                        'Relax in natural volcanic hot springs',
                        'Explore the ancient town and historic architecture',
                        'Visit volcanic geological parks',
                        'Experience local markets and traditional crafts',
                        'Enjoy the unique natural and cultural environment'
                    ]
                }
            ]
        },
        tutors: {
            description: 'All tutors hold CTCSOL or national teacher qualification certificates, delivering patient, professional, and engaging lessons tailored to you.',
            linkText: 'More info about tutor team',
            linkHref: 'about.html#team'
        },
        accommodation: {
            description: 'Stay in carefully selected accommodations with private rooms, daily cleaning, 24-hour hot water, WiFi, and essential living facilities.'
        },
        transport: {
            description: 'Travel to Kunming by plane, then take a domestic flight or ground transportation to Tengchong. We will help coordinate transfers from Tengchong airport or bus station.'
        },
        pricing: {
            tagline: 'Special offer!',
            options: [
                { label: '4 hours per day (20 hours a week)', price: 'Contact us' },
                { label: '5 hours per day (25 hours a week)', price: 'Contact us' },
                { label: '6 hours per day (30 hours a week)', price: 'Contact us' }
            ],
            note: 'Please contact us for detailed pricing information.',
            includes: [
                'Personalized Chinese classes per week',
                'Program certificate',
                '3 meals Monday to Friday and accommodation',
                'Kunming airport pick-up and drop-off',
                'Orientation',
                'Room cleaning everyday',
                'Free WiFi',
                'Commonly used medicines',
                '24/7 support',
                'Visa support materials'
            ],
            headline: 'Ready to launch your Chinese learning journey?',
            ctaText: 'Contact us',
            ctaUrl: 'contact.html'
        }
    }
];

// Helper functions
function getLocationById(id) {
    return LOCATIONS_DATA.find(loc => loc.id === id);
}

function getAllLocations() {
    return LOCATIONS_DATA;
}

// Function to render location cards
function renderLocationCards(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const { 
        showAll = true, 
        locationIds = null,
        cardStyle = 'scroll', // 'scroll' or 'grid'
        minWidth = '220px'
    } = options;
    
    const locationsToShow = locationIds 
        ? LOCATIONS_DATA.filter(loc => locationIds.includes(loc.id))
        : LOCATIONS_DATA;
    
    // Preserve existing content (like Online Program card) by only clearing location cards
    const existingCards = container.querySelectorAll('.location-card');
    existingCards.forEach(card => card.remove());
    
    locationsToShow.forEach(location => {
        const card = document.createElement('a');
        card.href = `program-location.html?location=${location.id}`;
        card.className = 'location-card';
        
        if (cardStyle === 'scroll') {
            card.style.cssText = `
                background: #f8f9fa; 
                color: #333; 
                padding: 1.5rem; 
                border-radius: 8px; 
                text-decoration: none; 
                transition: all 0.3s ease; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                border: 1px solid #e9ecef; 
                text-align: center; 
                width: ${minWidth}; 
                min-width: ${minWidth};
                max-width: ${minWidth};
                flex-shrink: 0;
            `;
            
            const imageDiv = document.createElement('div');
            imageDiv.style.cssText = `
                height: 150px; 
                border-radius: 8px; 
                margin-bottom: 1rem; 
                background-image: ${location.gradient}, url('${location.image}'); 
                background-size: cover; 
                background-position: center; 
                background-repeat: no-repeat;
            `;
            card.appendChild(imageDiv);
        } else {
            card.style.cssText = `
                background: white; 
                border: 2px solid #e1e8ed; 
                border-radius: 16px; 
                padding: 2rem; 
                text-decoration: none; 
                color: #2c3e50; 
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(0,0,0,0.06);
                display: flex;
                flex-direction: column;
            `;
        }
        
        const title = document.createElement('h4');
        title.textContent = location.shortTitle || location.title;
        title.style.cssText = 'margin-bottom: 0.75rem; color: #2c3e50; font-size: 1.25rem; font-weight: 600;';
        
        const desc = document.createElement('p');
        desc.textContent = location.description;
        desc.style.cssText = 'color: #666; font-size: 0.95rem; line-height: 1.6; margin: 0;';
        
        card.appendChild(title);
        card.appendChild(desc);
        container.appendChild(card);
    });
    
    // Add hover effects
    const cards = container.querySelectorAll('.location-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
            this.style.boxShadow = cardStyle === 'scroll' ? '0 4px 12px rgba(0,0,0,0.15)' : '0 12px 28px rgba(0,0,0,0.12)';
            if (cardStyle === 'grid') {
                this.style.borderColor = '#7A99C7';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = cardStyle === 'scroll' ? '0 2px 8px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,0,0,0.06)';
            if (cardStyle === 'grid') {
                this.style.borderColor = '#e1e8ed';
            }
        });
    });
}

// Function to render footer locations
function renderFooterLocations() {
    // Try to find footer locations by ID first
    const footerLocationsById = document.getElementById('footer-locations');
    if (footerLocationsById) {
        footerLocationsById.innerHTML = '';
        LOCATIONS_DATA.forEach(location => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="program-location.html?location=${location.id}">${location.title}</a>`;
            footerLocationsById.appendChild(li);
        });
        return;
    }
    
    // Fallback: find by section heading
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        const heading = section.querySelector('h3');
        if (heading && heading.textContent.trim() === 'Locations') {
            const ul = section.querySelector('ul');
            if (ul) {
                ul.innerHTML = '';
                LOCATIONS_DATA.forEach(location => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="program-location.html?location=${location.id}">${location.title}</a>`;
                    ul.appendChild(li);
                });
            }
        }
    });
}

