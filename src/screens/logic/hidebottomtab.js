import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export const getRouteName = ({route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  const tabVisibleFalseArr = [
    'Creatediscussion',
    'TagProducts',
    'ProductLink',
    'ProductDetail',
    'MakeupToEarn',
  ];

  if (tabVisibleFalseArr?.includes(routeName)) {
    return 'none';
  } else {
    return 'flex';
  }
};
