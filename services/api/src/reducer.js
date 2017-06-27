// @flow

import type { Action } from './actions';
import type { SiteGroupFile, Site } from './types';

export type State = { siteGroups?: SiteGroupFile, sites?: Array<Site> };

const reducer = (state: State = {}, action: Action): State => {
  switch (action.type) {
    case 'SET_SITE_GROUPS': {
      const { siteGroups } = action;
      return { ...state, siteGroups };
    }
    case 'SET_SITES': {
      const { sites } = action;
      console.log('SET_SITES', sites);
      return { ...state, sites };
    }
    default:
      return state;
  }
};

module.exports = reducer;
