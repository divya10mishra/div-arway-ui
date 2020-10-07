import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    madeFor: 'ARWAY SDK',
    app: 'Unity',
    version: '0.0.2',
    dwType: 'Download',
    dwUrl: 'https://developer.arway.app/usr/Unity_SDK-0.0.2.zip'
  },
  {
    id: uuid(),
    madeFor: 'ARWAY Mapping app',
    app: 'Android',
    version: '0.0.2',
    dwType: 'Google Play Store',
    dwUrl: 'https://play.google.com/store/apps/details?id=com.arway.mapper'
  }
];
