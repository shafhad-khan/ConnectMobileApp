// import React from 'react';
// import { Text } from 'react-native';
// import Login from './src/containers/login/Login'
// import { Provider } from 'react-redux';
// import configureStore  from './src/store/Store';
// import GetOtpScreen from './src/containers/Otp/GetOtpScreen';
// const store = configureStore();

// const App = () => {
//   return (
//     <Provider store ={store}>
//       <GetOtpScreen/>

//     </Provider>

//   );
// }

// export default App;

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import UpperviewBG from './assets/images/Group2491.svg';

import {SwipeablePanel} from 'rn-swipeable-panel';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
];

export default App = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,

    // openLarge: true,
    // showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });

  const [username, SetuserName] = useState('Priyanka11');
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F7FCFF', opacity: 100}}>
      {/* // Uper View */}

      <View style={{flex: 2}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            // margin: 15,
            // marginTop: '40%',
            padding: 30,
           // backgroundColor: 'red',
          }}>
          
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            // margin: 15,
            //marginTop: 50,
            padding: 30,
            // marginBottom:60,
            
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginBottom: 30,
            }}>
            
            <Text style={{color: '#000000', fontSize: 18}}>
              Welcome to connect{' '}
              <Text style={{color: '#0070FC', opacity: 100}}>{username}!</Text>
            </Text>
          </View>
          <Text
            style={
              {
                //flex:2,
                //justifyContent: 'space-between',
                // margin: 15,
                //marginTop: -5,
              }
            }>
            You have access to the following locations. You can manage your
            locations in the “locations” option given in the navigation.
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            // flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginEnd: 15,
          }}>
          <UpperviewBG width={227} height={120} />
        </View>
      </View>

      {/* BottomView */}

      <View
        style={{
          flex: 1.3,
          //justifyContent: 'center',
          //alignItems: 'flex-end',
         // backgroundColor: 'red',
         
        }}>
        <SwipeablePanel
          barStyle={{backgroundColor: '#2F6EF329'}}
          style={{
            shadowOffset: {width: 0, height: 2},
            shadowColor: 'red',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 2,
            //width:50,
            //justifyContent:'flex-end'
            //alignItems:'center',
            //justifyContent: 'flex-end',
            //flexDirection:'row'
            //marginBottom:100
          }}
          //scrollViewProps={{backgroundColor:'red'}}
          
          {...panelProps}
          isActive={isPanelActive}>
            
            <View style={{alignItems:'center',justifyContent:'center'}}><Text>hello</Text>
            
            
            
            
            </View>
            
          {/* <FlatList
            data={[{ title: 'Title Text', key: 'item1' },{ title: 'Title Text', key: 'item2' }]}
            renderItem={({item}) => (
              <View style={{alignItems:'center',padding:10,backgroundColor:''}}>
                <Text>{item.key}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          /> */}
          <TouchableOpacity style={styles.VerifyButton}>
            <Text style={styles.VerifyButtonText}>CONTINUE</Text>
          </TouchableOpacity>
        </SwipeablePanel>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  VerifyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  VerifyButton: {
    width: '90%',
    borderRadius: 15,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: '50%',
    backgroundColor: 'rgba(14, 0, 113, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    top:200
  },
});
