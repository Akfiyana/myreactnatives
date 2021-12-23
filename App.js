import React, { Component } from 'react';
import {View, Text } from 'react-native';

class App extends Component {
  render (){
    return(
      <View style={{flex:1, borderWidth:4, borderColor:'#547ec9'}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'#f5f5f5', borderRightWidth:4, borderRightColor:'#e8c779'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#fff1cc', borderRightWidth:4, borderRightColor:'#7bb974'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#d0e9d5', borderRightWidth:4, borderRightColor:'#6998c1'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#d6e9fc', borderRightWidth:4, borderRightColor:'#cc7c7f'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#ffccca'}}>

          </View>

        </View>
        <View style={{flex:6,flexDirection:"row"}}>
          <View style={{flex:3,backgroundColor:'#f0006a', borderRightWidth:4, borderRightColor:'#bc850a', borderTopWidth:4, borderTopColor:'#ca0047'}}>

          </View>
          <View style={{flex:2,backgroundColor:'#ebc705', borderTopWidth:4, borderTopColor:'#c8a401'}}>
            
          </View>
        </View>
        <View style={{flex: 1, flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'#ffccca', borderRightWidth:4, borderRightColor:'#82aad1', borderTopWidth:4, borderTopColor:'#da7673'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#d6e9fc', borderRightWidth:4, borderRightColor:'#7bb974', borderTopWidth:4, borderTopColor:'#85acd2'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#d0e9d5', borderRightWidth:4, borderRightColor:'#ddba61', borderTopWidth:4, borderTopColor:'#90c58c'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#fff1cc', borderRightWidth:4, borderRightColor:'#949084', borderTopWidth:4, borderTopColor:'#ceb242'}}>

          </View>
          <View style={{flex:1,backgroundColor:'#f5f5f5',borderTopWidth:4, borderTopColor:'#ceb242'}}>
           

          </View>

        </View>
      </View>
    )
  }
}
  export default App;