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
    { name: 'Бакалавриат' },
    { name: 'Специалитет' },
    { name: 'Магистратура' },
    { name: 'Аспирантура' },
  ];

  _disciplines = [
    { name: 'Русский язык' },
    { name: 'Математика' },
    { name: 'География' },
    { name: 'Биология' },
    { name: 'Физика' },
    { name: 'Информатика' },
    { name: 'Химия' },
  ];

  _formsEducation = [
    { name: 'Очная' },
    { name: 'Заочная' },
    { name: 'Дистанционная' },
    { name: 'Очно-заочная' },
  ];

  _typesUniversity = [
    { name: 'Государственный' },
    { name: 'Негосударственный' },
  ];

  _universities = [
    {
      _id: 123,
      image,
      name:
        'Рязанский государственный радиотехнический университет им. В.Ф. Уткина',
      description:
        'В настоящее время Университет занимает достойное место среди ведущих технических вузов страны в сфере подготовки конкурентоспособных специалистов в области радиоэлектроники, информационно-телекоммуникационных технологий, в том числе информационной безопасности. Стратегическая миссия РГРТУ - содействие динамичному развитию научно-технологического комплекса страны, обеспечение его конкурентоспособными специалистами с современным элитным высшим образованием и высококвалифицированными научными кадрами в области информационно-коммуникационных технологий и радиоэлектроники.',
    },
  ];

  getCities = () => {
    return this._cities;
  };

  getPrograms = () => {
    return this._programs;
  };

  getLevelsOfPreparation = () => {
    return this._levelsOfPreparation;
  };

  getFormsEducation = () => {
    return this._formsEducation;
  };

  getTypesUniversity = () => {
    return this._typesUniversity;
  };

  getDisciplines = () => {
    return this._disciplines;
  };

  getUniversities = () => {
    return this._universities;
  };
}
