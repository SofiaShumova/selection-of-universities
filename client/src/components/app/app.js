import React, { Component } from 'react';
import './app.css';
import UniversityCard from '../university-card';
import Checkbox from '../common/checkbox';
import University from '../../test-data/university';
import data from '../../test-data/select-list';
import Button from '../common/button/button';
import Input from '../common/input';
import Select from '../common/select/select';
import InputFile from '../common/input-file/input-file';
import Textarea from '../common/textarea/textarea';
import Slider from '../common/slider/slider';
import ProgressBar from '../common/progressbar/progressbar';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <UniversityCard university={University} />
        <Checkbox label={'Общежитие'} />
        <Button text={'Save Changes'} />
        <Input label={'First name'} placeholder={'input firstname...'} />
        <Select label={'Select university'} data={data} multiply={true} />
        <InputFile label={'Upload photo'} />
        <Textarea label={'Description'} />
        <Slider startLabel={'Criterion 1'} endLabel={'Criterion 2'} />
        <ProgressBar label="University 1" value={30} />
      </div>
    );
  }
}
