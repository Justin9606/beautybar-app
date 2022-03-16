import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',



  },
  Item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    margin: 20,
    backgroundColor: '#fff',
    width: 174,
    height: 220,
    borderRadius: 10,

  },
  text: {
    marginLeft: 10,
    fontSize: 12,
    color: '#323234'
  },
  textdes: {
    marginTop: 2,
    marginLeft: 10,
    fontSize: 12,
    color: '#323234'
  },
  price: {
    fontSize: 14,
    color: '#323234'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 10

  },

  icon: {
    alignSelf: 'center',
    marginBottom: 5
  }
})

export default Styles