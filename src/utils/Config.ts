export const Config = {
  site_name: 'Cativos A Verdade',
  title: 'Cativos A Verdade',
  description: 'A beleza ja salvou o mundo',
  url: 'https://CativosAVerdade.com',
  locale: 'pt',
  author: 'Alvaro, Marciel ...',
  pagination_size: 50,
  // involved = tradutores, revisores, co-autores, financiadores
  post_fields: [
    'title',
    'description',
    'date', // Data de publicação
    'image',
    'tags',
    'slug',
    'author',
    'involved', // Tradutores, revisores, co-autores, financiadores
    'source_entity', // Nome da instituição
    'source_entity_url', // Link para a instituição
    'source_text', // Descrição de onde foi tirado
    'source_url', // Link para o material
    'source_donate_url', // Link para a página de doação
  ],
};
