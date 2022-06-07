import BannerFirst from './banner-slide1.svg';
import BannerSecond from './banner-slide2.svg';
import BannerThird from './banner-slide3.svg';
import Golden from './golden.jpg'
import Paciente from './paciente.png'
import Vacunacion from './vacunacion.png'
import Veterinario from './veterinario.png'

import './Home.css'

function Home (){
    return(
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={BannerFirst} class="d-block w-100" alt="Banner 1-dale importancia a tus mascotas"/>
                </div>
                <div class="carousel-item">
                <img src={BannerSecond} class="d-block w-100" alt="Banner 2-Los mejores servicios veterinarios"/>
                </div>
                <div class="carousel-item">
                <img src={BannerThird} class="d-block w-100" alt="Banner 3"/>
                </div>
            </div>
        </div>

        <section id='agenda'>
            <div class="row">
                <div class="agenda-cita col-12 col-md-8 col-xl-9">
                    <h1>AGENDA UNA CITA AHORA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h1>
                    <p>Queremos que conozcas nuestra propuesta de baño para mascotas, donde tenemos espacios dedicados para evitar la contaminación cruzada que puede llegar a existir en una veterinaria. aplica de lunes a viernes para mascotas que visitan la cínica por primera vez.</p>
                    <h6>RECUERDA QUE NUESTRO EQUIPO MÉDICO TE CONFIRMARÁ LA CITA</h6>
                    <button type="button" class="btn btn-outline-primary"><i class="bi bi-calendar-week-fill"></i>Agendar</button>
                </div>
                <div class="agenda-promocion d-flex flex-column align-items-center col-12 col-md-4 col-xl-3">
                    <h1 class="mb-3">GRATIS PRIMER BAÑO</h1>
                    <img class="rounded-circle " src={Golden} alt="Perro Golden Retriver"/>
                </div>
            </div>
        </section>

        <h2 class="tseccion text-center mb-4">Servicios</h2>

    <section className='servicios'>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src={Paciente} class="card-img-top mx-auto my-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-center ">Pacientes</h5>
                    <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eaque vero laborum eligendi ut quae, incidunt est beatae quidem harum numquam debitis inventore voluptatem quisquam nihil. Eum, nam quae. Cumque.</p>
                </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src={Veterinario} class="card-img-top mx-auto my-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-center">Veterinarios</h5>
                    <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eaque vero laborum eligendi ut quae, incidunt est beatae quidem harum numquam debitis inventore voluptatem quisquam nihil. Eum, nam quae. Cumque.</p>
                </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src={Vacunacion} class="card-img-top mx-auto my-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-center">Vacunación</h5>
                    <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eaque vero laborum eligendi ut quae, incidunt est beatae quidem harum numquam debitis inventore voluptatem quisquam nihil. Eum, nam quae. Cumque.</p>
                </div>
            </div>
            </div>
        </div>
        </section>

        </div>
)}

export default Home;