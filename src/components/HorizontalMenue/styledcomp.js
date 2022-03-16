import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 35,
    height:100,

  },
  Item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 6,

    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    width:70,
    height:70,
    borderRadius:70
  },
  MainRow:{
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    marginTop:20,

    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18
  }
})

export default Styles