const evento = {
    nombre: "Jenny",
    fecha: "10 de Octubre de 2026",
    lugar: "Salón Quinta de los Tres Hermanos",
    dressCode: "Elegante Sport",
    hora: "21:00",
    alias: "jennii.15.mp",
    ubicacion:
        "https://maps.app.goo.gl/YVk8WmXcSQ3Zndjo9",
    whatsappMama:
        "5491125370784"
};

const app = document.getElementById("app");

document.body.style.overflow = "hidden";


// =========================
// CREAR INTRO + PÁGINA
// =========================

function crearIntro() {

    app.innerHTML = `

        <style>

            .mensaje-mariposa {
                position: absolute;
                left: 50%;
                top: calc(50% + 105px);
                transform: translateX(-50%);
                z-index: 30;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                text-align: center;
                pointer-events: none;
                opacity: 1;
                transition:
                    opacity 0.8s ease,
                    transform 0.8s ease;
            }

            .mensaje-mariposa-principal {
                margin: 0;
                font-family:
                    Arial,
                    sans-serif;
                font-size: 10px;
                font-weight: 500;
                letter-spacing: 3px;
                color: rgba(
                    235,
                    235,
                    235,
                    0.88
                );
                text-transform: uppercase;
                white-space: nowrap;
            }

            .mensaje-mariposa-secundario {
                margin: 0;
                font-family:
                    Arial,
                    sans-serif;
                font-size: 8px;
                letter-spacing: 1.5px;
                color: rgba(
                    190,
                    190,
                    190,
                    0.62
                );
            }

            .mensaje-mariposa.oculto {
                opacity: 0;
                transform:
                    translateX(-50%)
                    translateY(-10px);
            }

            .mariposa-vuelo {
                pointer-events: auto;
            }

            .mariposa-flotante {
                pointer-events: auto;
            }

            .mariposa-intro {
                cursor: pointer;
                pointer-events: auto;
                -webkit-tap-highlight-color:
                    transparent;
                touch-action: manipulation;
            }

            @media (max-width: 600px) {

                .mensaje-mariposa {
                    top: calc(50% + 92px);
                }

                .mensaje-mariposa-principal {
                    font-size: 9px;
                    letter-spacing: 2.5px;
                }

                .mensaje-mariposa-secundario {
                    font-size: 7px;
                    letter-spacing: 1.3px;
                }

            }

        </style>


        <main
            class="pagina-invitacion"
            id="pagina-invitacion"
        >

            <section class="hero-invitacion">

                <div class="hero-mariposa">
                    <img
                        src="img/mariposa.png"
                        alt=""
                    >
                </div>


                <div class="hero-contenido">

                    <p class="hero-superior">
                        MIS XV
                    </p>

                    <h1>
                        JENNY
                    </h1>

                    <div class="hero-linea"></div>

                    <p class="hero-fecha">
                        10 · 10 · 2026
                    </p>

                </div>

            </section>


            <section class="seccion-evento">

                <div class="evento-fondo-mariposa">
                    <img
                        src="img/mariposa.png"
                        alt=""
                    >
                </div>


                <div class="evento-contenido">


                    <!-- UNA NOCHE -->

                    <p class="evento-etiqueta reveal-evento">
                        UNA NOCHE
                    </p>


                    <!-- TÍTULO -->

                    <h2 class="evento-titulo reveal-evento">
                        para recordar
                    </h2>


                    <div class="evento-linea reveal-evento"></div>


                    <!-- FECHA -->

                    <div class="evento-fecha reveal-evento">

                        <span>
                            10
                        </span>

                        <span class="evento-separador">
                            ·
                        </span>

                        <span>
                            10
                        </span>

                        <span class="evento-separador">
                            ·
                        </span>

                        <span>
                            2026
                        </span>

                    </div>


                    <!-- DÍA -->

                    <p class="evento-dia-semana reveal-evento">
                        SÁBADO
                    </p>


                    <!-- LUGAR -->

                    <div class="evento-detalle reveal-evento">

                        <span class="detalle-etiqueta">
                            LUGAR
                        </span>

                        <span class="detalle-valor">

                            <span class="quinta-fucsia">
                                La Quinta de los Tres Hermanos
                            </span>

                        </span>

                        <a
                            class="boton-ubicacion"
                            href="${evento.ubicacion}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VER UBICACIÓN
                        </a>

                    </div>


                    <!-- DRESS CODE -->

                    <div
                        class="evento-detalle evento-dress reveal-evento"
                    >

                        <span class="detalle-etiqueta">
                            DRESS CODE
                        </span>

                        <span class="detalle-valor">
                            Elegante Sport
                        </span>

                    </div>


                    <!-- HORA -->

                    <div class="evento-detalle reveal-evento">

                        <span class="detalle-etiqueta">
                            A PARTIR DE LAS
                        </span>

                        <span class="detalle-valor">
                            21:00 hs
                        </span>

                    </div>


                    <!-- CUENTA REGRESIVA -->

                    <div class="temporizador reveal-evento">

                        <p class="temporizador-titulo">
                            FALTAN
                        </p>


                        <div class="temporizador-valores">


                            <div class="temporizador-unidad">

                                <span
                                    id="dias"
                                    class="temporizador-numero"
                                >
                                    00
                                </span>

                                <span class="temporizador-label">
                                    DÍAS
                                </span>

                            </div>


                            <span class="temporizador-separador">
                                :
                            </span>


                            <div class="temporizador-unidad">

                                <span
                                    id="horas"
                                    class="temporizador-numero"
                                >
                                    00
                                </span>

                                <span class="temporizador-label">
                                    HORAS
                                </span>

                            </div>


                            <span class="temporizador-separador">
                                :
                            </span>


                            <div class="temporizador-unidad">

                                <span
                                    id="minutos"
                                    class="temporizador-numero"
                                >
                                    00
                                </span>

                                <span class="temporizador-label">
                                    MIN
                                </span>

                            </div>


                            <span class="temporizador-separador">
                                :
                            </span>


                            <div class="temporizador-unidad">

                                <span
                                    id="segundos"
                                    class="temporizador-numero"
                                >
                                    00
                                </span>

                                <span class="temporizador-label">
                                    SEG
                                </span>

                            </div>

                        </div>

                    </div>


                    <!-- CONFIRMAR ASISTENCIA -->

                    <div class="confirmar-asistencia reveal-evento">

                        <a
                            class="boton-whatsapp"
                            id="boton-whatsapp"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CONFIRMAR ASISTENCIA
                        </a>

                    </div>


                    <!-- ALIAS -->

                    <div class="datos-regalo reveal-evento">

                        <p class="datos-regalo-titulo">
                            MI ALIAS:
                        </p>

                        <p
                            class="datos-regalo-alias"
                            id="alias"
                        >
                            ${evento.alias}
                        </p>

                        <button
                            class="boton-copiar"
                            id="boton-copiar"
                            type="button"
                        >
                            COPIAR ALIAS
                        </button>

                    </div>


                    <!-- GALERÍA -->

                    <div class="galeria-momentos reveal-evento">

                        <p class="galeria-etiqueta">
                            MOMENTOS
                        </p>


                        <div
                            class="galeria-carrusel"
                            tabindex="0"
                        >

                            <div class="galeria-pista">

                                <img
                                    src="img/foto1.jpeg"
                                    alt="Foto de Jenny"
                                >

                                <img
                                    src="img/foto2.jpeg"
                                    alt="Foto de Jenny"
                                >

                                <img
                                    src="img/foto3.jpeg"
                                    alt="Foto de Jenny"
                                >

                                <img
                                    src="img/foto4.jpeg"
                                    alt="Foto de Jenny"
                                >

                                <img
                                    src="img/foto5.jpeg"
                                    alt="Foto de Jenny"
                                >

                            </div>

                        </div>


                        <div
                            class="galeria-indicadores"
                            aria-hidden="true"
                        >

                            <span
                                class="indicador-foto indicador-activo"
                            ></span>

                            <span
                                class="indicador-foto"
                            ></span>

                            <span
                                class="indicador-foto"
                            ></span>

                            <span
                                class="indicador-foto"
                            ></span>

                            <span
                                class="indicador-foto"
                            ></span>

                        </div>

                    </div>


                    <!-- DECORACIÓN FINAL -->

                    <div class="evento-decoracion reveal-evento">

                        <span></span>
                        <i></i>
                        <span></span>

                    </div>


                </div>

            </section>

        </main>


        <!-- INTRO -->

        <section
            class="intro"
            id="intro"
        >

            <div class="luz-central"></div>


            <!-- PORTÓN -->

            <div class="porton">


                <!-- PORTÓN IZQUIERDO -->

                <svg
                    class="hoja hoja-izquierda"
                    viewBox="0 0 500 900"
                    preserveAspectRatio="xMidYMid meet"
                >

                    <path
                        class="hierro grueso"
                        d="
                            M 0 880
                            L 0 210
                            Q 0 70 500 30
                            L 500 880
                            Z
                        "
                    />

                    <path
                        class="hierro medio"
                        d="
                            M 20 865
                            L 20 220
                            Q 20 105 480 65
                            L 480 865
                        "
                    />


                    <g class="barrotes">

                        <line x1="45" y1="215" x2="45" y2="850" />
                        <line x1="95" y1="180" x2="95" y2="850" />
                        <line x1="145" y1="150" x2="145" y2="850" />
                        <line x1="195" y1="120" x2="195" y2="850" />
                        <line x1="245" y1="100" x2="245" y2="850" />
                        <line x1="295" y1="90" x2="295" y2="850" />
                        <line x1="345" y1="95" x2="345" y2="850" />
                        <line x1="395" y1="115" x2="395" y2="850" />
                        <line x1="445" y1="155" x2="445" y2="850" />

                    </g>


                    <g class="ornamento">

                        <path
                            d="
                                M 35 220
                                Q 80 125 135 175
                                Q 185 220 250 120
                                Q 315 220 365 175
                                Q 420 125 465 220
                            "
                        />

                        <path
                            d="
                                M 90 210
                                Q 135 150 175 195
                                Q 210 225 250 165
                                Q 290 225 325 195
                                Q 365 150 410 210
                            "
                        />

                    </g>


                    <g class="decoracion">

                        <circle cx="45" cy="215" r="8" />
                        <circle cx="95" cy="180" r="8" />
                        <circle cx="145" cy="150" r="8" />
                        <circle cx="195" cy="120" r="8" />
                        <circle cx="245" cy="100" r="8" />
                        <circle cx="295" cy="90" r="8" />
                        <circle cx="345" cy="95" r="8" />
                        <circle cx="395" cy="115" r="8" />
                        <circle cx="445" cy="155" r="8" />

                    </g>

                </svg>


                <!-- PORTÓN DERECHO -->

                <svg
                    class="hoja hoja-derecha"
                    viewBox="0 0 500 900"
                    preserveAspectRatio="xMidYMid meet"
                >

                    <path
                        class="hierro grueso"
                        d="
                            M 0 880
                            L 0 30
                            Q 500 70 500 210
                            L 500 880
                            Z
                        "
                    />

                    <path
                        class="hierro medio"
                        d="
                            M 20 865
                            L 20 65
                            Q 480 105 480 220
                            L 480 865
                        "
                    />


                    <g class="barrotes">

                        <line x1="55" y1="155" x2="55" y2="850" />
                        <line x1="105" y1="115" x2="105" y2="850" />
                        <line x1="155" y1="95" x2="155" y2="850" />
                        <line x1="205" y1="90" x2="205" y2="850" />
                        <line x1="255" y1="100" x2="255" y2="850" />
                        <line x1="305" y1="120" x2="305" y2="850" />
                        <line x1="355" y1="150" x2="355" y2="850" />
                        <line x1="405" y1="180" x2="405" y2="850" />
                        <line x1="455" y1="215" x2="455" y2="850" />

                    </g>


                    <g class="ornamento">

                        <path
                            d="
                                M 35 220
                                Q 80 125 135 175
                                Q 185 220 250 120
                                Q 315 220 365 175
                                Q 420 125 465 220
                            "
                        />

                        <path
                            d="
                                M 90 210
                                Q 135 150 175 195
                                Q 210 225 250 165
                                Q 290 225 325 195
                                Q 365 150 410 210
                            "
                        />

                    </g>


                    <g class="decoracion">

                        <circle cx="55" cy="155" r="8" />
                        <circle cx="105" cy="115" r="8" />
                        <circle cx="155" cy="95" r="8" />
                        <circle cx="205" cy="90" r="8" />
                        <circle cx="255" cy="100" r="8" />
                        <circle cx="305" cy="120" r="8" />
                        <circle cx="355" cy="150" r="8" />
                        <circle cx="405" cy="180" r="8" />
                        <circle cx="455" cy="215" r="8" />

                    </g>

                </svg>

            </div>


            <!-- CENTRO PORTÓN -->

            <div class="centro-porton">

                <div class="adorno-centro">
                    <div class="rombo-centro"></div>
                </div>

            </div>


            <!-- PARTÍCULAS -->

            <div
                class="particulas"
                id="particulas"
            ></div>


            <!-- MENSAJE MARIPOSA -->

            <div
                class="mensaje-mariposa"
                id="mensaje-mariposa"
            >

                <p class="mensaje-mariposa-principal">
                    TOCÁ LA MARIPOSA
                </p>

                <p class="mensaje-mariposa-secundario">
                    para comenzar
                </p>

            </div>


            <!-- MENSAJE INTRO -->

            <div class="mensaje-intro">

                <p class="mensaje-linea">
                    Hay momentos que merecen
                </p>

                <p class="mensaje-linea">
                    ser recordados para siempre...
                </p>

            </div>


            <!-- MARIPOSA DE VUELO -->

            <div
                class="mariposa-vuelo"
                id="mariposa-vuelo"
            >

                <div class="mariposa-flotante">

                    <img
                        class="mariposa-intro"
                        id="mariposa"
                        src="img/mariposa.png"
                        alt="Mariposa plateada"
                    >

                </div>

            </div>

        </section>


        <!-- MÚSICA -->

        <audio
            id="musica-fondo"
            src="audio/musica1.mp3"
            loop
            preload="auto"
        ></audio>

    `;
}


