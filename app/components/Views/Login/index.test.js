import React from 'react';
import { shallow } from 'enzyme';
import Login from './';
import configureMockStore from 'redux-mock-store';
import { ROPSTEN } from '../../../constants/network';

const mockStore = configureMockStore();

describe('Login', () => {
	it('should render correctly', () => {
		const initialState = {
			engine: {
				backgroundState: {
					AccountTrackerController: {
						accounts: { '0x2': { balance: '0' } }
					},
					NetworkController: {
						provider: {
							type: ROPSTEN
						}
					},
					TokensController: {
						tokens: []
					},
					PreferencesController: {}
				}
			},
			user: {
				passwordSet: true
			}
		};

		const wrapper = shallow(<Login />, {
			context: { store: mockStore(initialState) }
		});
		expect(wrapper).toMatchSnapshot();
	});
});
