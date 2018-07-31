import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Badges from '../badges';

Enzyme.configure({ adapter: new Adapter() });

describe('<Badges />', () => {
  it('renders 1 <Badges /> component', () => {
    const component = shallow(<Badges />);
    expect(component).toHaveLength(1);
  });
});
