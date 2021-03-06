import React, { Component } from 'react'
import { 
  View, 
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'

const WIDTH = Dimensions.get('window').width

class Card extends Component {
  render() {
    return (
      <View style={{ width:WIDTH/2, height:121, justifyContent:'center', alignItems:'center',marginBottom:10}}>      

        <View style={{ width:'95%', height:94,backgroundColor:'white',borderRadius:13, backgroundColor:'skyblue',overflow:'hidden'}}>   
          <TouchableOpacity>
            <Image source={ this.props.img ? this.props.img : require('../img/machine_learning.jpg')} style={{width:'100%',height:'100%'}} />
          </TouchableOpacity>
        </View> 

        <TouchableOpacity>
          <Text style={{fontSize:14, color:'black', margin:5}}>{this.props.title}</Text>
        </TouchableOpacity>        
      </View>
    );
  }
}

export default Card;
