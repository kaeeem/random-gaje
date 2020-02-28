import {shallow} from 'enzyme/build'
import Random from "../Random.container";
import React from "react";

describe('Random', () => {

  describe('#render', () => {
    it('should render one text input', () => {
      const wrapper = shallow(<Random/>);

      expect(wrapper.find('#input')).toHaveLength(1);
    });
  });

  describe('#onChange', () => {
    it('should update the state with value given', () => {
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
});