crearIntro();


// =========================
// REFERENCIAS
// =========================

const intro =
    document.getElementById("intro");

const mariposaVuelo =
    document.getElementById(
        "mariposa-vuelo"
    );

const mariposa =
    document.getElementById(
        "mariposa"
    );

const mensajeMariposa =
    document.getElementById(
        "mensaje-mariposa"
    );

const particulas =
    document.getElementById(
        "particulas"
    );

const pagina =
    document.getElementById(
        "pagina-invitacion"
    );

const seccionEvento =
    document.querySelector(
        ".seccion-evento"
    );

const elementosEvento =
    document.querySelectorAll(
        ".reveal-evento"
    );


// =========================
// MÚSICA
// =========================

const musicaFondo =
    document.getElementById(
        "musica-fondo"
    );

let musicaIniciada =
    false;


function reproducirMusica() {

    if (!musicaFondo) {
        return;
    }

    if (musicaIniciada) {
        return;
    }

    musicaFondo.currentTime = 0;
    musicaFondo.volume = 0.01;

    const reproduccion =
        musicaFondo.play();

    if (
        reproduccion !==
        undefined
    ) {

        reproduccion
            .then(
                () => {

                    musicaIniciada =
                        true;

                    const volumenFinal =
                        0.14;

                    const duracionFade =
                        3000;

                    const tiempoInicio =
                        performance.now();


                    function subirVolumen(
                        tiempoActual
                    ) {

                        const tiempoTranscurrido =
                            tiempoActual -
                            tiempoInicio;

                        const progreso =
                            Math.min(
                                tiempoTranscurrido /
                                duracionFade,
                                1
                            );

                        musicaFondo.volume =
                            0.01 +
                            (
                                volumenFinal -
                                0.01
                            ) *
                            progreso;


                        if (
                            progreso <
                            1
                        ) {

                            requestAnimationFrame(
                                subirVolumen
                            );

                        }

                    }


                    requestAnimationFrame(
                        subirVolumen
                    );

                }
            )
            .catch(
                () => {

                    console.log(
                        "No se pudo iniciar la música."
                    );

                }
            );

    }

}


