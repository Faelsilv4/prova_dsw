const eventos = [
    {
        id: 1,
        titulo: "SACI",
        categoria: "palestra",
        data: "2024-07-15",
        local: "Centro Cultural Velha Serpa",
        vagas: 50,
        descricao: "Palestra sobre o Sistema de Apoio à Cultura e Inovação (SACI) e suas oportunidades para artistas e produtores culturais."
    },
    {
        id: 2,
        titulo: "Oficina de Teatro",
        categoria: "oficina",
        data: "2024-07-20",
        local: "Teatro Municipal",
        vagas: 30,
        descricao: "Oficina de teatro para iniciantes, com foco em expressão corporal e improvisação."
    },
    {
        id: 3,
        titulo: "Introdução ao cursor",
        categoria: "minicurso",
        data: "2024-07-25",
        local: "Centro de Estudos Superiores de Itacoatiara",
        vagas: 20,
        descricao: "Minicurso introdutório sobre o uso do cursor em ambientes de programação."
    },
    {
        id: 4,
        titulo: "BNCC Computação",
        categoria: "seminário",
        data: "2024-08-05",
        local: "CETAM",
        vagas: 25,
        descricao: "Seminário sobre a Base Nacional Comum Curricular (BNCC) em Computação."
    },
    {
        id: 5,
        titulo: "Workshop de Desenvolvimento Web",
        categoria: "workshop",
        data: "2024-08-15",
        local: "Centro de Tecnologia",
        vagas: 30,
        descricao: "Workshop prático de desenvolvimento web com foco em tecnologias modernas."
    },
    {
        id: 6,
        titulo: "Palestra sobre Inteligência Artificial",
        categoria: "palestra",
        data: "2024-08-20",
        local: "Auditório do IFAM",
        vagas: 40,
        descricao: "Palestra sobre os avanços e aplicações da inteligência artificial na sociedade."
    }
]




const inputTitulo = document.getElementById('pesquisaPorTitulo');
if (inputTitulo) {
    inputTitulo.addEventListener('input', () => {
        const tituloPesquisado = inputTitulo.value.toLowerCase();
        const eventosFiltrados = eventos.filter(evento => evento.titulo.toLowerCase().includes(tituloPesquisado));
        listarEventos(eventosFiltrados);
    });
}

const inputCategoria = document.getElementById('pesquisaPorCategoria');
if (inputCategoria) {
    inputCategoria.addEventListener('change', () => {
        const categoriaPesquisada = inputCategoria.value.toLowerCase();
        const eventosFiltrados = eventos.filter(evento => evento.categoria.toLowerCase().includes(categoriaPesquisada));
        listarEventos(eventosFiltrados);
    });
}

listarEventos(eventos)

function listarEventos(eventos) {
    const cardUsuarios = document.querySelector('.card-usuarios');

    if (!cardUsuarios) return
    
    cardUsuarios.innerHTML = '';

    eventos.map((evento) => {
        
        const cardEventos = document.createElement('div');
        cardEventos.classList.add('card-eventos');
        cardUsuarios.appendChild(cardEventos);


        const p1 = document.createElement('p');
        p1.textContent = `Id: ${evento.id}`;
        p1.classList.add('paragrafo');
        cardEventos.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = `Título: ${evento.titulo}`;
        p2.classList.add('paragrafo');
        cardEventos.appendChild(p2);

        const p3 = document.createElement('p');
        p3.textContent = `Categoria: ${evento.categoria}`;
        p3.classList.add('paragrafo');

        cardEventos.appendChild(p3);

        const p4 = document.createElement('p');
        p4.textContent = `Data: ${evento.data}`;
        p4.classList.add('paragrafo');
        cardEventos.appendChild(p4);

        const p5 = document.createElement('p');
        p5.textContent = `Local: ${evento.local}`;
        p5.classList.add('paragrafo');
        cardEventos.appendChild(p5);

        const p6 = document.createElement('p');
        p6.textContent = `Vagas: ${evento.vagas}`;
        p6.classList.add('paragrafo');
        cardEventos.appendChild(p6);

        const p7 = document.createElement('p');
        p7.classList.add('paragrafo');
        p7.textContent = `Descrição: ${evento.descricao}`;
        cardEventos.appendChild(p7);
    })
}



// formulario
const form = document.getElementById('formularioEvento');
const btnAdicionar = document.getElementById('btn');

form.style.display = 'none';

if (btnAdicionar) {
    btnAdicionar.addEventListener('click', (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const categoria = document.getElementById('categoria').value;
    const data = document.getElementById('data').value;
    const local = document.getElementById('local').value;
    const vagas = parseInt(document.getElementById('vagas').value);
    const descricao = document.getElementById('descricao').value;

    const novoEvento = {
        id: eventos.length + 1,
        titulo,
        categoria,
        data,
        local,
        vagas,
        descricao
    };

    console.log(novoEvento)
    adicionarEvento(novoEvento);
    console.log(eventos)
})
}


function adicionarEvento(evento) {
    eventos.push(evento);
    listarEventos(eventos);
    const p = document.getElementById('mensagem');
    if (p) {
        p.textContent = 'Evento adicionado com sucesso!';
        p.style.color = 'green';
    }
    limparFormulario();
    exibirListaEventos()
}

function limparFormulario() {
    document.getElementById('titulo').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('data').value = '';
    document.getElementById('local').value = '';
    document.getElementById('vagas').value = '';
    document.getElementById('descricao').value = '';
}




function exibirListaEventos(){
    const cardUsuarios = document.querySelector('.card-usuarios');
    cardUsuarios.style.display = 'grid';
    const sectionPesquisa = document.querySelector('.section-pesquisa');
    sectionPesquisa.style.display = 'flex';
    const formularioEvento = document.getElementById('formularioEvento');
    formularioEvento.style.display = 'none';
}

const linkHome = document.getElementById('link-home');
const formularioEvento = document.getElementById('formularioEvento');
const linkFormulario = document.getElementById('link-formulario');
const sectionPesquisa = document.querySelector('.section-pesquisa');

if (linkHome){
    linkHome.addEventListener('click', (e) => {
        formularioEvento.style.display = 'none';
        sectionPesquisa.style.display = 'flex';
        const cardUsuarios = document.querySelector('.card-usuarios');
        cardUsuarios.style.display = 'grid';
         listarEventos(eventos);
    })
}

if (linkFormulario){
    const cardUsuarios = document.querySelector('.card-usuarios');
    linkFormulario.addEventListener('click', (e) => {
        cardUsuarios.style.display = 'none';
        sectionPesquisa.style.display = 'none';
        formularioEvento.style.display = 'flex';
    })
}