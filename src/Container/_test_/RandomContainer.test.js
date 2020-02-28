import {shallow} from 'enzyme/build'
import Random from "../Random.container";
import React from "react";

describe('Random', () => {

  describe('#render', () => {
    it('should render one text input', () => {
      const wrapper = shallow(<Random/>);

      expect(wrapper.find('#input')).toHaveLength(1);
    });

    it('should render one submit button', () => {
      const wrapper = shallow(<Random/>);

      expect(wrapper.find('#submit')).toHaveLength(1);
    });
  });

  describe('#onChange', () => {
    it('should update input state with value given', () => {
      const inputValue = 'ayam goreng';
      const mockInputEvent = {
         target: {
           value: inputValue,
         },
      };
      const wrapper = shallow(<Random/>);

      wrapper.find('#input').simulate('change', mockInputEvent);

      expect(wrapper.state().input).toEqual(inputValue);
    });
  });

  describe('#onClick', () => {
    it('should add input value to randomList state', () => {
      const inputValue = 'ayam goreng';
      const mockInputEvent = {
        target: {
          value: inputValue,
        },
      };
      const wrapper = shallow(<Random/>);

      wrapper.find('#input').simulate('change', mockInputEvent);
      wrapper.find('#submit').simulate('click');
      var actualList = wrapper.state().randomList;

      expect(actualList).toHaveLength(1);
      expect(actualList[0]).toEqual(inputValue);
    });
  });
});
