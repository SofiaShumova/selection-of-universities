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
      _id: '1',
      image,
      city: { _id: '1', name: 'Рязань' },
      type: { _id: '1', name: 'Государственный' },
      militaryDepartment: true,
      dormitory: false,
      name: 'Рязанский государственный радиотехнический университет им. В.Ф. Уткина',
      description:
        'В настоящее время Университет занимает достойное место среди ведущих технических вузов страны в сфере подготовки конкурентоспособных специалистов в области радиоэлектроники, информационно-телекоммуникационных технологий, в том числе информационной безопасности. Стратегическая миссия РГРТУ - содействие динамичному развитию научно-технологического комплекса страны, обеспечение его конкурентоспособными специалистами с современным элитным высшим образованием и высококвалифицированными научными кадрами в области информационно-коммуникационных технологий и радиоэлектроники.',
    },
    {
      _id: '2',
      image,
      city: { _id: '1', name: 'Рязань' },
      type: { _id: '1', name: 'Государственный' },
      militaryDepartment: false,
      dormitory: true,
      name: 'РГУ ИМЕНИ С.А. ЕСЕНИНА',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident perspiciatis voluptates velit in fuga nihil quos, sint dicta, asperiores aliquid optio tenetur officia nam harum eum veniam error earum!',
    },
    {
      _id: '3',
      image,
      type: { _id: '2', name: 'Негосударственный' },
      militaryDepartment: false,
      city: { _id: '1', name: 'Рязань' },
      dormitory: true,
      name: 'Рязанский государственный агротехнологический университет им. П.А. Костычева',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident perspiciatis voluptates velit in fuga nihil quos, sint dicta, asperiores aliquid optio tenetur officia nam harum eum veniam error earum!',
    },
    {
      _id: '4',
      image,
      type: { _id: '1', name: 'Государственный' },
      city: { _id: '1', name: 'Рязань' },
      militaryDepartment: true,
      dormitory: false,
      name: 'Академия права и управления Федеральной службы исполнения наказаний',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident perspiciatis voluptates velit in fuga nihil quos, sint dicta, asperiores aliquid optio tenetur officia nam harum eum veniam error earum!',
    },
    {
      _id: '5',
      image,
      city: { _id: '2', name: 'Москва' },
      type: { _id: '1', name: 'Государственный' },
      militaryDepartment: true,
      dormitory: true,
      name: 'Московский государственный технический университет им. Н.Э. Баумана',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident perspiciatis voluptates velit in fuga nihil quos, sint dicta, asperiores aliquid optio tenetur officia nam harum eum veniam error earum!',
    },
    {
      _id: '6',
      image,
      type: { _id: '1', name: 'Государственный' },
      city: { _id: '2', name: 'Москва' },
      militaryDepartment: false,
      dormitory: true,
      name: 'Российский государственный социальный университет',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo provident perspiciatis voluptates velit in fuga nihil quos, sint dicta, asperiores aliquid optio tenetur officia nam harum eum veniam error earum!',
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

  getAllCity = async () => {
    return this._cities;
  };

  getAllTrainingProgram = async () => {
    return this._programs;
  };

  getAllLevelOfPreparation = async () => {
    return this._levelsOfPreparation;
  };

  getAllFormOfEducation = async () => {
    return this._formsEducation;
  };

  getAllType = async () => {
    return this._typesUniversity;
  };

  getAllDiscipline = async () => {
    return this._disciplines;
  };

  getAllUniversity = async () => {
    return new Promise((res, rej) => {
      setTimeout(() => res(this._universities), 1000);
    });
  };

  getAllCategory = async () => {
    return new Promise((res, rej) => {
      setTimeout(() => res(this._categories), 1000);
    });
  };
}