// =========================
// CUENTA REGRESIVA
// =========================

const dias =
    document.getElementById(
        "dias"
    );

const horas =
    document.getElementById(
        "horas"
    );

const minutos =
    document.getElementById(
        "minutos"
    );

const segundos =
    document.getElementById(
        "segundos"
    );


const fechaEvento =
    new Date(
        "2026-10-10T00:00:00"
    );


function actualizarTemporizador() {

    const ahora =
        new Date();

    const diferencia =
        fechaEvento -
        ahora;


    if (
        diferencia <=
        0
    ) {

        dias.textContent =
            "00";

        horas.textContent =
            "00";

        minutos.textContent =
            "00";

        segundos.textContent =
            "00";

        return;

    }


    const cantidadDias =
        Math.floor(
            diferencia /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const cantidadHoras =
        Math.floor(
            (
                diferencia %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) /
            (
                1000 *
                60 *
                60
            )
        );


    const cantidadMinutos =
        Math.floor(
            (
                diferencia %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );


    const cantidadSegundos =
        Math.floor(
            (
                diferencia %
                (
                    1000 *
                    60
                )
            ) /
            1000
        );


    dias.textContent =
        String(
            cantidadDias
        ).padStart(
            2,
            "0"
        );

    horas.textContent =
        String(
            cantidadHoras
        ).padStart(
            2,
            "0"
        );

    minutos.textContent =
        String(
            cantidadMinutos
        ).padStart(
            2,
            "0"
        );

    segundos.textContent =
        String(
            cantidadSegundos
        ).padStart(
            2,
            "0"
        );

}


actualizarTemporizador();


setInterval(
    actualizarTemporizador,
    1000
);


// =========================
// COPIAR ALIAS
// =========================

const botonCopiar =
    document.getElementById(
        "boton-copiar"
    );


botonCopiar.addEventListener(
    "click",
    async () => {

        try {

            await navigator.clipboard.writeText(
                evento.alias
            );

            botonCopiar.textContent =
                "ALIAS COPIADO";


            setTimeout(
                () => {

                    botonCopiar.textContent =
                        "COPIAR ALIAS";

                },
                2000
            );

        } catch (error) {

            console.error(
                "No se pudo copiar el alias:",
                error
            );

        }

    }
);


// =========================
// WHATSAPP
// =========================

const botonWhatsapp =
    document.getElementById(
        "boton-whatsapp"
    );


const mensajeWhatsapp =
    "Hola, quiero confirmar mi asistencia a los XV de Jenny.";


botonWhatsapp.href =
    `https://wa.me/${evento.whatsappMama}?text=${encodeURIComponent(
        mensajeWhatsapp
    )}`;


// =========================
// CARRUSEL
// =========================

const galeriaCarrusel =
    document.querySelector(
        ".galeria-carrusel"
    );

const fotosGaleria =
    document.querySelectorAll(
        ".galeria-pista img"
    );

const indicadoresGaleria =
    document.querySelectorAll(
        ".indicador-foto"
    );


let intervaloGaleria =
    null;

let pausaGaleria =
    null;

let animacionGaleria =
    null;

let indiceGaleria =
    0;


function actualizarIndicadoresGaleria() {

    indicadoresGaleria.forEach(
        (
            indicador,
            indice
        ) => {

            indicador.classList.toggle(
                "indicador-activo",
                indice ===
                indiceGaleria
            );

        }
    );

}


function actualizarIndiceGaleria() {

    if (
        !fotosGaleria.length
    ) {
        return;
    }


    const centroCarrusel =
        galeriaCarrusel.scrollLeft +
        galeriaCarrusel.clientWidth /
        2;


    let fotoMasCercana =
        0;

    let distanciaMinima =
        Infinity;


    fotosGaleria.forEach(
        (
            foto,
            indice
        ) => {

            const centroFoto =
                foto.offsetLeft +
                foto.offsetWidth /
                2;


            const distancia =
                Math.abs(
                    centroFoto -
                    centroCarrusel
                );


            if (
                distancia <
                distanciaMinima
            ) {

                distanciaMinima =
                    distancia;

                fotoMasCercana =
                    indice;

            }

        }
    );


    indiceGaleria =
        fotoMasCercana;


    actualizarIndicadoresGaleria();

}


function suavizarMovimiento(
    progreso
) {

    return (
        1 -
        Math.pow(
            1 - progreso,
            3
        )
    );

}


function moverGaleriaSuavemente(
    posicionFinal
) {

    if (
        !galeriaCarrusel
    ) {
        return;
    }


    if (
        animacionGaleria
    ) {

        cancelAnimationFrame(
            animacionGaleria
        );

    }


    const posicionInicial =
        galeriaCarrusel.scrollLeft;

    const distancia =
        posicionFinal -
        posicionInicial;

    const duracion =
        1000;

    const tiempoInicio =
        performance.now();


    function animar(
        tiempoActual
    ) {

        const tiempoTranscurrido =
            tiempoActual -
            tiempoInicio;


        const progreso =
            Math.min(
                tiempoTranscurrido /
                duracion,
                1
            );


        const progresoSuavizado =
            suavizarMovimiento(
                progreso
            );


        galeriaCarrusel.scrollLeft =
            posicionInicial +
            (
                distancia *
                progresoSuavizado
            );


        if (
            progreso <
            1
        ) {

            animacionGaleria =
                requestAnimationFrame(
                    animar
                );

        } else {

            animacionGaleria =
                null;

        }

    }


    animacionGaleria =
        requestAnimationFrame(
            animar
        );

}


function avanzarGaleria() {

    if (
        !galeriaCarrusel
    ) {
        return;
    }


    actualizarIndiceGaleria();


    if (
        indiceGaleria >=
        fotosGaleria.length - 1
    ) {

        indiceGaleria =
            0;


        actualizarIndicadoresGaleria();


        if (
            animacionGaleria
        ) {

            cancelAnimationFrame(
                animacionGaleria
            );

            animacionGaleria =
                null;

        }


        galeriaCarrusel.scrollLeft =
            0;

        return;

    }


    indiceGaleria++;


    actualizarIndicadoresGaleria();


    const foto =
        fotosGaleria[
            indiceGaleria
        ];


    if (!foto) {
        return;
    }


    const posicion =
        foto.offsetLeft -
        (
            galeriaCarrusel.clientWidth -
            foto.offsetWidth
        ) /
        2;


    moverGaleriaSuavemente(
        posicion
    );

}


function comenzarGaleriaAutomatica() {

    clearInterval(
        intervaloGaleria
    );


    intervaloGaleria =
        setInterval(
            () => {

                avanzarGaleria();

            },
            3000
        );

}


function reiniciarGaleriaAutomatica() {

    clearTimeout(
        pausaGaleria
    );

    clearInterval(
        intervaloGaleria
    );


    if (
        animacionGaleria
    ) {

        cancelAnimationFrame(
            animacionGaleria
        );

        animacionGaleria =
            null;

    }


    pausaGaleria =
        setTimeout(
            () => {

                comenzarGaleriaAutomatica();

            },
            4500
        );

}


if (
    galeriaCarrusel
) {

    galeriaCarrusel.addEventListener(
        "touchstart",
        reiniciarGaleriaAutomatica,
        {
            passive: true
        }
    );


    galeriaCarrusel.addEventListener(
        "pointerdown",
        reiniciarGaleriaAutomatica
    );


    galeriaCarrusel.addEventListener(
        "wheel",
        reiniciarGaleriaAutomatica,
        {
            passive: true
        }
    );


    galeriaCarrusel.addEventListener(
        "scroll",
        () => {

            actualizarIndiceGaleria();

        },
        {
            passive: true
        }
    );


    galeriaCarrusel.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                    "ArrowLeft" ||
                event.key ===
                    "ArrowRight"
            ) {

                reiniciarGaleriaAutomatica();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !==
                    "ArrowLeft" &&
                event.key !==
                    "ArrowRight"
            ) {
                return;
            }


            const estaEnGaleria =
                galeriaCarrusel.matches(
                    ":hover"
                ) ||
                document.activeElement ===
                    galeriaCarrusel ||
                galeriaCarrusel.contains(
                    document.activeElement
                );


            if (
                estaEnGaleria
            ) {

                reiniciarGaleriaAutomatica();

            }

        }
    );

}


