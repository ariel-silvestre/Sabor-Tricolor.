// Base de datos de recetas
const RECIPES = [
  {
    id:1, 
    title:'Salteñas', 
    section:'bolivianas', 
    ingredients:['500g carne molida','3 papas cocidas','1 cebolla grande','2 huevos duros','Arvejas','Masa para empanadas','Caldo de carne'],
    time:'1h 30m',
    difficulty:'Media',
    img:'https://recetasbolivia.com/wp-content/uploads/saltena-Boliviana.jpg',
    steps:[
      'Sofreír la carne molida con la cebolla picada hasta que doren',
      'Agregar las papas cortadas en cubitos pequeños y las arvejas',
      'Añadir caldo de carne con gelatina sin sabor para dar jugosidad',
      'Sazonar con comino, sal, pimienta y ají amarillo al gusto',
      'Dejar enfriar completamente el relleno antes de usar',
      'Preparar la masa con harina, manteca, azúcar y agua tibia',
      'Extender la masa y cortar círculos de aproximadamente 15cm',
      'Rellenar con la mezcla fría, huevo duro y aceitunas',
      'Cerrar formando el característico repulgue de las salteñas',
      'Hornear a 180°C por 25-30 minutos hasta que estén doradas'
    ]
  },
  {
    id:2, 
    title:'Api con Pastel', 
    section:'bolivianas', 
    ingredients:['500g maíz morado','200g azúcar','Canela en rama','Clavo de olor','Cáscara de naranja'],
    time:'40m',
    difficulty:'Fácil',
    img:'https://media.todojujuy.com/p/1b4e6bf5aafc38e9f2f1aaadd00af170/adjuntos/227/imagenes/003/342/0003342861/1200x675/smart/api-pastel.png',
    steps:[
      'Remojar el maíz morado durante toda la noche',
      'Hervir el maíz con abundante agua, canela y clavo de olor',
      'Cocinar a fuego medio por 30 minutos hasta que el maíz esté suave',
      'Agregar cáscara de naranja para dar aroma',
      'Colar el líquido y reservar (este es el api)',
      'Endulzar con azúcar al gusto mientras está caliente',
      'Servir muy caliente acompañado de pastel o buñuelos',
      'Opcional: agregar un toque de canela molida al servir'
    ]
  },
  {
    id:3, 
    title:'Sopa de Maní', 
    section:'bolivianas', 
    ingredients:['250g maní tostado','500g carne de res','3 papas grandes','2 zanahorias','Cebolla','Arvejas','Perejil'],
    time:'1h',
    difficulty:'Media',
    img:'https://recetasbolivia.com/wp-content/uploads/sopa-de-mani-de-bolivia.jpg',
    steps:[
      'Tostar el maní en una sartén sin aceite hasta que esté dorado',
      'Moler el maní hasta obtener una pasta fina (puede usar licuadora)',
      'En una olla, cocinar la carne con sal hasta que esté tierna',
      'Agregar la cebolla picada, zanahorias y papas en cubos',
      'Diluir la pasta de maní en caldo tibio antes de agregarla',
      'Incorporar la mezcla de maní a la olla, revolviendo constantemente',
      'Añadir las arvejas y cocinar por 15 minutos más',
      'Sazonar con sal, pimienta y orégano al gusto',
      'La sopa debe quedar espesa y cremosa',
      'Servir caliente decorado con perejil picado'
    ]
  },
  {
    id:4, 
    title:'Ensalada de Quinua', 
    section:'ensaladas', 
    ingredients:['1 taza quinua','2 tomates','1 pepino','Cebolla morada','Jugo de limón','Aceite de oliva','Cilantro'],
    time:'20m',
    difficulty:'Fácil',
    img:'https://cdn.bolivia.com/gastronomia/2014/07/29/ensalada-de-quinua-con-finas-hierbas-3282.jpg',
    steps:[
      'Lavar muy bien la quinua bajo agua corriente',
      'Cocinar la quinua en agua con sal (proporción 1:2) por 15 minutos',
      'Dejar enfriar la quinua completamente',
      'Picar finamente tomate, pepino y cebolla morada',
      'Mezclar todos los vegetales con la quinua fría',
      'Preparar vinagreta con limón, aceite de oliva, sal y pimienta',
      'Agregar cilantro fresco picado al gusto',
      'Refrigerar por 30 minutos antes de servir para mejor sabor'
    ]
  },
  {
    id:5, 
    title:'Ensalada de Palta y Maíz', 
    section:'ensaladas', 
    ingredients:['2 paltas maduras','1 taza maíz cocido','Cebolla morada','Tomate','Jugo de limón','Cilantro'],
    time:'15m',
    difficulty:'Fácil',
    img:'https://hoycocinamosjuntos.wordpress.com/wp-content/uploads/2014/02/ensalada-de-maiz.jpg?w=640',
    steps:[
      'Cortar las paltas en cubos medianos',
      'Picar la cebolla morada muy fina y remojar en agua fría',
      'Cortar el tomate en cubos del mismo tamaño que la palta',
      'Escurrir bien el maíz cocido',
      'Mezclar suavemente todos los ingredientes',
      'Agregar jugo de limón fresco, sal y pimienta',
      'Decorar con cilantro picado',
      'Servir inmediatamente para evitar que la palta se oxide'
    ]
  },
  {
    id:6, 
    title:'Helado de Canela Casero', 
    section:'postres', 
    ingredients:['500ml leche','200ml crema de leche','150g azúcar','4 ramas canela','4 yemas de huevo'],
    time:'3h',
    difficulty:'Media',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWWjO32smAPuvRmeFKFdTZkPE9gjq4sghOA&s',
    steps:[
      'Calentar la leche con las ramas de canela sin que hierva',
      'Dejar infusionar por 20 minutos y retirar la canela',
      'Batir las yemas con el azúcar hasta que estén espumosas',
      'Agregar la leche tibia poco a poco a las yemas batiendo constantemente',
      'Cocinar a fuego lento sin dejar que hierva, revolviendo siempre',
      'Cuando espese ligeramente, retirar del fuego',
      'Dejar enfriar completamente y agregar la crema de leche',
      'Colocar en el congelador, batiendo cada 30 minutos las primeras 2 horas',
      'Congelar por 3 horas adicionales antes de servir'
    ]
  },
  {
    id:7, 
    title:'Suspiros', 
    section:'postres', 
    ingredients:['1 litro leche','400g azúcar','Dulce de leche','Canela en polvo','Coco rallado'],
    time:'2h',
    difficulty:'Media',
    img:'https://www.haceloconhuevos.com/wp-content/uploads/2022/02/suspiros-de-limon.jpg',
    steps:[
      'Hervir la leche con azúcar y canela en rama a fuego medio',
      'Reducir constantemente moviendo con cuchara de madera',
      'Cocinar por 1-1.5 horas hasta obtener una pasta espesa',
      'Debe poder formar una bola con las manos sin pegarse',
      'Dejar enfriar completamente',
      'Formar bolitas del tamaño de una nuez',
      'Hacer un hueco en el centro y rellenar con dulce de leche',
      'Cerrar bien y rebozar en coco rallado',
      'Refrigerar por al menos 1 hora antes de servir'
    ]
  },
  {
    id:8, 
    title:'Tortilla de Papa', 
    section:'bolivianas', 
    ingredients:['4 papas grandes','6 huevos','1 cebolla','Queso rallado','Aceite','Sal y pimienta'],
    time:'30m',
    difficulty:'Fácil',
    img:'https://cdn.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg',
    steps:[
      'Pelar y cortar las papas en rodajas finas',
      'Freír las papas en aceite hasta que estén doradas',
      'Escurrir bien el exceso de aceite',
      'Batir los huevos con sal y pimienta',
      'Agregar las papas fritas y la cebolla picada a los huevos',
      'Añadir queso rallado y mezclar bien',
      'Calentar aceite en una sartén grande',
      'Verter toda la mezcla y cocinar a fuego medio-bajo',
      'Cuando esté dorada por debajo, voltear con ayuda de un plato',
      'Cocinar el otro lado hasta que esté dorado y cuajado'
    ]
  },
  {
    id:9, 
    title:'Mazamorra de Maíz', 
    section:'postres', 
    ingredients:['500g maíz blanco','1 litro leche','200g azúcar','Canela en rama','Vainilla'],
    time:'50m',
    difficulty:'Fácil',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFm6JBKjuOTYnWQu9lTuEbqb_IQ-FHh7iiA&s',
    steps:[
      'Remojar el maíz durante toda la noche',
      'Cocinar el maíz en agua hasta que esté muy suave',
      'Escurrir y moler el maíz hasta obtener una pasta',
      'En una olla, calentar la leche con la canela',
      'Agregar la pasta de maíz y cocinar revolviendo constantemente',
      'Añadir azúcar al gusto y esencia de vainilla',
      'Cocinar a fuego lento por 20 minutos hasta que espese',
      'Debe quedar cremosa pero no muy líquida',
      'Servir tibia o fría, espolvoreada con canela'
    ]
  },
  {
    id:10, 
    title:'Ensalada Criolla', 
    section:'ensaladas', 
    ingredients:['2 cebollas moradas','3 tomates','2 ajíes','Jugo de limón','Perejil','Sal'],
    time:'10m',
    difficulty:'Fácil',
    img:'https://cdn.bolivia.com/gastronomia/2011/08/05/ensalada-criolla-1753.jpg',
    steps:[
      'Cortar la cebolla en juliana muy fina',
      'Remojar la cebolla en agua con sal y limón por 10 minutos',
      'Esto elimina el sabor fuerte y la hace más suave',
      'Escurrir bien la cebolla',
      'Cortar los tomates en rodajas o gajos',
      'Picar los ajíes en rodajas finas (sin semillas si no quieres picante)',
      'Mezclar todos los ingredientes',
      'Aliñar con jugo de limón, sal y perejil picado',
      'Servir inmediatamente como acompañamiento'
    ]
  },
  {
    id: 11,
    title: 'Pique Macho',
    section: 'bolivianas',
    ingredients: [
      '500g carne de res',
      '4 salchichas',
      '4 papas grandes',
      '2 tomates',
      '1 cebolla',
      '2 ajíes',
      '2 huevos duros',
      'Aceite para freír',
      'Mostaza y mayonesa'
    ],
    time: '45m',
    difficulty: 'Media',
    img: 'https://i0.wp.com/elcalderoviajero.com/wp-content/uploads/2018/12/pique-a-lo-macho-12.jpg?fit=750%2C498&ssl=1',
    steps: [
      'Cortar la carne en tiras delgadas y sazonar con sal y pimienta',
      'Freír las papas cortadas en bastones hasta que estén doradas',
      'Saltear la carne a fuego alto hasta que esté bien dorada',
      'Cortar las salchichas en rodajas y freír ligeramente',
      'Picar tomate, cebolla y ají en cubos medianos',
      'En una sartén grande, saltear las verduras brevemente',
      'Mezclar la carne, salchichas y papas con las verduras',
      'Servir en un plato grande decorado con huevo duro',
      'Acompañar con mostaza, mayonesa y ají al gusto',
      'Se sirve tradicionalmente como plato para compartir'
    ]
  },
  {
    id: 12,
    title: 'Silpancho',
    section: 'bolivianas',
    ingredients: [
      '500g carne de res molida o aporreada',
      '2 tazas arroz',
      '4 papas',
      '4 huevos',
      '2 tomates',
      '1 cebolla',
      'Pan rallado',
      'Perejil'
    ],
    time: '40m',
    difficulty: 'Media',
    img: 'https://recetasbolivia.com/wp-content/uploads/Silpancho-Cochabambino.jpg',
    steps: [
      'Aplanar la carne hasta dejarla muy fina (tradicionalmente se aporrea)',
      'Pasar la carne por huevo batido y pan rallado',
      'Freír la carne empanizada hasta que esté dorada y crujiente',
      'Cocinar el arroz blanco con sal',
      'Freír las papas en rodajas finas hasta dorarlas',
      'Preparar llajua o sarsa criolla con tomate, cebolla y locoto',
      'Freír los huevos tipo "estrellado" (con la yema líquida)',
      'Montar el plato: base de arroz, carne encima, papas al lado',
      'Coronar con el huevo frito y la sarsa',
      'Decorar con perejil fresco picado'
    ]
  },
  {
    id: 13,
    title: 'Fricasé Paceño',
    section: 'bolivianas',
    ingredients: [
      '1kg carne de cerdo',
      '500g mote blanco',
      '4 papas',
      '3 ajíes amarillos',
      '2 cebollas',
      'Comino y orégano',
      'Ajo',
      'Chuño negro'
    ],
    time: '2h',
    difficulty: 'Difícil',
    img: 'https://cdn.bolivia.com/sdi/2012/08/24/99aa347604ec4c198a6f0af8c1601056.jpg',
    steps: [
      'Remojar el mote blanco desde la noche anterior',
      'Cocinar el mote hasta que esté tierno (aproximadamente 1 hora)',
      'Cortar la carne de cerdo en trozos medianos',
      'Preparar un ahogado con cebolla, ajo, comino y orégano',
      'Licuar los ajíes amarillos con un poco de caldo',
      'Agregar la carne al ahogado y dorar bien',
      'Añadir el ají licuado y cocinar por 30 minutos',
      'Incorporar las papas y el chuño negro',
      'Agregar el mote cocido y mezclar todo',
      'Cocinar a fuego bajo por 20 minutos más',
      'El caldo debe quedar espeso y amarillo brillante',
      'Servir bien caliente con llajua al lado'
    ]
  },
  {
    id: 14,
    title: 'Chairo Paceño',
    section: 'bolivianas',
    ingredients: [
      '500g carne de cordero o res',
      '1 taza chuño blanco',
      '3 papas',
      '2 zanahorias',
      'Cebolla',
      'Habas verdes',
      'Trigo pelado',
      'Ají amarillo',
      'Hierbabuena'
    ],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://boliviatravelsite.com/Images/ArticlePhotos/chairo-soup.jpg',
    steps: [
      'Remojar el chuño blanco el día anterior',
      'Cocinar el trigo pelado hasta que esté tierno',
      'Hervir la carne con sal hasta que esté suave',
      'Agregar el chuño escurrido y cocinar por 15 minutos',
      'Incorporar papas, zanahorias y habas cortadas',
      'Preparar un ahogado con cebolla y ají amarillo',
      'Agregar el ahogado a la sopa',
      'Añadir el trigo cocido',
      'Sazonar con sal, pimienta y hierbabuena fresca',
      'Cocinar a fuego medio hasta que espese ligeramente',
      'Servir muy caliente con perejil picado encima'
    ]
  },
  {
    id: 15,
    title: 'Majadito Cruceño',
    section: 'bolivianas',
    ingredients: [
      '500g charque (carne seca)',
      '3 tazas arroz',
      '4 huevos',
      '3 plátanos maduros',
      '1 cebolla',
      '2 tomates',
      'Yuca',
      'Ají'
    ],
    time: '1h',
    difficulty: 'Media',
    img: 'https://images.aws.nestle.recipes/original/fa25010f0dfebe5a2d24a840773bf394_recetas-nestle---scz-2022-majadito-web.jpg',
    steps: [
      'Desalar el charque dejándolo en agua toda la noche',
      'Cocinar el charque hasta que esté suave y deshilachar',
      'Cocinar el arroz blanco y dejar reposar',
      'Freír la yuca en trozos hasta dorar',
      'Freír los plátanos maduros en rodajas',
      'Preparar un ahogado con cebolla y tomate picados',
      'Mezclar el charque deshilachado con el ahogado',
      'Incorporar el arroz y mezclar todo muy bien',
      'El arroz debe tomar un color amarillento del charque',
      'Freír los huevos tipo estrellado',
      'Servir el majadito con huevo, plátano y yuca encima',
      'Acompañar con ají y ensalada'
    ]
  },
  {
    id: 16,
    title: 'Chicharrón de Cerdo',
    section: 'bolivianas',
    ingredients: [
      '1kg carne de cerdo con cuero',
      'Mote blanco cocido',
      '4 papas',
      'Chuño',
      'Ají amarillo',
      'Comino',
      'Sal gruesa'
    ],
    time: '2h',
    difficulty: 'Media',
    img: 'https://i.ytimg.com/vi/VRarMMdBSR8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANv3N7y6Yubzjvgm6qLUYt9Li-Mg',
    steps: [
      'Cortar el cerdo en trozos grandes con cuero',
      'Cocinar la carne en su propia grasa a fuego medio',
      'No agregar agua, la carne debe cocinarse en su jugo',
      'Sazonar con sal gruesa y comino',
      'Cocinar por aproximadamente 1.5 horas removiendo ocasionalmente',
      'La carne debe quedar dorada y crujiente',
      'Cocinar papas y chuño en el mismo jugo del chicharrón',
      'Preparar una sarsa con ají amarillo',
      'El cuero debe quedar muy crocante',
      'Servir con mote, papas, chuño y llajua',
      'Tradicionalmente se acompaña con mote blanco'
    ]
  },
  {
    id: 17,
    title: 'Ranga Ranga',
    section: 'bolivianas',
    ingredients: [
      '1kg guatita (mondongo)',
      '500g mote blanco',
      '4 papas',
      '3 ajíes amarillos',
      'Cebolla',
      'Ajo',
      'Comino y orégano',
      'Perejil'
    ],
    time: '3h',
    difficulty: 'Difícil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26iyWNhBDhEfeKk-vK4734RCDBmtXix62sQ&s',
    steps: [
      'Limpiar muy bien la guatita con sal y limón',
      'Cocinar la guatita en olla de presión por 1 hora',
      'Cortar la guatita cocida en trozos pequeños',
      'Cocinar el mote hasta que esté muy suave',
      'Preparar ahogado con cebolla, ajo, comino y orégano',
      'Licuar ajíes amarillos con un poco de caldo',
      'Agregar la guatita al ahogado y cocinar',
      'Incorporar el ají licuado y las papas',
      'Añadir el mote y cocinar todo junto por 30 minutos',
      'El caldo debe ser espeso y amarillo intenso',
      'Servir muy caliente decorado con perejil',
      'Acompañar con llajua bien picante'
    ]
  },
  {
    id: 18,
    title: 'Plato Paceño',
    section: 'bolivianas',
    ingredients: [
      '4 choclos',
      '500g habas verdes',
      '4 papas',
      '250g queso fresco',
      'Ají amarillo',
      'Sal'
    ],
    time: '40m',
    difficulty: 'Fácil',
    img: 'https://i.ytimg.com/vi/ydESLqRFg7g/maxresdefault.jpg',
    steps: [
      'Cocinar los choclos en agua con sal hasta que estén tiernos',
      'Cocinar las habas en agua hirviendo con sal',
      'No sobre cocinar las habas para que mantengan su color verde',
      'Cocinar las papas con piel hasta que estén suaves',
      'Preparar una llajua o sarsa con ají amarillo',
      'Pelar las papas una vez cocidas',
      'Cortar el queso fresco en lonchas',
      'Servir todo caliente en un plato',
      'Colocar el choclo, habas, papas y queso juntos',
      'Acompañar con la llajua al lado',
      'Es un plato vegetariano típico de La Paz',
      'Perfecto para días de ayuno o cuaresma'
    ]
  },
  {
    id: 19,
    title: 'Mocochinchi',
    section: 'postres',
    ingredients: ['5 duraznos secos', '1 litro de agua', '1 rama de canela', 'Clavos de olor', 'Azúcar al gusto'],
    time: '2h',
    difficulty: 'Fácil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mocochinchi_boliviano.jpg/1200px-Mocochinchi_boliviano.jpg',
    steps: [
      'Lavar bien los duraznos secos',
      'Hervir en agua con canela y clavo por 1 hora',
      'Agregar azúcar al gusto y dejar hervir 30 minutos más',
      'Dejar enfriar y servir con hielo'
    ]
  },
  {
    id: 20,
    title: 'Leche Asada',
    section: 'postres',
    ingredients: ['1 litro de leche', '4 huevos', '1 taza de azúcar', '1 cucharadita de vainilla'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://cdn0.recetasgratis.net/es/posts/6/0/5/leche_asada_con_leche_condensada_77506_600.jpg',
    steps: [
      'Batir huevos con azúcar y vainilla',
      'Agregar leche y mezclar bien',
      'Verter en moldes individuales',
      'Hornear a baño maría 45 minutos a 180°C hasta dorar la superficie'
    ]
  },
  {
    id: 21,
    title: 'Arroz con Leche',
    section: 'postres',
    ingredients: ['1 taza de arroz', '1 litro de leche', '1 rama de canela', 'Azúcar al gusto', 'Pasas (opcional)'],
    time: '1h 20m',
    difficulty: 'Fácil',
    img: 'https://cdn0.recetasgratis.net/es/posts/6/0/5/leche_asada_con_leche_condensada_77506_600.jpg',
    steps: [
      'Cocinar el arroz con agua y canela hasta que esté blando',
      'Agregar leche y azúcar',
      'Cocinar a fuego lento hasta espesar',
      'Añadir pasas y servir frío o caliente'
    ]
  },
  {
    id: 22,
    title: 'Buñuelos',
    section: 'postres',
    ingredients: ['2 tazas de harina', '2 huevos', '1 cucharada de levadura', 'Leche', 'Aceite para freír', 'Miel o azúcar para servir'],
    time: '1h',
    difficulty: 'Media',
    img: 'https://pxcdn.eldeber.com.bo/eldeber/82319/092025/1757272287848.webp?cw=1200&ch=675&extw=jpg',
    steps: [
      'Disolver la levadura en leche tibia',
      'Agregar huevos y harina hasta formar una masa suave',
      'Dejar reposar 30 minutos',
      'Freír cucharadas de masa en aceite caliente',
      'Servir con miel o azúcar espolvoreada'
    ]
  },
  

  {
    id: 24,
    title: 'Tawa Tawas',
    section: 'postres',
    ingredients: ['2 tazas de harina', '2 huevos', '1 cucharada de manteca', '1 pizca de sal', 'Miel o azúcar impalpable'],
    time: '45m',
    difficulty: 'Fácil',
    img: 'https://www.opinion.com.bo/media/opinion/images/2024/11/02/2024110217144567508.jpg',
    steps: [
      'Mezclar harina, manteca, sal y huevos',
      'Amasar hasta obtener una masa suave',
      'Estirar y cortar en rombos',
      'Freír hasta dorar y servir con miel o azúcar impalpable'
    ]
  },
  {
    id: 25,
    title: 'Sonso de Yuca Dulce',
    section: 'postres',
    ingredients: ['500g de yuca cocida', '100g de queso rallado', '2 cucharadas de azúcar', '1 huevo'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkYYHEFCEKT3QgutBNcjQ-lMspeZKkv9xIQ&s',
    steps: [
      'Hacer puré con la yuca cocida',
      'Agregar el queso, azúcar y huevo',
      'Formar cilindros y hornear a 180°C por 20 minutos',
      'Servir caliente'
    ]
  },
  {
    id: 26,
    title: 'Masitas Dulces',
    section: 'postres',
    ingredients: ['3 tazas de harina', '1 taza de manteca', '1 taza de azúcar', '1 huevo', 'Vainilla al gusto'],
    time: '1h',
    difficulty: 'Fácil',
    img:'https://azafranbolivia.com/wp-content/uploads/2023/03/maicillos-bolivia-masitas-origen-historia-ingredientes.jpg',
    steps: [
      'Batir manteca con azúcar y huevo',
      'Agregar harina y vainilla hasta formar masa',
      'Cortar figuras y hornear 20 minutos a 180°C',
      'Enfriar y servir'
    ]
  },
  {
    id: 27,
    title: 'Alfajores de Maicena',
    section: 'postres',
    ingredients: ['2 tazas de maicena', '1 taza de harina', '1 taza de mantequilla', '1 taza de azúcar glas', 'Dulce de leche'],
    time: '1h',
    difficulty: 'Media',
    img: 'https://www.recetasbolivianas.com/wp-content/uploads/alfajores-maicena.jpg',
    steps: [
      'Mezclar mantequilla, azúcar, maicena y harina',
      'Formar una masa suave y cortar círculos',
      'Hornear 15 minutos a 180°C',
      'Rellenar con dulce de leche y unir las tapas'
    ]
  },
  {
    id: 28,
    title: 'Quesillo de Leche',
    section: 'postres',
    ingredients: ['1 litro de leche', '1 taza de azúcar', '4 huevos', 'Caramelo líquido'],
    time: '1h',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yI-vkwaz7YbJFUfVpfYFy_NqLK7xOHii8g&s',
    steps: [
      'Batir huevos con azúcar y leche',
      'Verter en molde acaramelado',
      'Hornear a baño maría 45 minutos',
      'Dejar enfriar y desmoldar'
    ]
  },

  // 🥗 ENSALADAS BOLIVIANAS
  {
    id: 29,
    title: 'Ensalada de Tomate y Queso',
    section: 'ensaladas',
    ingredients: ['2 tomates', '100g de queso fresco', 'Aceite', 'Sal', 'Orégano'],
    time: '15m',
    difficulty: 'Fácil',
    img :'https://i0.wp.com/cocineando.com/wp-content/uploads/2019/03/receta-de-ensalada-de-tomate-y-queso.jpg?fit=1400%2C800&ssl=1',
    steps: [
      'Cortar los tomates y el queso en rodajas',
      'Aliñar con aceite, sal y orégano',
      'Servir fresca'
    ]
  },

  {
    id: 31,
    title: 'Ensalada de Palta (Aguacate)',
    section: 'ensaladas',
    ingredients: ['2 paltas maduras', '1 tomate', '1 cebolla', 'Sal', 'Limón', 'Aceite'],
    time: '15m',
    difficulty: 'Fácil',
    img: 'https://i.ytimg.com/vi/FeoTxb1plKs/maxresdefault.jpg',
    steps: [
      'Pelar las paltas y cortarlas en cubos',
      'Agregar el tomate y la cebolla picada',
      'Aliñar con sal, limón y aceite',
      'Mezclar suavemente y servir'
    ]
  },
  {
    id: 32,
    title: 'Ensalada de Papa con Huevo',
    section: 'ensaladas',
    ingredients: ['4 papas cocidas', '2 huevos duros', 'Cebolla', 'Mayonesa', 'Sal y pimienta'],
    time: '20m',
    difficulty: 'Fácil',
    img: 'https://i.ytimg.com/vi/5J3TpB_qihI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD7rLZrvH2tozhAQlZBLEJUqY-mQ',
    steps: [
      'Cortar las papas y los huevos en rodajas',
      'Agregar cebolla picada y mayonesa',
      'Mezclar y sazonar con sal y pimienta',
      'Servir fría'
    ]
  },
  {
    id: 33,
    title: 'Ensalada de Remolacha',
    section: 'ensaladas',
    ingredients: ['2 remolachas cocidas', '1 zanahoria', '1 papa', 'Vinagre', 'Sal', 'Aceite'],
    time: '30m',
    difficulty: 'Fácil',
    img: 'https://recetas.encolombia.com/wp-content/uploads/2015/06/Ensalada-de-Remolacha.jpg',
    steps: [
      'Cocinar y cortar las verduras en cubos',
      'Aliñar con vinagre, aceite y sal',
      'Mezclar bien y servir fría'
    ]
  },
  {
    id: 34,
    title: 'Ensalada de Repollo con Zanahoria',
    section: 'ensaladas',
    ingredients: ['1/2 repollo', '1 zanahoria', 'Mayonesa', 'Sal', 'Vinagre'],
    time: '20m',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYJ9tSjwGHcB7kUCsStKTCwXj9kw36eb9EQ&s',
    steps: [
      'Rallar el repollo y la zanahoria',
      'Agregar mayonesa y un toque de vinagre',
      'Sazonar y mezclar bien'
    ]
  },
  {
    id: 35,
    title: 'Ensalada de Lechuga y Tomate',
    section: 'ensaladas',
    ingredients: ['1 lechuga', '2 tomates', 'Sal', 'Aceite', 'Limón'],
    time: '10m',
    difficulty: 'Fácil',
    img :'https://enrilemoine.com/wp-content/uploads/2013/08/Ensalada-siete-sabores-SAVOIR-FAIRE-by-enrilemoine-3.jpg',
    steps: [
      'Lavar la lechuga y cortar los tomates en rodajas',
      'Aliñar con aceite, sal y limón',
      'Servir fresca'
    ]
  },
  {
    id: 36,
    title: 'Ensalada Mixta Boliviana',
    section: 'ensaladas',
    ingredients: ['Papa cocida', 'Remolacha', 'Zanahoria', 'Huevo duro', 'Arvejas', 'Mayonesa'],
    time: '25m',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lzZxerTgfClN8qOBWBMzwf-i4aETXyHW7Q&s',
    steps: [
      'Cocer todas las verduras y cortarlas en cubos',
      'Agregar huevo picado y arvejas cocidas',
      'Mezclar con mayonesa y servir'
    ]
  },
  {
    id: 37,
    title: 'Ensalada de Palmito',
    section: 'ensaladas',
    ingredients: ['Palmitos en rodajas', 'Tomate', 'Lechuga', 'Aceite', 'Limón', 'Sal'],
    time: '15m',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfODZ-hQMerQoGyXK2ihHOPYIc6HsSQnKkQQ&s',
    steps: [
      'Cortar los palmitos y el tomate',
      'Agregar hojas de lechuga',
      'Aliñar con aceite, limón y sal'
    ]
  },
  {
    id: 38,
    title: 'Ensalada de Quinua Real',
    section: 'ensaladas',
    ingredients: ['1 taza de quinua real cocida', 'Tomate', 'Cebolla', 'Aceite de oliva', 'Perejil', 'Limón'],
    time: '30m',
    difficulty: 'Media',
    img: 'https://cdn.bolivia.com/gastronomia/2013/03/11/ensalada-de-quinua-y-champinones-3189.jpg',
    steps: [
      'Cocinar la quinua y dejar enfriar',
      'Agregar las verduras picadas',
      'Aliñar con aceite, limón y sal'
    ]
  },
  {
    id: 39,
    title: 'Ensalada de Frutas Tropicales',
    section: 'ensaladas',
    ingredients: ['Papaya', 'Banana', 'Piña', 'Manzana', 'Jugo de naranja', 'Miel'],
    time: '15m',
    difficulty: 'Fácil',
    img: 'https://libbys.es/wordpress/wp-content/uploads/2015/06/ensalada-de-frutas.jpg',
    steps: [
      'Cortar las frutas en cubos',
      'Mezclar con miel y jugo de naranja',
      'Refrigerar antes de servir'
    ]
  },
  {
    id: 40,
    title: 'Ensalada de Tarwi',
    section: 'ensaladas',
    ingredients: ['1 taza de tarwi cocido', 'Tomate', 'Cebolla', 'Aceite', 'Limón', 'Sal'],
    time: '25m',
    difficulty: 'Media',
    img: 'https://img-global.cpcdn.com/recipes/1c6e32fa625e2bf0/1200x630cq80/photo.jpg',
    steps: [
      'Cocinar el tarwi y enjuagar para quitar el amargor',
      'Agregar tomate y cebolla picada',
      'Aliñar con aceite, limón y sal'
    ]
  },

  // 🍛 RECETAS BOLIVIANAS (PLATOS FUERTES)




  {
    id: 47,
    title: 'Keperí',
    section: 'bolivianas',
    ingredients: ['Costillas de res', 'Cebolla', 'Tomate', 'Pimienta', 'Comino', 'Yuca cocida'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Keper%C3%AD.jpg',
    steps: [
      'Cocinar las costillas con condimentos',
      'Añadir cebolla y tomate para hacer una salsa',
      'Servir con yuca cocida o frita'
    ]
  },
  {
    id: 48,
    title: 'Sajta de Pollo',
    section: 'bolivianas',
    ingredients: ['Pollo', 'Papas', 'Ají amarillo', 'Cebolla', 'Huevo duro', 'Arvejas'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkU4fhJOb-sqQQYRsXArAEcndOMFPwvy5Iw&s',
    steps: [
      'Hervir el pollo con sal y desmenuzarlo',
      'Preparar una salsa de ají con cebolla',
      'Agregar el pollo y cocinar 10 minutos',
      'Servir con papa cocida y huevo duro'
    ]
  },
  {
    id: 49,
    title: 'Anticuchos',
    section: 'bolivianas',
    ingredients: ['500g corazón de res', 'Ají colorado', 'Ajo', 'Comino', 'Sal', 'Papas cocidas'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwsi9fmJRJBs6k3niMFPJekB557MaCEErdQ&s',
    steps: [
      'Cortar el corazón en trozos y marinar con ají, ajo y comino',
      'Ensamblar en brochetas y asar al carbón',
      'Servir con papas cocidas y salsa picante'
    ]
  },
  {
    id: 50,
    title: 'Empanadas de Queso',
    section: 'postres',
    ingredients: ['2 tazas de harina', '100g de queso rallado', '1 huevo', 'Leche', 'Azúcar', 'Aceite para freír'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://cocinachilena.cl/wp-content/uploads/2019/05/empanadas-queso-2-1-scaled.jpg',
    steps: [
      'Preparar la masa con harina, leche y huevo',
      'Rellenar con queso y azúcar',
      'Freír hasta dorar y servir calientes'
    ]
  },
  {
    id: 51,
    title: 'Sopa de Quinua',
    section: 'bolivianas',
    ingredients: ['1 taza de quinua', 'Carne de res', 'Papas', 'Zanahoria', 'Cebolla', 'Hierbas'],
    time: '1h 30m',
    difficulty: 'Fácil',
    img: 'https://cdn.bolivia.com/gastronomia/2015/03/09/sopa-de-quinua-3719.jpg',
    steps: [
      'Cocinar la carne con verduras',
      'Agregar la quinua lavada y cocinar hasta ablandar',
      'Servir caliente con perejil'
    ]
  },

  {
    id: 53,
    title: 'Sopa de Fideo',
    section: 'bolivianas',
    ingredients: ['Fideos delgados', 'Carne de pollo o res', 'Papas', 'Zanahoria', 'Cebolla', 'Ajo'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/sopa-de-fideo-con-vegetales/sopadefideo1260x700.jpg',
    steps: [
      'Hervir la carne con verduras',
      'Agregar los fideos y cocinar hasta que estén suaves',
      'Servir con perejil'
    ]
  },
  {
    id: 54,
    title: 'Locro de Gallina',
    section: 'bolivianas',
    ingredients: ['Gallina criolla', 'Arroz', 'Papa', 'Cebolla', 'Ajo', 'Ají colorado'],
    time: '2h',
    difficulty: 'Media',
    img: 'https://i.pinimg.com/736x/91/8f/80/918f806ca0f746786a4568986e284eb5.jpg',
    steps: [
      'Hervir la gallina con verduras y condimentos',
      'Agregar arroz y ají colorado',
      'Cocinar hasta espesar y servir caliente'
    ]
  },
  {
    id: 55,
    title: 'Choclo con Queso',
    section: 'bolivianas',
    ingredients: ['Choclos tiernos', 'Queso fresco', 'Sal', 'Mantequilla'],
    time: '45m',
    difficulty: 'Fácil',
    img: 'https://www.opinion.com.bo/media/opinion/images/2016/02/03/2016S8306.jpg',
    steps: [
      'Cocer los choclos en agua con sal',
      'Servir calientes con queso fresco y mantequilla'
    ]
  },
  {
    id: 56,
    title: 'Lawas de Chuño',
    section: 'bolivianas',
    ingredients: ['Chuño molido', 'Carne de res', 'Cebolla', 'Ají amarillo', 'Papas'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolCcIevuBsWrilC4cCCmh8YP2W3KdECpnrg&s',
    steps: [
      'Cocinar la carne con cebolla y ají',
      'Agregar chuño molido disuelto en agua',
      'Cocinar hasta obtener una textura cremosa'
    ]
  },
  {
    id: 57,
    title: 'Thimpu Paceño',
    section: 'bolivianas',
    ingredients: ['Carne de cordero', 'Papas', 'Chuño', 'Arroz', 'Ají amarillo'],
    time: '2h',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_A9ewAEKbYjxlYeZK8baH99KjAi83gShRQQ&s',
    steps: [
      'Hervir el cordero con sal y ají amarillo',
      'Agregar papas y chuño',
      'Servir con arroz y llajwa'
    ]
  },
  {
    id: 58,
    title: 'Charquecán',
    section: 'bolivianas',
    ingredients: ['Charque', 'Papa', 'Huevo frito', 'Maíz mote', 'Cebolla', 'Tomate'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://www.opinion.com.bo/media/opinion/images/2015/08/05/2015S6928.jpg',
    steps: [
      'Freír el charque hasta que esté crocante',
      'Servir con papas, mote y huevo frito',
      'Acompañar con ensalada'
    ]
  },

  {
    id: 60,
    title: 'Ranga Ranga',
    section: 'bolivianas',
    ingredients: ['Panza de res', 'Ají colorado', 'Papa', 'Arvejas', 'Ajo', 'Cebolla'],
    time: '2h',
    difficulty: 'Media',
    img: 'https://www.recetasbolivianas.com/wp-content/uploads/ranga-ranga.jpg',
    steps: [
      'Hervir la panza con ajo y cebolla',
      'Agregar ají colorado y papa',
      'Cocinar hasta espesar y servir con arroz'
    ]
  },
  {
    id: 61,
    title: 'Sopa de Lentejas',
    section: 'bolivianas',
    ingredients: ['1 taza de lentejas', 'Cebolla', 'Tomate', 'Papa', 'Zanahoria', 'Comino'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://cdn.bolivia.com/gastronomia/2018/11/19/sopa-de-lentejas-3127.jpg',
    steps: [
      'Cocinar las lentejas con agua y verduras',
      'Agregar condimentos y papa',
      'Servir caliente'
    ]
  },

  {
    id: 63,
    title: 'Sopa de Acelga',
    section: 'ensaladas',
    ingredients: ['Hojas de acelga', 'Papa', 'Cebolla', 'Ajo', 'Leche', 'Sal'],
    time: '40m',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzyrLWvLNpaMylPSunXZ_vzNg-OhvWRSPjw&s',
    steps: [
      'Saltear cebolla y ajo',
      'Agregar papa y acelga picada',
      'Añadir leche y cocinar hasta ablandar'
    ]
  },
  {
    id: 64,
    title: 'Yuca con Queso',
    section: 'bolivianas',
    ingredients: ['Yuca cocida', 'Queso fresco', 'Mantequilla', 'Sal'],
    time: '40m',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgYKPdEBbA-6xBKUf6vSjqYkpq0ol7dqh_g&s',
    steps: [
      'Cocer la yuca en agua con sal',
      'Servir caliente con queso fresco y mantequilla derretida'
    ]
  },
  {
    id: 65,
    title: 'Sopa de Pollo',
    section: 'bolivianas',
    ingredients: ['Pollo', 'Papa', 'Fideo', 'Cebolla', 'Zanahoria', 'Perejil'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LK-sdHN5P_FIXmrMek_D4ZlTgJcRX15EHQ&s',
    steps: [
      'Cocinar el pollo con verduras',
      'Agregar fideos y sazonar al gusto',
      'Servir caliente con perejil'
    ]
  },
  {
    id: 66,
    title: 'Falso Conejo',
    section: 'bolivianas',
    ingredients: ['Carne de res', 'Ají colorado', 'Pan rallado', 'Papa', 'Arroz'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://recetasbolivia.com/wp-content/uploads/falso-conejo-boliviano.webp',
    steps: [
      'Empanizar la carne y freírla',
      'Preparar salsa de ají y verter sobre la carne',
      'Servir con papa y arroz'
    ]
  },
  {
    id: 67,
    title: 'Kjaras',
    section: 'bolivianas',
    ingredients: ['Carne de cerdo', 'Chorizo', 'Yuca cocida', 'Llajwa', 'Mote'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgO3fdLxbAhrecAYKXP9lwV_LKUUD6s3qcQ&s',
    steps: [
      'Asar la carne y el chorizo al carbón',
      'Servir con yuca, mote y llajwa'
    ]
  },
  {
    id: 68,
    title: 'Majadito Batido',
    section: 'bolivianas',
    ingredients: ['Arroz', 'Charque molido', 'Cebolla', 'Tomate', 'Plátano frito'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnGLMkLQCzhrsOAdkXoFWK6ZwcXet_jf6yQfd4eDvApqf-NlpGKQRv9122hqAw2l1iLrD882a67S6g496nWntlWKANoGI-SPPQoEzmeT4QHo_bz1cctGc931MUXjhBDXu34HlNw4mv8yUGnQT3LWYQudeGYq0BbKdHLQixXoRgiq49atw5_gVTWc9_/s1600/majadito-boliviano.jpg',
    steps: [
      'Freír el charque con cebolla y tomate',
      'Agregar arroz cocido y mezclar bien',
      'Servir con plátano frito y huevo'
    ]
  },
  {
    id: 69,
    title: 'Sopa de Trigo',
    section: 'bolivianas',
    ingredients: ['Trigo pelado', 'Carne de res', 'Papa', 'Zanahoria', 'Cebolla'],
    time: '1h 30m',
    difficulty: 'Fácil',
    img: 'https://www.sindanorganic.com.bo/wp-content/uploads/2013/12/chaque-de-trigo1.jpg',
    steps: [
      'Hervir el trigo y la carne',
      'Agregar verduras y cocinar hasta ablandar',
      'Servir caliente'
    ]
  },
  {
    id: 70,
    title: 'Pescado Frito con Arroz',
    section: 'bolivianas',
    ingredients: ['Pescado', 'Harina', 'Limón', 'Aceite', 'Arroz cocido', 'Ensalada'],
    time: '1h',
    difficulty: 'Fácil',
    img: 'https://cdn.correodelsur.com/img/contents/images_980/2021/04/02/70caf11f-bbe0-442a-98d5-95670eda910d.jpg',
    steps: [
      'Sazonar el pescado con limón y sal',
      'Enharinar y freír hasta dorar',
      'Servir con arroz y ensalada'
    ]
  },
  {
    id: 71,
    title: 'Sopa de Camarones',
    section: 'bolivianas',
    ingredients: ['Camarones', 'Papa', 'Ají amarillo', 'Cebolla', 'Ajo'],
    time: '1h 30m',
    difficulty: 'Media',
    img: 'https://i.ytimg.com/vi/1qKNX0gEcFU/maxresdefault.jpg',
    steps: [
      'Saltear los camarones con ajo y cebolla',
      'Agregar agua, papa y ají amarillo',
      'Cocinar hasta espesar y servir'
    ]
  },
  {
    id: 72,
    title: 'Yapakana',
    section: 'bolivianas',
    ingredients: ['Gallina', 'Papa', 'Arroz', 'Ají amarillo', 'Cebolla', 'Ajo'],
    time: '1h 45m',
    difficulty: 'Media',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPA9_vdknMzVF8R90TOh-zyh19VtW1wXX0XQ&s',
    steps: [
      'Cocinar la gallina con verduras y condimentos',
      'Agregar papa y ají amarillo',
      'Servir con arroz blanco'
    ]
  },
  {
    id: 73,
    title: 'Patasca',
    section: 'bolivianas',
    ingredients: ['Carne de cerdo', 'Maíz pelado', 'Cebolla', 'Ajo', 'Comino', 'Ají colorado'],
    time: '3h',
    difficulty: 'Alta',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJZ82rH2pGUVw_mvwYvDC-ixTzmU3pJfAPQ&s',
    steps: [
      'Cocer el maíz pelado hasta ablandar',
      'Agregar carne y condimentos',
      'Cocinar a fuego lento hasta espesar'
    ]
  },

{
  id: 74,
  title: 'Empanadas Tucumanas',
  section: 'bolivianas',
  ingredients: ['500g carne picada', '3 cebollas', 'Pimentón', 'Comino', 'Masa para empanadas', 'Aceitunas', 'Huevo duro'],
  time: '1h 30m',
  difficulty: 'Media',
  img: 'https://img-global.cpcdn.com/recipes/recipes_167431_v1428174826_receta_foto_00167431-yk6i8kmikz6cpfhsuzta/1200x630cq80/photo.jpg',
  steps: [
    'Preparar un ahogado con carne, cebolla y condimentos',
    'Dejar enfriar el relleno y agregar huevo y aceitunas',
    'Rellenar la masa y freír en abundante aceite hasta dorar'
  ]
},
{
  id: 77,
  title: 'Sopa de Habas',
  section: 'bolivianas',
  ingredients: ['1 taza de habas peladas', 'Papa', 'Cebolla', 'Ajo', 'Comino', 'Sal'],
  time: '1h',
  difficulty: 'Fácil',
  img: 'https://peopleenespanol.com/thmb/BZRFDjMOmTs2VUe2xXCRyZkiMBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21170edc-5d9f-4ebd-a698-7a2933102c46-8487b75c161a40ec920b4c43ac4a454a.jpg',
  steps: [
    'Hervir las habas con papa en agua con sal',
    'Agregar un sofrito de cebolla, ajo y comino',
    'Cocinar hasta que espese y servir caliente'
  ]
},


{
  id: 81,
  title: 'Chuflay',
  section: 'postres',
  ingredients: ['1 medida de singani', '2 medidas de ginger ale', 'Rodaja de limón', 'Hielo'],
  time: '5m',
  difficulty: 'Fácil',
  img: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Chuflay%2C_%C2%A9_Christian_Eugenio.jpg',
  steps: [
    'Llenar un vaso con hielo',
    'Agregar singani y completar con ginger ale',
    'Decorar con rodaja de limón'
  ]
},
{
  id: 82,
  title: 'Api Morado',
  section: 'postres',
  ingredients: ['2 tazas de maíz morado', 'Azúcar', 'Canela', 'Clavo de olor', 'Cáscara de naranja'],
  time: '1h',
  difficulty: 'Media',
  img: 'https://thumbs.dreamstime.com/b/la-bebida-p%C3%BArpura-boliviana-del-ma%C3%ADz-llam%C3%B3-el-api-50718474.jpg',
  steps: [
    'Cocinar el maíz morado con especias hasta que espese',
    'Colar y agregar azúcar al gusto',
    'Servir caliente acompañado con pastel'
  ]
},
{
  id: 83,
  title: 'Pastel de Queso',
  section: 'postres',
  ingredients: ['2 tazas de harina', '200g queso rallado', '1 huevo', 'Aceite para freír', 'Azúcar impalpable'],
  time: '1h',
  difficulty: 'Fácil',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQ9m9lNZXChohmU4emqvYX3Q7In53jp_xkA&s',
  steps: [
    'Preparar una masa suave con harina, huevo y agua',
    'Rellenar con queso rallado',
    'Freír hasta que inflen y espolvorear con azúcar'
  ]
},
{
  id: 84,
  title: 'Tojorí',
  section: 'postres',
  ingredients: ['1 taza de maíz pelado', '2 litros de agua', 'Canela', 'Azúcar'],
  time: '1h 20m',
  difficulty: 'Fácil',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G1c6ZCp4GmK-EbMIxynSueMYgBsBu-_xyw&s',
  steps: [
    'Hervir el maíz hasta que reviente',
    'Agregar azúcar y canela al gusto',
    'Servir caliente'
  ]
},
{
  id: 85,
  title: 'Empanadas de Arroz',
  section: 'postres',
  ingredients: ['2 tazas de arroz cocido', '1 taza de queso rallado', '1 huevo', 'Aceite'],
  time: '45m',
  difficulty: 'Fácil',
  img: 'https://i.ytimg.com/vi/UJIRlYonMH0/maxresdefault.jpg',
  steps: [
    'Mezclar arroz con queso y huevo',
    'Formar empanadas pequeñas',
    'Freír hasta dorar y servir calientes'
  ]
},
{
  id: 86,
  title: 'Budín de Pan',
  section: 'postres',
  ingredients: ['4 panes duros', '1 litro de leche', '1 taza de azúcar', 'Pasas', 'Huevos', 'Canela'],
  time: '1h',
  difficulty: 'Fácil',
  img: 'https://cdn0.recetasgratis.net/es/posts/5/1/0/budin_de_pan_casero_52015_orig.jpg',
  steps: [
    'Remojar el pan en leche y azúcar',
    'Agregar huevos, pasas y canela',
    'Hornear 45 minutos a 180°C'
  ]
},
{
  id: 87,
  title: 'Empanadas Blanqueadas',
  section: 'postres',
  ingredients: ['Harina', 'Azúcar', 'Leche', 'Manteca', 'Canela'],
  time: '1h 15m',
  difficulty: 'Media',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjQJGUeF1_6rA4E8NN8j8pCXSasCQ0p49nw&s',
  steps: [
    'Preparar masa con harina, leche y manteca',
    'Rellenar con dulce o manjar',
    'Hornear y bañar con azúcar glas'
  ]
},
{
  id: 88,
  title: 'Queso Humacha',
  section: 'bolivianas',
  ingredients: ['100g habas', '100g queso fresco', 'Papa', 'Leche', 'Ají amarillo', 'Sal'],
  time: '1h',
  difficulty: 'Media',
  img: 'https://gastronomiabolivia.com/wp-content/uploads/Queso-Humacha-de-bolivia.jpg',
  steps: [
    'Hervir habas y papas',
    'Agregar leche con queso desmenuzado y ají amarillo',
    'Servir caliente con arroz'
  ]
},
{
  id: 89,
  title: 'Chajchu Cochabambino',
  section: 'bolivianas',
  ingredients: ['Carne de res', 'Papa', 'Cebolla', 'Tomate', 'Ají colorado', 'Huevo duro'],
  time: '1h 20m',
  difficulty: 'Media',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJTU-dAciPINbT4W8SwSkjZuUek-6G4VdMw&s',
  steps: [
    'Freír carne y preparar con ají colorado',
    'Acompañar con papa cocida, huevo y ensalada de cebolla y tomate'
  ]
},
{
  id: 92,
  title: 'Ensalada de Betarraga',
  section: 'ensaladas',
  ingredients: ['2 betarragas', '1 cebolla', 'Vinagre', 'Aceite', 'Sal'],
  time: '25m',
  difficulty: 'Fácil',
  img:'https://i.ytimg.com/vi/1N8Ie_BgpwQ/maxresdefault.jpg',
  steps: [
    'Hervir las betarragas y cortarlas en cubos',
    'Agregar cebolla picada, vinagre, aceite y sal'
  ]
},
{
  id: 93,
  title: 'Ensalada de Palmito',
  section: 'ensaladas',
  ingredients: ['1 frasco de palmito', 'Tomate', 'Lechuga', 'Aceite', 'Limón'],
  time: '15m',
  difficulty: 'Fácil',
  img: 'https://mesasanamx.com/wp-content/uploads/2022/08/ensalada-de-jitomate-con-palmito.png',
  steps: [
    'Cortar el palmito y el tomate en rodajas',
    'Servir sobre hojas de lechuga con aceite y limón'
  ]
},
{
  id: 95,
  title: 'Sopa de Arroz',
  section: 'bolivianas',
  ingredients: ['1 taza de arroz', 'Papa', 'Cebolla', 'Ajo', 'Caldo de pollo'],
  time: '50m',
  difficulty: 'Fácil',
  img: 'https://comedera.com/wp-content/uploads/sites/9/2019/11/sopa-de-arroz.jpg?w=500&h=467&crop=1',
  steps: [
    'Freír ajo y cebolla, agregar arroz y caldo',
    'Cocinar hasta que el arroz esté tierno'
  ]
},
{
  id: 96,
  title: 'Thimpu de Cordero',
  section: 'bolivianas',
  ingredients: ['1kg carne de cordero', 'Papa', 'Chuño', 'Ají amarillo', 'Comino', 'Sal'],
  time: '2h',
  difficulty: 'Media',
  img: 'https://www.cocina-boliviana.com/base/stock/Recipe/thimpu-de-cordero/thimpu-de-cordero_web.jpg',
  steps: [
    'Hervir la carne con especias',
    'Agregar papa y chuño cocidos',
    'Servir con ají amarillo molido'
  ]
},
{
  id: 97,
  title: 'Ensalada de Fideo Fría',
  section: 'ensaladas',
  ingredients: ['1 taza de fideo cocido', 'Zanahoria rallada', 'Arvejas', 'Mayonesa', 'Sal'],
  time: '25m',
  difficulty: 'Fácil',
  img: 'https://www.recetasbolivianas.com/wp-content/uploads/ensalada-fideo.jpg',
  steps: [
    'Cocer el fideo y dejar enfriar',
    'Mezclar con verduras y mayonesa',
    'Servir fría'
  ]
},
{
  id: 98,
  title: 'Sopa de Trigo',
  section: 'bolivianas',
  ingredients: ['1 taza de trigo', 'Carne de res', 'Papa', 'Zanahoria', 'Sal'],
  time: '1h 15m',
  difficulty: 'Fácil',
  img: 'https://www.recetasbolivianas.com/wp-content/uploads/sopa-trigo.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGd1P1zUtmF4lgmj-AvuXCKLDOSUxuSqXCA&s',
  steps: [
    'Hervir la carne con el trigo hasta ablandar',
    'Agregar verduras y cocinar hasta espesar'
  ]
},
{
  id: 99,
  title: 'Cazuela de Pollo',
  section: 'bolivianas',
  ingredients: ['1 pollo', 'Arroz', 'Papa', 'Zanahoria', 'Arvejas', 'Comino', 'Sal'],
  time: '1h 30m',
  difficulty: 'Media',
  img: 'https://www.recetasnestle.cl/sites/default/files/srh_recipes/c034e2c5ad786fba0b9c3a15ac15ce5c.jpg',
  steps: [
    'Cocer el pollo con condimentos',
    'Agregar arroz y verduras',
    'Cocinar hasta que espese y servir caliente'
  ]
},
{
  id: 100,
  title: 'Majao',
  section: 'bolivianas',
  ingredients: ['2 tazas de arroz', '1 pechuga de pollo', 'Cebolla', 'Ajo', 'Pimentón', 'Plátano frito'],
  time: '1h',
  difficulty: 'Fácil',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_s6EKg8_tU5oQan7YsOO9MBJp_uV3jJmKg&s',
  steps: [
    'Cocer el arroz y reservar',
    'Preparar un ahogado con cebolla, ajo y pimentón',
    'Agregar el pollo desmenuzado y el arroz',
    'Servir con plátano frito y huevo'
  ]
}
];

// Referencias a elementos del DOM
const resultsEl = document.getElementById('results');
const ingredientsInput = document.getElementById('ingredients');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// Función para obtener el emoji según la sección
function getEmojiForSection(section){
  const emojis = {
    'bolivianas': '🇧🇴',
    'postres': '🍰',
    'ensaladas': '🥗'
  };
  return emojis[section] || '🍽️';
}

// Función para renderizar las tarjetas de recetas
function renderCards(recipes){
  resultsEl.innerHTML = '';

  if(!recipes.length){
    resultsEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>No encontramos recetas</h3>
        <p>Intenta con otros ingredientes o explora nuestras categorías</p>
      </div>
    `;
    return;
  }

  recipes.forEach(r=>{
    const card = document.createElement('article');
    card.className='card';

    card.innerHTML = `
      <!-- ✅ Imagen de la receta -->
      <div class="card-image">
        <img src="${r.img}" alt="${escapeHtml(r.title)}" class="recipe-thumb">
      </div>

      <div class="card-content">
        <h4>${escapeHtml(r.title)}</h4>

        <div class="card-meta">
          <div>⏱️ ${escapeHtml(r.time)}</div>
          <div>📋 ${r.ingredients.slice(0,2).join(', ')}${r.ingredients.length>2?` +${r.ingredients.length-2}`:''}</div>
        </div>

        <div class="tags">
          <div class="tag">${getEmojiForSection(r.section)} ${r.section}</div>
          ${r.difficulty ? `<div class="tag">⭐ ${r.difficulty}</div>` : ''}
        </div>

        <button class="view-recipe-btn" onclick="openModal(${r.id})">
          👁️ Ver receta completa
        </button>
      </div>
    `;

    resultsEl.appendChild(card);
  });
}

function openModal(recipeId){
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;

  const stepsHTML = recipe.steps.map((step, idx) => `
    <li class="step-item">
      <div class="step-number">${idx + 1}</div>
      <p class="step-text">${escapeHtml(step)}</p>
    </li>
  `).join('');

  const ingredientsHTML = recipe.ingredients.map(ing => `
    <div class="ingredient-item">
      <span class="ingredient-bullet">✓</span>
      ${escapeHtml(ing)}
    </div>
  `).join('');

  modalBody.innerHTML = `
    <!-- ✅ Imagen real del modal -->
    <div class="modal-image">
      <img src="${recipe.img}" alt="${escapeHtml(recipe.title)}" class="modal-main-img">
      <div class="category-badge">
        ${getEmojiForSection(recipe.section)} ${recipe.section}
      </div>
    </div>

    <div class="modal-body">
      <h2 class="modal-title">${escapeHtml(recipe.title)}</h2>

      <div class="modal-meta">
        <div class="meta-item">⏱️ Tiempo: ${escapeHtml(recipe.time)}</div>
        ${recipe.difficulty ? `<div class="meta-item">⭐ Dificultad: ${escapeHtml(recipe.difficulty)}</div>` : ''}
      </div>

      <h3 class="section-title">🛒 Ingredientes</h3>
      <div class="ingredients-grid">
        ${ingredientsHTML}
      </div>

      <h3 class="section-title">👨‍🍳 Preparación</h3>
      <ol class="steps-list">
        ${stepsHTML}
      </ol>
    </div>

    <div class="modal-footer">
      <button class="modal-btn" onclick="copyRecipe(${recipeId})">📋 Copiar receta</button>
      <button class="modal-btn primary" onclick="closeModal()">✓ Entendido</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}


// Función para cerrar el modal
function closeModal(){
  modal.classList.remove('active');
  document.body.style.overflow = 'unset';
}

// Función para copiar la receta al portapapeles
function copyRecipe(recipeId){
  const recipe = RECIPES.find(r => r.id === recipeId);
  if(!recipe) return;

  const text = `${recipe.title}\n\nIngredientes:\n${recipe.ingredients.map(i => '• ' + i).join('\n')}\n\nPreparación:\n${recipe.steps.map((s, i) => `${i+1}. ${s}`).join('\n')}`;
  
  navigator.clipboard.writeText(text).then(() => {
    alert('¡Receta copiada al portapapeles! 📋');
  }).catch(() => {
    alert('No se pudo copiar. Intenta seleccionar el texto manualmente.');
  });
}

// Función para normalizar arrays de texto
function normalizeArray(arr){
  return arr.map(s=>s.trim().toLowerCase()).filter(Boolean);
}

// Función para escapar HTML y prevenir XSS
function escapeHtml(text){
  return String(text).replace(/[&<>"']/g, function(m){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m];
  });
}

// Función de búsqueda
function search(){
  const raw = ingredientsInput.value;
  const activeCategory = document.querySelector('.category-pill.active').dataset.section;
  const wanted = normalizeArray(raw.split(','));

  let filtered = RECIPES.filter(r=>{
    if(activeCategory !== 'all' && r.section !== activeCategory) return false;
    return true;
  }).map(r=>{
    const ing = normalizeArray(r.ingredients);
    const matched = wanted.filter(w=>ing.some(i=>i.toLowerCase().includes(w) || w.includes(i.toLowerCase())));
    return {...r, score: matched.length};
  });

  if(wanted.length && wanted.some(Boolean)){
    filtered = filtered.filter(r=>r.score>0).sort((a,b)=>b.score-a.score);
  }

  renderCards(filtered);
}

// Event listeners para las categorías
document.querySelectorAll('.category-pill').forEach(el=>{
  el.addEventListener('click', ()=>{
    document.querySelectorAll('.category-pill').forEach(x=>x.classList.remove('active'));
    el.classList.add('active');
    search();
  })
});

// Event listener para el botón de búsqueda
searchBtn.addEventListener('click', search);

// Event listener para el botón de limpiar
clearBtn.addEventListener('click', ()=>{
  ingredientsInput.value='';
  document.querySelectorAll('.category-pill').forEach(x=>x.classList.remove('active'));
  document.querySelector('.category-pill[data-section="all"]').classList.add('active');
  search();
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
  if(e.target === modal) closeModal();
});

// Renderizar todas las recetas al cargar la página
renderCards(RECIPES);