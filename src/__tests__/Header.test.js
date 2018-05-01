import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from '../components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
	it('should match header snapshot', () => {
		const wrapper = shallow( <Header/> );

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});