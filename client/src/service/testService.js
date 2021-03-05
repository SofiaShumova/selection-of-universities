import image from './uni.png';
export default class TestService {
  _cities = [
    { _id: '1', name: 'Рязань' },
    { _id: '2', name: 'Москва' },
  ];

  _programs = [
    { _id: '1', name: 'Радиотехника' },
    { _id: '2', name: 'Прикладная информатика' },
  ];

  _levelsOfPreparation = [
    { _id: '1', name: 'Бакалавриат' },
    { _id: '2', name: 'Специалитет' },
    { _id: '3', name: 'Магистратура' },
    { _id: '4', name: 'Аспирантура' },
  ];

  _disciplines = [
    { _id: '1', name: 'Русский язык' },
    { _id: '2', name: 'Математика' },
    { _id: '3', name: 'География' },
    { _id: '4', name: 'Биология' },
    { _id: '5', name: 'Физика' },
    { _id: '6', name: 'Информатика' },
    { _id: '7', name: 'Химия' },
  ];

  _formsEducation = [
    { _id: '1', name: 'Очная' },
    { _id: '2', name: 'Заочная' },
    { _id: '3', name: 'Дистанционная' },
    { _id: '4', name: 'Очно-заочная' },
  ];

  _typesUniversity = [
    { _id: '1', name: 'Государственный' },
    { _id: '2', name: 'Негосударственный' },
  ];

  _universities = [
    {
      _id: '123',
      image,
      name:
        'Рязанский государственный радиотехнический университет им. В.Ф. Уткина',
      description:
        'В настоящее время Университет занимает достойное место среди ведущих технических вузов страны в сфере подготовки конкурентоспособных специалистов в области радиоэлектроники, информационно-телекоммуникационных технологий, в том числе информационной безопасности. Стратегическая миссия РГРТУ - содействие динамичному развитию научно-технологического комплекса страны, обеспечение его конкурентоспособными специалистами с современным элитным высшим образованием и высококвалифицированными научными кадрами в области информационно-коммуникационных технологий и радиоэлектроники.',
    },
  ];

  _categories = [
    {
      _id: '1',
      name: 'Критерии образования',
      description: '',
      criterions: [
        { _id: '1', name: 'Качество образования', description: '' },
        { _id: '2', name: 'Сложность обучения', description: '' },
        { _id: '3', name: 'Преподавательский состав', description: '' },
      ],
    },
    {
      _id: '2',
      name: 'Статусные критерии',
      description: '',
      criterions: [
        { _id: '4', name: 'Статус', description: '' },
        { _id: '5', name: 'Рейтинг', description: '' },
        { _id: '6', name: 'Репутация', description: '' },
      ],
    },
    {
      _id: '3',
      name: 'Критерии поступления',
      description: '',
      criterions: [
        { _id: '7', name: 'Стоимость обучения', description: '' },
        {
          _id: '8',
          name: 'Сложность вступительных испытаний',
          description: '',
        },
      ],
    },
    {
      _id: '4',
      name: 'Критерии внеучебной деятельности',
      description: '',
      criterions: [
        { _id: '9', name: 'Конференции и олимпиады', description: '' },
      ],
    },
  ];

  getCities = async () => {
    return this._cities;
  };

  getPrograms = async () => {
    return this._programs;
  };

  getLevelsOfPreparation = async () => {
    return this._levelsOfPreparation;
  };

  getFormsEducation = async () => {
    return this._formsEducation;
  };

  getTypesUniversity = async () => {
    return this._typesUniversity;
  };

  getDisciplines = async () => {
    return this._disciplines;
  };

  getUniversities = async () => {
    return this._universities;
  };

  getCategories = async () => {
    return this._categories;
  };
}
