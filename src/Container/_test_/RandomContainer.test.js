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
});
