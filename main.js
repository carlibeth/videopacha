

Vue.component('header-lista', {
    data: function () {
        return {
            title: 'primerComponente'

        }
    },
    template:

        `<nav class="title">
        <div class="title-nav">
            <h1 class="title-nav_h1">VIDEO PACHA TV</h1>
            <a class="title-nav_a">Agregar video</a>
        </div>
    </nav>`

}
)

Vue.component('main-tarjetasdevideos', {
    props: {
        video: Object,
    },
    data: function () {
        return {
            title: 'segundoComponente'
        }
    },
    template:

        `<div class="tarjeta">
            <div class="tarjeta-url">{{video.url}}</div>
            <span class="tarjeta-nombre">{{video.nombre}}</span>
            <spna class="tarjeta-visualizaciones" > {{video.visualizaciones}}</span>
            <p class="tarjeta-descripcion">{{video.descripcion}}</p>
            <button class="tarjeta-boton"> Ver Detalles</button>
        </div>`

})

Vue.component('main-listadevideos', {
    data: function () {
        return {
            title: 'tercerComponente',
            videos: []
        }
    },
    template:
        `<div class="contenedordevideos">
            <h2 class="contenedordevideos-title">Lista de Videos</h2>
            <div class="contenedordevideos-grilla">
                <main-tarjetasdevideos v-for="video in videos" :video="video"></main-tarjetasdevideos>
            </div>
        </div>`,

    created() {
        fetch("http://localhost:3000/videos")
            .then(response => response.json())
            .then(json => {
                this.videos = json;
            });
    }
}
)

Vue.component('agregar', {
    
    data: function () {
        return {
            title: 'cuartoComponente'
        }
    },
    template:

        `<div class="contenedormodal">
            <div class="contenedormodal-title">Agregar Video</div>
            <input type="text" class="contenedormodal-nombre" name="nombre" id="" placeholder="Titulo">
            <input type="text" class="contenedormodal-url" name="url" id="" placeholder="Url del video">
            <textarea name="descripcion" class="contenedormodal-descripcion" id="" cols="30" rows="10" placeholder="Descripcion"></textarea>
            <div class="contenedormodal-botones">
                <button class="contenedormodal-botones_agregar">Agregar</button>
                <button class="contenedormodal-botones_cancelar">Cancelar</button>
            </div>    
        </div>`

})


const app = new Vue({

    el: "#app",
    data: {
        mostrar: false
    }
})