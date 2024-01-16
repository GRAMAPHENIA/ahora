// SE DECLARA EL ARRAY //
const post = [
    { id: 1, category: "noticias", title: "Sonata Artica lanza un nuevo single", status: 'publicado'},
    { id: 2, category: "noticias", title: "Ramones: A 20 años del ultimo show en Argentina", status: 'publicado'},
    { id: 3, category: "noticias", title: "Queen regresa al pais con su nueva gira mundial", status: 'A publicar'},
    { id: 4, category: "coberturas",title: "En fotos: Conociendo Rusia en el Teatro Vorterix", status: 'A publicar'},
    { id: 5, category: "coberturas", title: "En fotos: La Renga en el Estadio de Racing", status: 'publicado'},
    { id: 6, category: "coberturas", title: "En fotos: Fito Paez en el Luna Park", status: 'publicado'},
    { id: 7, category: "noticias", title: "Charly Garcia prepara su nuevo material de estudio", status: 'A publicar'},
  ];

console.table(post)


// SE CREA UNA CLASE DONDE SE VAN A ENGLOBAR Y TRABAJAR LOS DISTINTOS METODOS //
class check {
    constructor(post){
        this.post = post;
    }
 
getPostById(id){
    const foundPost = this.post.find((item) => item.id === id);
    if (foundPost) {
      return foundPost;
    } else {
      alert("No existe la publicación");
    }
  }

getPostByCategory(category){
    const post = this.post.filter ( item => item.category.toLowerCase() === category.toLowerCase())
    return post
} 

getPostByStatus(status){
    const post = this.post.filter ( item => item.status.toLowerCase() === status.toLowerCase())
    return post

} 

getPostByTitle (title){
    const post = this.post.filter ( item => item.title.toLowerCase().includes(title.toLowerCase()))
    return post
}

addPost(newPost){
    let id = this.post.length + 1;
    newPost.id = id;
    let orderedPost = Object.assign({}, {
        id: newPost.id,
        category: newPost.category,
        title: newPost.title,
        status: newPost.status
      });
  
      this.post.push(orderedPost);
    }
  
showPost() {
    console.table(this.post);
    }

} 

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DEL ID //
// const news = new search(post)
// const id = parseInt(prompt('Ingrese el ID'))
// const results = news.getPostById(id)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DE LA CATEGORIA //

//  const news = new search(post)
//  const category = (prompt('Ingrese la categoria' ))
//  const results = news.getPostByCategory(category)
//  console.table(results)
//  console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DEL ESTADO //

// const news = new search(post)
// const stage = (prompt('Ingrese el estado del posteo' ))
// const results = news.getPostByStatus(stage)
// console.table(results)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA HACER LA BUSQUEDA DE LAS PUBLICACIONES A TRAVES DE PALABRAS //

// const news = new search(post)
// const title = (prompt('Ingrese su busqueda' ))
// const results = news.getPostByTitle(title)
// console.table(results)
// console.log(results)

// SE DECLARAN LAS VARIABLES PARA AGREGAR UN NUEVO POST Y REALIZAR BUSQUEDAS  //
const news = new check(post)   
let continuar = true;
while (continuar) {
    let eleccion = prompt('Escribir "agregar" para realizar una nueva publicacion\nEscribir "buscar" para acceder al buscador\nEscribir "salir" para terminar');
    eleccion = eleccion.toLowerCase();
    
    if (eleccion === 'agregar') { 
        let newPost;
        let titulo;
        let estado;
        do {
            newPost = prompt('Ingrese la categoria del posteo o "salir" para volver al menu anterior');
           
            if (newPost.toLowerCase() !== 'salir') {
                titulo = prompt('Ingrese el titulo del nuevo posteo o "salir" para volver al menu anterior');
                if (titulo.toLowerCase() !== 'salir') {
                    estado = prompt('Ingrese el estado del nuevo posteo o "salir" para volver al menu anterior');
                    if (estado.toLowerCase() !== 'salir') {
                        news.addPost({category: newPost, title: titulo, status: estado});
                        news.showPost(); 
                    }
                }
            }
        } while (newPost.toLowerCase() !== 'salir' && titulo.toLowerCase() !== 'salir' && estado.toLowerCase() !== 'salir');
        
    } else if (eleccion === 'buscar') {
        let busqueda;
    do {
      busqueda = prompt(
        'Ingrese el ID, título, categoría o estado de la publicación que está buscando o "salir" para volver al menu anterior'
      );
      if (busqueda.toLowerCase() !== "salir") {
        let results = [];

        if (!isNaN(busqueda)) {
          // Si es un número, buscar por ID
          const resultById = news.getPostById(parseInt(busqueda));
          if (resultById) {
            results.push(resultById);
          }
          } else {
          // Si no es un número, buscar por título, categoría o estado
          const resultByTitle = news.getPostByTitle(busqueda);
          const resultByCategory = news.getPostByCategory(busqueda);
          const resultByStatus = news.getPostByStatus(busqueda);

          results = results.concat(
            resultByTitle,
            resultByCategory,
            resultByStatus
          );
        }

        if (results.length > 0) {
          let message = "Resultados:\n";
          results.forEach((result) => {
            message += `ID: ${result.id}\nTítulo: ${result.title}\nCategoría: ${result.category}\nEstado: ${result.status}\n\n`;
          });
          alert(message);
        } else {
        
        }
      }
        } while (busqueda.toLowerCase() !== 'salir' );    
       
        
        
        // Terminar el bucle si el usuario elige salir    
    } else { (eleccion === 'salir') 

        continuar = false;}
}
        