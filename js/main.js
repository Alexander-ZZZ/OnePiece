/* ==========================================================================
   ONE PIECE PIRATE EXPERIENCE - MOTOR JAVASCRIPT INTERACTIVO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. BASE DE DATOS DE LA TRIPULACIÓN DE LOS SOMBRERO DE PAJA
    // --------------------------------------------------------------------------
    const crewMembers = [
        {
            id: 'luffy',
            name: 'Monkey D. Luffy',
            role: 'Capitán Pirata',
            category: 'liderazgo',
            bounty: '3,000,000,000',
            quote: '¡Voy a ser el Rey de los Piratas!',
            fruit: 'Hito Hito no Mi: Modelo Nika (Paramecia / Zoan Mitológica)',
            style: 'Haki del Conquistador Avanzado & Gear 5',
            origin: 'Villa Foosha, Mar del Este',
            img: 'imagenes/img1.jpg',
            description: 'Fundador y capitán de los Piratas de Sombrero de Paja. Posee un espíritu indomable y busca el tesoro One Piece para convertirse en el hombre más libre del mundo.',
            stats: { fuerza: 99, agilidad: 95, haki: 98, liderazgo: 100 }
        },
        {
            id: 'zoro',
            name: 'Roronoa Zoro',
            role: 'Combatiente / Espadachín',
            category: 'liderazgo',
            bounty: '1,111,000,000',
            quote: 'Si ni siquiera puedo proteger el sueño de mi capitán, mi ambición no vale nada.',
            fruit: 'Ninguna (Humano Puro)',
            style: 'Santoryu (Estilo de Tres Espadas) & Haki del Rey',
            origin: 'Villa Shimotsuki, Mar del Este',
            img: 'imagenes/img2.jpg',
            description: 'El primer oficial en unirse a Luffy. Su meta es convertirse en el Espadachín más Grande del Mundo para cumplir la promesa hecha a su amiga Kuina.',
            stats: { fuerza: 96, agilidad: 90, haki: 95, liderazgo: 88 }
        },
        {
            id: 'nami',
            name: 'Nami (La Gata Ladrona)',
            role: 'Navegante',
            category: 'navegacion',
            bounty: '366,000,000',
            quote: '¡Lo que quiero no son objetos valiosos, es un mapa del mundo entero dibujado por mí misma!',
            fruit: 'Ninguna',
            style: 'Clima-Tact Supremo & Zeus',
            origin: 'Villa Cocoyasi, Mar del Este',
            img: 'imagenes/img2.jpg',
            description: 'Extraordinaria cartógrafa y navegante capaz de predecir el clima con sus sentidos. Coordina el rumbo del Thousand Sunny a través de la peligrosa Grand Line.',
            stats: { fuerza: 50, agilidad: 82, haki: 60, liderazgo: 90 }
        },
        {
            id: 'usopp',
            name: 'Usopp (God Usopp)',
            role: 'Tirador',
            category: 'especialistas',
            bounty: '500,000,000',
            quote: '¡Algún día seré un valiente guerrero del mar!',
            fruit: 'Ninguna',
            style: 'Tirachinas Kabuto & Pop Greens',
            origin: 'Villa Syrup, Mar del Este',
            img: 'imagenes/img3.jpg',
            description: 'Maestro de la puntería, inventor astuto y narrador de historias. Supera sus miedos para apoyar a sus compañeros en batallas impossibles.',
            stats: { fuerza: 65, agilidad: 80, haki: 75, liderazgo: 70 }
        },
        {
            id: 'sanji',
            name: 'Sanji (Pierna Negra)',
            role: 'Cocinero / Combatiente',
            category: 'liderazgo',
            bounty: '1,032,000,000',
            quote: '¡La comida no debe ser desperdiciada nunca, ni ante el peor de los enemigos!',
            fruit: 'Ninguna (Modificación Genética Germa Despertada)',
            style: 'Ifrit Jambe & Black Leg Style',
            origin: 'Mar del Norte / Baratie',
            img: 'imagenes/img2.jpg',
            description: 'Cocinero genio que busca el mítico All Blue. Caballero implacable que combate únicamente con sus piernas para proteger sus manos de cocinero.',
            stats: { fuerza: 94, agilidad: 98, haki: 92, liderazgo: 85 }
        },
        {
            id: 'chopper',
            name: 'Tony Tony Chopper',
            role: 'Médico de a Bordo',
            category: 'navegacion',
            bounty: '1,000',
            quote: '¡Voy a crear una medicina que curará todas las enfermedades del mundo!',
            fruit: 'Hito Hito no Mi (Zoan Humana)',
            style: 'Rumble Ball (Monster Point)',
            origin: 'Isla de Drum, Grand Line',
            img: 'imagenes/img3.jpg',
            description: 'Reno con nariz azul que adquirió intelecto humano tras comer su Fruta del Diablo. Un doctor apasionado capaz de transformarse en 7 formas distintas.',
            stats: { fuerza: 80, agilidad: 75, haki: 50, liderazgo: 65 }
        },
        {
            id: 'robin',
            name: 'Nico Robin (La Niña Demonio)',
            role: 'Arqueóloga',
            category: 'especialistas',
            bounty: '930,000,000',
            quote: '¡Quiero vivir! ¡Llévenme con ustedes al mar!',
            fruit: 'Hana Hana no Mi (Paramecia)',
            style: 'Demonio Fleur & Karate Gyojin',
            origin: 'Ohara, West Blue',
            img: 'imagenes/img2.jpg',
            description: 'Única sobreviviente de la isla Ohara capaz de leer la escritura ancestral de los Poneglyphs. Clave fundamental para descubrir el One Piece.',
            stats: { fuerza: 85, agilidad: 82, haki: 80, liderazgo: 78 }
        },
        {
            id: 'franky',
            name: 'Franky (El Cyborg)',
            role: 'Carpintero Naval',
            category: 'especialistas',
            bounty: '394,000,000',
            quote: '¡Superrr! ¡Un barco que cruzará todos los mares del mundo!',
            fruit: 'Ninguna (Cyborg Potenciado con Cola)',
            style: 'Armas Cyborg & General Franky Robot',
            origin: 'Water 7, Grand Line',
            img: 'imagenes/img2.jpg',
            description: 'Creador del Thousand Sunny. Un cyborg extravagante con corazón de oro capaz de construir y reparar cualquier navío en minutos.',
            stats: { fuerza: 90, agilidad: 70, haki: 70, liderazgo: 75 }
        },
        {
            id: 'brook',
            name: 'Brook (Soul King)',
            role: 'Músico',
            category: 'navegacion',
            bounty: '383,000,000',
            quote: '¿Podría ver sus pantalones?.. ¡Yohohoho! ¡Aunque ya no tengo ojos!',
            fruit: 'Yomi Yomi no Mi (Paramecia)',
            style: 'Soul Solid (Esgrima de Hielo Ancestral)',
            origin: 'West Blue',
            img: 'imagenes/img1.jpg',
            description: 'Esqueleto viviente devuelto a la vida por su Fruta del Diablo. Alegría de la tripulación con su música e infalible espadachín de las sombras.',
            stats: { fuerza: 82, agilidad: 92, haki: 75, liderazgo: 60 }
        },
        {
            id: 'jinbe',
            name: 'Jinbe (El Caballero del Mar)',
            role: 'Timonel',
            category: 'liderazgo',
            bounty: '1,100,000,000',
            quote: '¿Por qué debería temerle a un mero Emperador del Mar cuando seré parte de la tripulación del Rey de los Piratas?',
            fruit: 'Ninguna (Gyojin Tiburón Ballena)',
            style: 'Karate Gyojin Secreto & Dominio de Corrientes Marino',
            origin: 'Isla Gyojin, Grand Line',
            img: 'imagenes/img2.jpg',
            description: 'Antiguo Shichibukai y legendario guerrero Gyojin. Conduce el Thousand Sunny atravesando olas gigantescas con habilidad inigualable.',
            stats: { fuerza: 95, agilidad: 85, haki: 93, liderazgo: 92 }
        }
    ];

    // --------------------------------------------------------------------------
    // 2. BASE DE DATOS DE FRUTAS DEL DIABLO (AKUMA NO MI)
    // --------------------------------------------------------------------------
    const fruitDatabase = [
        {
            name: 'Hito Hito no Mi: Modelo Nika',
            type: 'Mythical',
            typeName: 'Zoan Mitológica',
            user: 'Monkey D. Luffy',
            power: 'Transforma al usuario en el Dios del Sol Nika, otorgándole un cuerpo de goma con flexibilidad ilimitada y capacidad de alterar la realidad a su alrededor.',
            weakness: 'Agua de mar, Piedra Marina (Kairouseki).'
        },
        {
            name: 'Mera Mera no Mi',
            type: 'Logia',
            typeName: 'Logia',
            user: 'Sabo (Antes Portgas D. Ace)',
            power: 'Permite al usuario crear, controlar y transformarse totalmente en fuego ardiente.',
            weakness: 'Superada por el magma de la Magu Magu no Mi.'
        },
        {
            name: 'Ope Ope no Mi',
            type: 'Paramecia',
            typeName: 'Paramecia',
            user: 'Trafalgar D. Water Law',
            power: 'Crea un espacio esférico ("ROOM") donde el usuario controla quirúrgicamente la materia, almas y masa física.',
            weakness: 'Consume gran cantidad de energía física.'
        },
        {
            name: 'Gura Gura no Mi',
            type: 'Paramecia',
            typeName: 'Paramecia',
            user: 'Marshall D. Teach (Antes Edward Newgate)',
            power: 'Capacidad de generar devastadores terremotos y maremotos capaces de destruir el mundo.',
            weakness: 'Daño colateral masivo.'
        },
        {
            name: 'Yami Yami no Mi',
            type: 'Logia',
            typeName: 'Logia',
            user: 'Marshall D. Teach (Blackbeard)',
            power: 'Controla la oscuridad y la gravedad para anular permanentemente los poderes de otras Frutas del Diablo al contacto.',
            weakness: 'No otorga intangibilidad; el usuario siente el doble de dolor.'
        },
        {
            name: 'Tori Tori no Mi: Modelo Fénix',
            type: 'Mythical',
            typeName: 'Zoan Mitológica',
            user: 'Marco el Fénix',
            power: 'Permite transformarse en un fénix cubierto de llamas azules sanadoras que regeneran cualquier herida instantáneamente.',
            weakness: 'Límite en la capacidad de regeneración masiva.'
        },
        {
            name: 'Ito Ito no Mi',
            type: 'Paramecia',
            typeName: 'Paramecia',
            user: 'Donquixote Doflamingo',
            power: 'Crea hilos invisibles ultra resistentes para manipular personas como marionetas y cortar edificios.',
            weakness: 'Vulnerable a explosiones masivas.'
        },
        {
            name: 'Uo Uo no Mi: Modelo Seiryu',
            type: 'Mythical',
            typeName: 'Zoan Mitológica',
            user: 'Kaido de las Bestias',
            power: 'Transformación en un gigantesco Dragón Azul capaz de lanzar ráfagas de fuego, rayos y nubes voladoras.',
            weakness: 'Ataques internos que atraviesan escamas duras.'
        },
        {
            name: 'Magu Magu no Mi',
            type: 'Logia',
            typeName: 'Logia',
            user: 'Almirante de Flota Sakazuki (Akainu)',
            power: 'Crea, controla y se transforma en magma incandescente con el poder ofensivo más alto conocido.',
            weakness: 'Piedra marina y agua del océano.'
        },
        {
            name: 'Pika Pika no Mi',
            type: 'Logia',
            typeName: 'Logia',
            user: 'Almirante Borsalino (Kizaru)',
            power: 'Permite desplazarse y lanzar ráfagas a la velocidad de la luz pura.',
            weakness: 'Haki de observación avanzado y espejos deflectores.'
        }
    ];

    // --------------------------------------------------------------------------
    // 3. BASE DE DATOS DE SAGAS DE ONE PIECE
    // --------------------------------------------------------------------------
    const sagasData = [
        { year: 'Saga 1', title: 'Mar del Este (East Blue)', desc: 'Luffy inicia su viaje, recluta a Zoro, Nami, Usopp y Sanji, y vence a Arlong con su primer cartel de 30,000,000 Berries.' },
        { year: 'Saga 2', title: 'Alabasta (Grand Line)', desc: 'Entrada al océano peligroso, alianza con la princesa Vivi y batalla histórica contra el Shichibukai Crocodile.' },
        { year: 'Saga 3', title: 'Skypiea (Isla del Cielo)', desc: 'Viaje a las nubes sobre una corriente marina y enfrentamiento contra el Dios Enel en la ciudad de oro.' },
        { year: 'Saga 4', title: 'Water 7 / Enies Lobby', desc: 'Rescate de Nico Robin declarándole la guerra al Gobierno Mundial al quemar su bandera sagrada.' },
        { year: 'Saga 5', title: 'Guerra de Marineford', desc: 'La gran batalla de los mejores piratas contra la Marina para salvar a Portgas D. Ace.' },
        { year: 'Saga 6', title: 'Dressrosa / Whole Cake', desc: 'Caída de Doflamingo y la incursión en el territorio de la Yonko Big Mom.' },
        { year: 'Saga 7', title: 'País de Wano (Yonko Saga)', desc: 'Derrota del dragón Kaido y el mítico despertar del Gear 5 Dios del Sol Nika.' },
        { year: 'Saga 8', title: 'Isla Egghead (Última Era)', desc: 'Revelación de los secretos del Siglo Vacío junto al científico Vegapunk.' }
    ];

    // --------------------------------------------------------------------------
    // 4. PARTÍCULAS EN CANVAS (AMBIENTE PIRATA)
    // --------------------------------------------------------------------------
    const particleCanvas = document.getElementById('particle-canvas');
    if (particleCanvas) {
        const ctx = particleCanvas.getContext('2d');
        let width = particleCanvas.width = window.innerWidth;
        let height = particleCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = particleCanvas.width = window.innerWidth;
            height = particleCanvas.height = window.innerHeight;
        });

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2.5 + 0.5,
            color: Math.random() > 0.5 ? 'rgba(255, 200, 87, ' : 'rgba(231, 76, 60, ',
            alpha: Math.random() * 0.6 + 0.2,
            speedY: Math.random() * -0.6 - 0.2,
            speedX: Math.random() * 0.4 - 0.2
        }));

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;
                if (p.y < 0) p.y = height;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color + p.alpha + ')';
                ctx.shadowBlur = 8;
                ctx.shadowColor = p.color + '0.8)';
                ctx.fill();
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    // --------------------------------------------------------------------------
    // 5. RENDERIZADO DE TRIPULACIÓN Y FILTROS
    // --------------------------------------------------------------------------
    const crewContainer = document.getElementById('crew-container');
    const filterBtns = document.querySelectorAll('.crew-filters .filter-btn');

    function renderCrew(filter = 'all') {
        if (!crewContainer) return;
        crewContainer.innerHTML = '';

        const filtered = filter === 'all' 
            ? crewMembers 
            : crewMembers.filter(m => m.category === filter);

        filtered.forEach(member => {
            const card = document.createElement('div');
            card.className = 'crew-card';
            card.setAttribute('data-id', member.id);
            card.innerHTML = `
                <div class="crew-card-img-wrapper">
                    <img src="${member.img}" alt="${member.name}" class="crew-card-img">
                    <div class="crew-bounty-badge">
                        <span class="bounty-label">RECOMPENSA:</span>
                        <span class="bounty-value">฿ ${member.bounty}</span>
                    </div>
                </div>
                <div class="crew-card-info">
                    <div>
                        <span class="crew-role">${member.role}</span>
                        <h3 class="crew-name">${member.name}</h3>
                        <p class="crew-quote">"${member.quote}"</p>
                    </div>
                    <button class="btn-gold-sm" style="width:100%; margin-top:10px;">
                        <i class="fa-solid fa-eye"></i> Ver Ficha Completa
                    </button>
                </div>
            `;

            card.addEventListener('click', () => openCrewModal(member));
            crewContainer.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCrew(btn.getAttribute('data-filter'));
        });
    });

    renderCrew();

    // --------------------------------------------------------------------------
    // 6. MODAL DE PERSONAJE
    // --------------------------------------------------------------------------
    const crewModal = document.getElementById('crew-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    function openCrewModal(member) {
        if (!crewModal || !modalBody) return;
        modalBody.innerHTML = `
            <div class="modal-crew-layout">
                <div>
                    <img src="${member.img}" alt="${member.name}" class="modal-crew-img">
                </div>
                <div>
                    <span class="section-subtitle text-gold">${member.role}</span>
                    <h2 style="font-family:var(--font-pirate); font-size:2.8rem; margin-bottom:10px; color:#fff;">${member.name}</h2>
                    <p style="font-style:italic; color:var(--color-gold-primary); margin-bottom:15px; font-size:1.1rem;">"${member.quote}"</p>
                    <p style="color:var(--color-text-muted); margin-bottom:20px;">${member.description}</p>
                    
                    <div style="background:rgba(0,0,0,0.4); padding:16px; border-radius:12px; margin-bottom:20px;">
                        <div style="margin-bottom:8px;"><strong><i class="fa-solid fa-coins text-gold"></i> Recompensa:</strong> ฿ ${member.bounty} Berries</div>
                        <div style="margin-bottom:8px;"><strong><i class="fa-solid fa-apple-whole text-gold"></i> Fruta del Diablo / Poder:</strong> ${member.fruit}</div>
                        <div style="margin-bottom:8px;"><strong><i class="fa-solid fa-wand-magic-sparkles text-gold"></i> Estilo de Pelea:</strong> ${member.style}</div>
                        <div><strong><i class="fa-solid fa-location-dot text-gold"></i> Origen:</strong> ${member.origin}</div>
                    </div>

                    <h4 style="font-family:var(--font-heading); margin-bottom:10px; color:#fff;"><i class="fa-solid fa-chart-simple text-gold"></i> Estadísticas de Combate</h4>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                        <div>Fuerza: <strong class="text-gold">${member.stats.fuerza}%</strong></div>
                        <div>Agilidad: <strong class="text-gold">${member.stats.agilidad}%</strong></div>
                        <div>Haki: <strong class="text-gold">${member.stats.haki}%</strong></div>
                        <div>Liderazgo: <strong class="text-gold">${member.stats.liderazgo}%</strong></div>
                    </div>
                </div>
            </div>
        `;
        crewModal.classList.add('active');
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => crewModal.classList.remove('active'));
    }
    if (crewModal) {
        crewModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) crewModal.classList.remove('active');
        });
    }

    // --------------------------------------------------------------------------
    // 7. TRANSFORMACIONES GEAR (SECCIÓN GEAR 5)
    // --------------------------------------------------------------------------
    const gearData = {
        gear2: {
            title: 'Gear 2nd (Segunda Marcha)',
            desc: 'Luffy bombea sangre a alta velocidad a través de sus vasos sanguíneos usando su cuerpo de goma como una bomba hidráulica. Su piel emite vapor y sus ataques ganan velocidad supersónica.',
            stats: 'Poder: Alto | Estilo: Velocidad Luz | Haki: Armadura'
        },
        gear3: {
            title: 'Gear 3rd (Tercera Marcha / Gigant Axe)',
            desc: 'Luffy muerde su pulgar e infla sus huesos con aire masivo, convirtiendo sus puños y extremidades en los de un gigante para aplastar buques de guerra enteros.',
            stats: 'Poder: Devastador | Estilo: Masa Gigante | Haki: Armadura de Hierro'
        },
        gear4: {
            title: 'Gear 4th (Boundman & Snakeman)',
            desc: 'Infla sus músculos con aire y recubre su cuerpo con Haki de Armadura. En Boundman adquiere fuerza elástica destructiva; en Snakeman su velocidad de ataque se acelera infinitamente.',
            stats: 'Poder: Supremo | Estilo: Elástico Furioso | Haki: Armadura & Observación Avanzada'
        },
        gear5: {
            title: 'Gear 5th (Dios del Sol Nika)',
            desc: 'El despertar definitivo de su fruta. Convierte el entorno en goma, desafía las leyes de la física con libertad absoluta y hace reír a sus aliados con el ritmo de los Tambores de la Liberación.',
            stats: 'Poder: Infinito | Estilo: Dibujos Animados / Toon Physics | Haki: Conquistador Avanzado'
        }
    };

    const gearTabBtns = document.querySelectorAll('.gear-tab-btn');
    const gearDetailsContent = document.getElementById('gear-details-content');

    gearTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            gearTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const key = btn.getAttribute('data-gear');
            if (gearData[key] && gearDetailsContent) {
                gearDetailsContent.innerHTML = `
                    <h4><i class="fa-solid fa-fire text-gold"></i> ${gearData[key].title}</h4>
                    <p>${gearData[key].desc}</p>
                    <div class="gear-stats-row">
                        <div>${gearData[key].stats}</div>
                    </div>
                `;
            }
        });
    });

    // --------------------------------------------------------------------------
    // 8. SINTETIZADOR DE SONIDO (TAMBORES DE LA LIBERACIÓN & OCÉANO)
    // --------------------------------------------------------------------------
    let audioCtx = null;

    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    const playDrumsBtn = document.getElementById('play-drums-btn');
    if (playDrumsBtn) {
        playDrumsBtn.addEventListener('click', () => {
            const ctx = getAudioContext();
            const now = ctx.currentTime;

            // Ritmo característico de los Tambores de la Liberación (Doom-Dut-Da-Da)
            const drumTimes = [0, 0.25, 0.45, 0.75, 1.0, 1.25, 1.45, 1.75];

            drumTimes.forEach((t, index) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = index % 2 === 0 ? 'sine' : 'triangle';
                osc.frequency.setValueAtTime(index % 2 === 0 ? 110 : 85, now + t);
                osc.frequency.exponentialRampToValueAtTime(30, now + t + 0.18);

                gain.gain.setValueAtTime(0.7, now + t);
                gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.2);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(now + t);
                osc.stop(now + t + 0.22);
            });
        });
    }

    // Toggle Sonido Ambiente Marino
    const soundToggle = document.getElementById('sound-toggle');
    let isOceanPlaying = false;
    let oceanGain = null;

    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            const ctx = getAudioContext();
            if (!isOceanPlaying) {
                // Sintetizar sonido de olas del océano usando ruido rosa
                const bufferSize = ctx.sampleRate * 2;
                const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    output[i] = Math.random() * 2 - 1;
                }

                const whiteNoise = ctx.createBufferSource();
                whiteNoise.buffer = noiseBuffer;
                whiteNoise.loop = true;

                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(400, ctx.currentTime);

                oceanGain = ctx.createGain();
                oceanGain.gain.setValueAtTime(0.15, ctx.currentTime);

                whiteNoise.connect(filter);
                filter.connect(oceanGain);
                oceanGain.connect(ctx.destination);

                whiteNoise.start();
                soundToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                soundToggle.style.color = '#ffc857';
                isOceanPlaying = true;
            } else {
                if (oceanGain) {
                    oceanGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                }
                soundToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
                soundToggle.style.color = '';
                isOceanPlaying = false;
            }
        });
    }

    // --------------------------------------------------------------------------
    // 9. ENCICLOPEDIA DE FRUTAS DEL DIABLO (BUSCADOR Y FILTROS)
    // --------------------------------------------------------------------------
    const fruitContainer = document.getElementById('fruit-container');
    const fruitSearch = document.getElementById('fruit-search');
    const fruitTypeBtns = document.querySelectorAll('.fruit-type-btns .fruit-btn');

    function renderFruits() {
        if (!fruitContainer) return;
        fruitContainer.innerHTML = '';

        const query = fruitSearch ? fruitSearch.value.toLowerCase() : '';
        const activeTypeBtn = document.querySelector('.fruit-type-btns .fruit-btn.active');
        const selectedType = activeTypeBtn ? activeTypeBtn.getAttribute('data-type') : 'all';

        const filtered = fruitDatabase.filter(f => {
            const matchesQuery = f.name.toLowerCase().includes(query) || 
                                 f.user.toLowerCase().includes(query) || 
                                 f.power.toLowerCase().includes(query);
            const matchesType = selectedType === 'all' || f.type.toLowerCase() === selectedType.toLowerCase();
            return matchesQuery && matchesType;
        });

        filtered.forEach(fruit => {
            const card = document.createElement('div');
            card.className = 'fruit-card';

            let badgeClass = 'badge-paramecia';
            if (fruit.type === 'Zoan') badgeClass = 'badge-zoan';
            if (fruit.type === 'Logia') badgeClass = 'badge-logia';
            if (fruit.type === 'Mythical') badgeClass = 'badge-mythical';

            card.innerHTML = `
                <span class="fruit-badge ${badgeClass}">${fruit.typeName}</span>
                <h3 class="fruit-name">${fruit.name}</h3>
                <div class="fruit-user"><i class="fa-solid fa-user-ninja text-gold"></i> Usuario: <strong>${fruit.user}</strong></div>
                <p class="fruit-power">${fruit.power}</p>
            `;
            fruitContainer.appendChild(card);
        });
    }

    if (fruitSearch) fruitSearch.addEventListener('input', renderFruits);
    fruitTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fruitTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderFruits();
        });
    });

    renderFruits();

    // --------------------------------------------------------------------------
    // 10. GENERADOR CANVASES DEL CARTEL WANTED DE ONE PIECE
    // --------------------------------------------------------------------------
    const wantedCanvas = document.getElementById('wanted-canvas');
    if (wantedCanvas) {
        const ctx = wantedCanvas.getContext('2d');

        const inputName = document.getElementById('pirate-name');
        const inputEpithet = document.getElementById('pirate-epithet');
        const inputBounty = document.getElementById('bounty-amount');
        const avatarBtns = document.querySelectorAll('.avatar-btn');
        const customUpload = document.getElementById('custom-image-upload');
        const randomizeBtn = document.getElementById('btn-randomize-wanted');
        const downloadBtn = document.getElementById('btn-download-wanted');

        let currentImgSrc = 'imagenes/img2.jpg';
        let loadedImg = new Image();

        function drawWantedPoster() {
            loadedImg.onload = () => {
                // Canvas Dimensions: 600 x 850
                const w = 600;
                const h = 850;

                // 1. Fondos de Pergamino Envejecido
                ctx.fillStyle = '#edd7ae';
                ctx.fillRect(0, 0, w, h);

                // Bordes con textura
                ctx.strokeStyle = '#3e2415';
                ctx.lineWidth = 12;
                ctx.strokeRect(10, 10, w - 20, h - 20);

                ctx.strokeStyle = '#8c593b';
                ctx.lineWidth = 3;
                ctx.strokeRect(20, 20, w - 40, h - 40);

                // 2. Título Header "WANTED"
                ctx.fillStyle = '#3c2415';
                ctx.font = '900 78px "Pirata One", cursive, serif';
                ctx.textAlign = 'center';
                ctx.fillText('WANTED', w / 2, 105);

                // 3. Marco para la foto del pirata (30px a 500px)
                const imgX = 55;
                const imgY = 125;
                const imgW = 490;
                const imgH = 370;

                ctx.fillStyle = '#2b180d';
                ctx.fillRect(imgX - 4, imgY - 4, imgW + 8, imgH + 8);

                // Dibujar foto escalada
                ctx.drawImage(loadedImg, imgX, imgY, imgW, imgH);

                // Overlay de grano antiguo sobre la foto
                ctx.fillStyle = 'rgba(139, 69, 19, 0.12)';
                ctx.fillRect(imgX, imgY, imgW, imgH);

                // 4. Texto "DEAD OR ALIVE"
                ctx.fillStyle = '#3c2415';
                ctx.font = '700 32px "Cinzel", serif';
                ctx.fillText('DEAD OR ALIVE', w / 2, 535);

                // 5. Nombre del Pirata
                const nameText = (inputName ? inputName.value : 'MONKEY D. LUFFY').toUpperCase();
                ctx.fillStyle = '#221208';
                ctx.font = '900 52px "Pirata One", cursive, serif';
                ctx.fillText(nameText, w / 2, 605);

                // Epíteto
                const epithetText = inputEpithet ? inputEpithet.value : '';
                ctx.fillStyle = '#6e4528';
                ctx.font = 'italic 600 22px "Outfit", sans-serif';
                ctx.fillText(epithetText, w / 2, 640);

                // 6. Símbolo Berry y Recompensa Format
                const rawAmount = inputBounty ? parseInt(inputBounty.value) || 0 : 3000000000;
                const formattedAmount = rawAmount.toLocaleString('en-US');

                ctx.fillStyle = '#3c2415';
                ctx.font = '900 48px "Pirata One", cursive, serif';
                ctx.fillText(`฿ ${formattedAmount}-`, w / 2, 715);

                // 7. Sello del Gobierno Mundial (Watermark Marine)
                ctx.fillStyle = 'rgba(60, 36, 21, 0.5)';
                ctx.font = '700 18px "Cinzel", serif';
                ctx.fillText('MARINE HEADQUARTERS - NAVY', w / 2, 790);
            };

            loadedImg.src = currentImgSrc;
        }

        // Event listeners para actualizar cartel
        if (inputName) inputName.addEventListener('input', drawWantedPoster);
        if (inputEpithet) inputEpithet.addEventListener('input', drawWantedPoster);
        if (inputBounty) inputBounty.addEventListener('input', drawWantedPoster);

        document.querySelectorAll('.btn-preset').forEach(btn => {
            btn.addEventListener('click', () => {
                if (inputBounty) {
                    inputBounty.value = btn.getAttribute('data-amount');
                    drawWantedPoster();
                }
            });
        });

        avatarBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                avatarBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentImgSrc = btn.getAttribute('data-src');
                drawWantedPoster();
            });
        });

        if (customUpload) {
            customUpload.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        currentImgSrc = event.target.result;
                        drawWantedPoster();
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        if (randomizeBtn) {
            randomizeBtn.addEventListener('click', () => {
                const randomBounty = Math.floor(Math.random() * 4950000000) + 50000000;
                if (inputBounty) inputBounty.value = randomBounty;
                drawWantedPoster();
            });
        }

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                const link = document.createElement('a');
                link.download = `WANTED_${inputName.value.replace(/\s+/g, '_')}.png`;
                link.href = wantedCanvas.toDataURL('image/png');
                link.click();
            });
        }

        drawWantedPoster();
    }

    // --------------------------------------------------------------------------
    // 11. TIMELINE SAGAS RENDER
    // --------------------------------------------------------------------------
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        sagasData.forEach((saga, index) => {
            const card = document.createElement('div');
            card.className = 'timeline-card';
            card.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-inner glass-panel">
                    <span class="saga-year">${saga.year}</span>
                    <h3 class="saga-title text-gold">${saga.title}</h3>
                    <p style="color:var(--color-text-muted); font-size:0.95rem;">${saga.desc}</p>
                </div>
            `;
            timelineContainer.appendChild(card);
        });
    }

    // --------------------------------------------------------------------------
    // 12. ACCORDIONS DE HERMANDAD
    // --------------------------------------------------------------------------
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            const isOpen = parent.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            if (!isOpen) {
                parent.classList.add('active');
            }
        });
    });

    // --------------------------------------------------------------------------
    // 13. QUIZ PIRATA INTERACTIVO
    // --------------------------------------------------------------------------
    const quizTrigger = document.getElementById('btn-quiz-trigger');
    const quizModal = document.getElementById('quiz-modal');
    const quizClose = document.getElementById('quiz-modal-close');
    const quizContainer = document.getElementById('quiz-container');

    const quizQuestions = [
        {
            q: '1. ¿Cuál es tu motivación principal al lanzarte al océano?',
            options: [
                { text: 'Libertad absoluta y convertirme en el Rey de los Piratas.', type: 'luffy' },
                { text: 'Ser el guerrero/espadachín más fuerte de todos.', type: 'zoro' },
                { text: 'Conocimiento, mapas y los tesoros escondidos del mundo.', type: 'nami' },
                { text: 'Proteger a mis amigos y vivir aventuras legendarias.', type: 'usopp' }
            ]
        },
        {
            q: '2. Ante una amenaza destructiva de la Marina, ¿cuál es tu estrategia?',
            options: [
                { text: '¡Atacar de frente con mi puño recubierto de Haki!', type: 'luffy' },
                { text: 'Desenvainar mis espadas y cortar sus buques por la mitad.', type: 'zoro' },
                { text: 'Usar estrategia, el clima y maniobras de escape inteligentes.', type: 'nami' },
                { text: 'Lanzar ataques a distancia y utilizar invenciones astutas.', type: 'usopp' }
            ]
        }
    ];

    if (quizTrigger && quizModal && quizContainer) {
        quizTrigger.addEventListener('click', () => {
            renderQuiz();
            quizModal.classList.add('active');
        });

        if (quizClose) {
            quizClose.addEventListener('click', () => quizModal.classList.remove('active'));
        }
    }

    function renderQuiz() {
        let currentStep = 0;
        let scores = { luffy: 0, zoro: 0, nami: 0, usopp: 0 };

        function showQuestion() {
            if (currentStep >= quizQuestions.length) {
                // Mostrar Resultado
                let topRole = 'luffy';
                let maxScore = -1;
                for (let r in scores) {
                    if (scores[r] > maxScore) {
                        maxScore = scores[r];
                        topRole = r;
                    }
                }

                const matchedMember = crewMembers.find(m => m.id === topRole) || crewMembers[0];

                quizContainer.innerHTML = `
                    <div style="text-align:center; padding:20px;">
                        <i class="fa-solid fa-crown text-gold" style="font-size:3rem; margin-bottom:12px;"></i>
                        <h2 style="font-family:var(--font-pirate); font-size:2.5rem; color:#fff;">¡TU ESPÍRITU PIRATA COINCIDE CON!</h2>
                        <h3 class="text-gold" style="font-size:2rem; margin:10px 0;">${matchedMember.name}</h3>
                        <img src="${matchedMember.img}" style="width:200px; height:200px; object-fit:cover; border-radius:50%; border:3px solid var(--color-gold-primary); margin:15px auto;">
                        <p style="color:var(--color-text-muted); font-size:1.1rem; margin-bottom:20px;">"${matchedMember.quote}"</p>
                        <button id="btn-quiz-finish" class="btn-primary">¡Regresar al Barco!</button>
                    </div>
                `;

                document.getElementById('btn-quiz-finish').addEventListener('click', () => {
                    quizModal.classList.remove('active');
                });
                return;
            }

            const qData = quizQuestions[currentStep];
            quizContainer.innerHTML = `
                <h3 style="font-family:var(--font-heading); color:var(--color-gold-primary); margin-bottom:20px; font-size:1.4rem;">${qData.q}</h3>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    ${qData.options.map((opt, i) => `
                        <button class="btn-secondary quiz-opt-btn" data-type="${opt.type}" style="text-align:left; justify-content:flex-start;">
                            ${opt.text}
                        </button>
                    `).join('')}
                </div>
            `;

            document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const type = btn.getAttribute('data-type');
                    scores[type]++;
                    currentStep++;
                    showQuestion();
                });
            });
        }

        showQuestion();
    }

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

});
