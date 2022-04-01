import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: '55%',
    resizeMode: 'contain',
  },
  title: {
    color: '#323234',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 59,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  subtitle: {
    color: '#7F7E83',
    fontSize: 14,
    marginTop: 16,
    width: 328,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
  },
  indicator_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: '#FFB6B6',
    marginHorizontal: 4,
    borderRadius: 8,
    opacity: 0.6,
  },
  footer: {
    marginTop: -100,
    justifyContent: 'space-between',
  },
  text: {
    color: '#B1B1B1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
  },
});

export default styles;
