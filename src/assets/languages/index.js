
// import LocalizedStrings from 'react-native-localization';
// import ru from './russian'
// import en from './eng'
// import ko from './korean'

// const Strings = new LocalizedStrings({
//     en,ru,ko
// })


// export default Strings


import LocalizedStrings from 'react-native-localization';

const StringsOfLanguages = new LocalizedStrings({

    en: {
        siginout: 'Sign out',
        siginin: 'Sign in',
    },
    ko: {
        siginout: '로그아웃',
        siginin: '로그인',
    },
    ru: {
        siginout: 'выход',
        siginin: 'Войти',
    }
});

export default StringsOfLanguages;