// =========================
// BRILLITOS
// =========================

function crearBrillito(
    x,
    y
) {

    const brillo =
        document.createElement(
            "span"
        );


    brillo.className =
        "brillito";


    const variacionX =
        (
            Math.random() -
            0.5
        ) *
        24;


    const variacionY =
        (
            Math.random() -
            0.5
        ) *
        24;


    brillo.style.left =
        `${x + variacionX}px`;

    brillo.style.top =
        `${y + variacionY}px`;


    const tamanio =
        2 +
        Math.random() *
        4;


    brillo.style.width =
        `${tamanio}px`;

    brillo.style.height =
        `${tamanio}px`;


    brillo.style.animationDuration =
        `${1.2 + Math.random() * 1.2}s`;


    particulas.appendChild(
        brillo
    );


    setTimeout(
        () => {

            brillo.remove();

        },
        2600
    );

}


let intervaloBrillos =
    null;


function comenzarBrillos() {

    intervaloBrillos =
        setInterval(
            () => {

                const rect =
                    mariposa.getBoundingClientRect();


                const x =
                    rect.left +
                    rect.width /
                    2;


                const y =
                    rect.top +
                    rect.height /
                    2;


                crearBrillito(
                    x,
                    y
                );


                if (
                    Math.random() >
                    0.65
                ) {

                    crearBrillito(
                        x +
                        (
                            Math.random() -
                            0.5
                        ) *
                        40,

                        y +
                        (
                            Math.random() -
                            0.5
                        ) *
                        40
                    );

                }

            },
            130
        );

}


