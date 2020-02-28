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

    it('should show randomList length', () => {
      const wrapper = shallow(<Random/>);

      expect(wrapper.find('#random-list-length').props().children).toEqual("Total object to be randomized: 0");
    });

    it('should render one randomize button', () => {
      const wrapper = shallow(<Random/>);

      expect(wrapper.find('#submit-random')).toHaveLength(1);
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
      const actualList = wrapper.state().randomList;

      expect(actualList).toHaveLength(1);
      expect(actualList[0]).toEqual(inputValue);
    });

    it('should reset input value', () => {
      const inputValue = 'ayam goreng';
      const mockInputEvent = {
        target: {
          value: inputValue,
        },
      };
      const wrapper = shallow(<Random/>);
      const inputComponent = wrapper.find('#input');

      inputComponent.simulate('change', mockInputEvent);
      wrapper.find('#submit').simulate('click');
      const actualInputValue = wrapper.state().input;

      expect(actualInputValue).toEqual('');
      expect(inputComponent.props().value).toEqual('');
    });

    it('should not add input value to randomList state when input is empty', () => {
      const inputValue = '';
      const mockInputEvent = {
        target: {
          value: inputValue,
        },
      };
      const wrapper = shallow(<Random/>);

      wrapper.find('#input').simulate('change', mockInputEvent);
      wrapper.find('#submit').simulate('click');
      const actualList = wrapper.state().randomList;

      expect(actualList).toHaveLength(0);
    });
  });

  describe('#randomize', () => {
    it('should set random result state with randomized random list', () => {
      const inputValue = 'ayam goreng';
      const mockInputEvent = {
        target: {
          value: inputValue,
        },
      };
      const wrapper = shallow(<Random/>);

      wrapper.find('#input').simulate('change', mockInputEvent);
      wrapper.find('#submit').simulate('click');
      wrapper.find('#submit-random').simulate('click');
      const actualResult = wrapper.state().randomResult;

      expect(actualResult).not.toEqual('');
    });

    it('should show randomized value to result text', () => {
      const inputValue = 'ayam goreng';
      const mockInputEvent = {
        target: {
          value: inputValue,
        },
      };
      const wrapper = shallow(<Random/>);

      wrapper.find('#input').simulate('change', mockInputEvent);
      wrapper.find('#submit').simulate('click');
      wrapper.find('#submit-random').simulate('click');
      const randomResult = wrapper.state().randomResult;

      expect(wrapper.find('#random-result').props().children).toEqual('RESULT: ' + randomResult);
    });

    it('should not change result when random list is empty', () => {
      const wrapper = shallow(<Random/>);
      wrapper.find('#submit-random').simulate('click');
      const randomResult = wrapper.state().randomResult;

      expect(randomResult).toEqual('');
    });
  });
});
