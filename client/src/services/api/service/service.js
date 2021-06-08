import BaseService from '../base-service';
export default class Service extends BaseService {
  getAllUniversity = async () => {
    return await this.getResourse(`/university/`);
  };
  addUniversity = async (university) => {
    return await this.addResourse('/university/', university);
  };
  updateUniversity = async (university) => {
    return await this.updateResourse(
      `/university/${university._id}`,
      university
    );
  };
  removeUniversity = async (university) => {
    return await this.deleteResourse(`/university/${university._id}`);
  };

  getAllCity = async () => {
    return await this.getResourse(`/city/`);
  };
  getAllType = async () => {
    return await this.getResourse(`/type/`);
  };
  getAllUser = async () => {
    return await this.getResourse(`/user/`);
  };
  getAllCriterion = async () => {
    return await this.getResourse(`/criterion/`);
  };
  getAllExpertReview = async () => {
    return await this.getResourse(`/expert-review/`);
  };
  getAllCategory = async () => {
    return await this.getResourse(`/category/`);
  };
  getAllProfession = async () => {
    return await this.getResourse(`/profession/`);
  };
  getAllDiscipline = async () => {
    return await this.getResourse(`/discipline/`);
  };
  getAllTrainingProgram = async () => {
    return await this.getResourse(`/training-program/`);
  };
  getAllLevelOfPreparation = async () => {
    return await this.getResourse(`/level-of-preparation/`);
  };
  getAllBasisOfLearning = async () => {
    return await this.getResourse(`/basis-of-learning/`);
  };
  getAllFormOfEducation = async () => {
    return await this.getResourse(`/form-of-education/`);
  };
  getAllRequirements = async () => {
    return await this.getResourse(`/admission-requirements/`);
  };
  createMethods = (tableName) => {
    tableName = `/${tableName}/`;
    const getAll = async () => await this.getResourse(tableName);
    const add = async (item) => await this.addResourse(tableName, item);
    const update = async (item) =>
      await this.updateResourse(`${tableName}${item._id}`, item);
    const remove = async (item) =>
      await this.deleteResourse(`${tableName}${item._id}`);
    return { getAll, add, update, remove };
  };

  createUser = async (user) => {
    return await this.addResourse('/registration/', user);
  };

  addExpertReview = async (assessment) => {
    return await this.addResourse('/expert-review', assessment);
  };
  getAvailableUniversity = async () => {
    return await this.getResourse(`/university/avalible`);
  };
  addAnalysis = async (id, data) => {
    return await this.addResourse(`/user/add-analysis/${id}`, data);
  };
}
