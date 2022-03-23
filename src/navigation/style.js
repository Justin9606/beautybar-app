import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },

  bottomBar: {
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  btnCircleUp: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 18,
    shadowColor: '#000',
    backgroundColor: '#E74779',
  },

  routnames: {
    marginTop: 2,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 10,
  },
});