function detenerBrillos() {

    clearInterval(
        intervaloBrillos
    );

    intervaloBrillos =
        null;

}


// =========================
// VOLVER AL INICIO
// =========================

function volverAlInicio() {

    window.scrollTo(
        0,
        0
    );


    document.documentElement.scrollTop =
        0;

    document.body.scrollTop =
        0;

}


// =========================
// SECUENCIA PRINCIPAL
// =========================

async function iniciarSecuencia() {

    await esperar(
        500
    );

}


// =========================
// INICIAR LA MAGIA
// =========================

let secuenciaIniciada =
    false;


async function iniciarMagia() {

    if (
        secuenciaIniciada
    ) {
        return;
    }


    secuenciaIniciada =
        true;


    reproducirMusica();


    mensajeMariposa.classList.add(
        "oculto"
    );


    await esperar(
        500
    );


    intro.classList.add(
        "abriendo"
    );


    comenzarBrillos();


    const vuelo =
        mariposaVuelo.animate(
            [

                {
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotate(0deg) scale(1)"
                },

                {
                    left: "65%",
                    top: "39%",
                    transform:
                        "translate(-50%, -50%) rotate(9deg) scale(1.05)",
                    offset: 0.10
                },

                {
                    left: "77%",
                    top: "28%",
                    transform:
                        "translate(-50%, -50%) rotate(16deg) scale(1.08)",
                    offset: 0.20
                },

                {
                    left: "63%",
                    top: "24%",
                    transform:
                        "translate(-50%, -50%) rotate(-7deg) scale(1.11)",
                    offset: 0.30
                },

                {
                    left: "35%",
                    top: "31%",
                    transform:
                        "translate(-50%, -50%) rotate(-14deg) scale(1.15)",
                    offset: 0.42
                },

                {
                    left: "21%",
                    top: "46%",
                    transform:
                        "translate(-50%, -50%) rotate(-19deg) scale(1.18)",
                    offset: 0.52
                },

                {
                    left: "34%",
                    top: "66%",
                    transform:
                        "translate(-50%, -50%) rotate(13deg) scale(1.23)",
                    offset: 0.63
                },

                {
                    left: "67%",
                    top: "72%",
                    transform:
                        "translate(-50%, -50%) rotate(17deg) scale(1.28)",
                    offset: 0.75
                },

                {
                    left: "78%",
                    top: "55%",
                    transform:
                        "translate(-50%, -50%) rotate(-7deg) scale(1.34)",
                    offset: 0.84
                },

                {
                    left: "65%",
                    top: "43%",
                    transform:
                        "translate(-50%, -50%) rotate(-3deg) scale(1.45)",
                    offset: 0.91
                },

                {
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotate(0deg) scale(1.65)"
                }

            ],
            {
                duration: 9000,
                easing:
                    "cubic-bezier(0.45, 0, 0.25, 1)",
                fill: "forwards"
            }
        );


    await esperar(
        2800
    );


    intro.classList.add(
        "mostrar-mensaje"
    );


    await esperar(
        4200
    );


    intro.classList.add(
        "ocultar-mensaje"
    );


    await vuelo.finished;


    detenerBrillos();


    const acercamiento =
        mariposaVuelo.animate(
            [

                {
                    transform:
                        "translate(-50%, -50%) scale(1.65)"
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(2.0)",
                    offset: 0.15
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(2.5)",
                    offset: 0.30
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(3.2)",
                    offset: 0.45
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(4.1)",
                    offset: 0.60
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(5.2)",
                    offset: 0.75
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(6.5)",
                    offset: 0.88
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(8.0)"
                }

            ],
            {
                duration: 3000,
                easing:
                    "cubic-bezier(0.7, 0, 0.12, 1)",
                fill: "forwards"
            }
        );


    await acercamiento.finished;


    intro.classList.add(
        "transicion-final"
    );


    await esperar(
        250
    );


    volverAlInicio();


    pagina.classList.add(
        "pagina-visible"
    );


    document.body.classList.add(
        "mariposas-hero"
    );


    await esperar(
        2500
    );


    pagina.classList.add(
        "pasar-a-evento"
    );


    document.body.classList.add(
        "mariposas-saliendo"
    );


    document.body.classList.remove(
        "mariposas-hero"
    );


    await esperar(
        1400
    );


    volverAlInicio();


    seccionEvento.classList.add(
        "evento-activo"
    );


    document.body.classList.remove(
        "mariposas-saliendo"
    );


    document.body.classList.add(
        "mariposas-evento"
    );


    document.body.style.overflowY =
        "auto";


    volverAlInicio();


    elementosEvento.forEach(
        (
            elemento,
            indice
        ) => {

            setTimeout(
                () => {

                    elemento.classList.add(
                        "evento-visible"
                    );

                },
                indice *
                120
            );

        }
    );


    comenzarGaleriaAutomatica();

}


// =========================
// ESPERAR
// =========================

function esperar(ms) {

    return new Promise(
        resolve => {

            setTimeout(
                resolve,
                ms
            );

        }
    );

}


// =========================
// TOQUE / CLICK EN MARIPOSA
// =========================

mariposaVuelo.addEventListener(
    "click",
    iniciarMagia
);


mariposa.addEventListener(
    "click",
    iniciarMagia
);


mariposa.addEventListener(
    "touchend",
    (event) => {

        event.preventDefault();

        iniciarMagia();

    },
    {
        passive: false
    }
);


// =========================
// INICIAR
// =========================

iniciarSecuencia();