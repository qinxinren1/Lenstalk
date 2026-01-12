/**
 * Services & Activities Included Component Loader
 * Loads and renders the services and activities section for program pages
 */

// Program-specific first card configurations
const PROGRAM_CONFIGS = {
    'hsk': {
        title: 'One on one HSK preparation program',
        description: 'Intensive HSK preparation program 4h/5h/6h/per day (minimum book 1 week) with excellent tutor to reach your learning goals.'
    },
    'business': {
        title: 'Business Chinese Instruction',
        description: 'Intensive coaching 4/5/6 hours per day (minimum one-week booking) with seasoned tutors who help you achieve strategic communication goals.'
    },
    'intensive': {
        title: 'One on one Intensive Chinese program',
        description: 'Intensive Chinese learning program 4h/5h/6h/per day(minimum book 1 week) with excellent tutor to reach your learning goals.'
    },
    'travel': {
        title: 'Travel Chinese Instruction',
        description: 'Intensive 4/5/6 hour daily lessons (minimum one-week booking) with expert tutors focused on your travel objectives and destinations.'
    }
};

function renderServicesActivities(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Determine program type from options or use custom
    let firstService = {
        title: options.programTitle || 'Program Instruction',
        description: options.programDescription || 'Intensive program with excellent tutor to reach your learning goals.'
    };

    if (options.programType && PROGRAM_CONFIGS[options.programType]) {
        firstService = PROGRAM_CONFIGS[options.programType];
    } else if (options.programTitle) {
        firstService.title = options.programTitle;
        firstService.description = options.programDescription || firstService.description;
    }

    // Common services data
    const services = [
        firstService,
        {
            title: 'Airport pick-up and drop-off',
            description: 'Kunming Airport pick-up and drop-off service is included, please let us know your arriving flight details and we will meet you at the airport.',
            additionalText: 'Classes are held every Monday to Friday, so you\'d better arrive Kunming at certain Saturday or Sunday, then you can start your program immediately afterwards at next Monday.'
        },
        {
            title: 'Three meals Monday to Friday (offered in all locations)',
            description: 'We provide delicious Chinese food and ethnic minority food for three meals Monday to Friday in all learning locations.',
            additionalText: 'You can talk to different local Chinese people while enjoying the food or even cook a Chinese dish yourself.'
        },
        {
            title: 'Free coffee and tea Monday to Friday (only in Kunming HQ)',
            description: 'You can feel free to drink native Yunnan tea and coffee every day while learning in Kunming HQ and experience the authentic tea culture and the increasingly popular coffee culture in China.'
        },
        {
            title: 'Accommodation (offered in all locations)',
            description: '7 days Accommodation per week is included.',
            additionalText: 'Your room is an independent room with a private bathroom, clean, tidy, safe and comfortable.',
            additionalText2: 'Free room cleaning service is offered everyday.',
            additionalText3: '24-hour hot water, WiFi and other necessary living facilities are all included.'
        },
        {
            title: 'Teaching management (offered in all locations)',
            description: 'The teaching supervisor will assist your tutor in designing a teaching and learning plan based on your demand, supervise and guide each tutor to ensure the quality of teaching and better help you learn.'
        },
        {
            title: 'Academic affairs management (offered in all locations)',
            description: 'The academic director will select the most suitable tutor for you, or change tutors according to your learning progress, collect your learning feedback and solve various problems you encounter in your learning.'
        },
        {
            title: '24/7 support (offered in all locations)',
            description: 'We will help you solve various problems you encounter in life and help you clear away the troubles caused by different environments, different habits and cultural differences.',
            additionalText: 'We will provide you with support and help anytime and anywhere like family and friends.'
        },
        {
            title: 'Free Chinese TV show per week (only in Kunming HQ)',
            description: 'Chinese TV programs watching activity is held every week, which is another way to learn Chinese and help everyone understand real life in China.'
        },
        {
            title: 'Free sports activities per week (only in Kunming HQ)',
            description: 'We randomly organize basketball, badminton, table tennis and other activities every week, you can exercise with other student and make more Chinese friends.'
        },
        {
            title: 'Free culture activities per week (only in Kunming HQ)',
            description: 'All kinds of culture activities are also conducted every week. Join us to experience the charm of traditional Chinese culture and the culture of Yunnan\'s ethnic minorities in person.'
        },
        {
            title: 'Visa support materials (offered in all locations)',
            description: 'After you successfully apply for the program, we will email you the relevant information about the tourist visa application and provide you with support in applying for the tourist visa.'
        }
    ];

    // Override first service with program-specific content if provided
    if (options.customServices && Array.isArray(options.customServices)) {
        services[0] = options.customServices[0];
    }

    // Generate HTML
    const html = `
        <section class="section">
            <div class="container">
                <h2 class="section-title">★ Services & Activities Included (Offline)</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(480px, 1fr)); gap: 2rem;">
                    ${services.map(service => `
                        <div style="background: #f8f9fa; border-radius: 16px; padding: 2rem; box-shadow: 0 8px 22px rgba(0,0,0,0.05);">
                            <h3 style="color: #e74c3c; margin-bottom: 1rem; line-height: 1.3; font-size: 1.25rem;">${service.title}</h3>
                            <p style="color: #555; line-height: 1.8;${service.additionalText ? ' margin-bottom: 1rem;' : ''}">${service.description}</p>
                            ${service.additionalText ? `<p style="color: #555; line-height: 1.8;${service.additionalText2 ? ' margin-bottom: 1rem;' : service.additionalText3 ? ' margin-bottom: 1rem;' : ''}">${service.additionalText}</p>` : ''}
                            ${service.additionalText2 ? `<p style="color: #555; line-height: 1.8;${service.additionalText3 ? ' margin-bottom: 1rem;' : ''}">${service.additionalText2}</p>` : ''}
                            ${service.additionalText3 ? `<p style="color: #555; line-height: 1.8;">${service.additionalText3}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    container.innerHTML = html;
}

