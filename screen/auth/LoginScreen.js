import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Provider as PaperProvider, Appbar, Button, TextInput, Portal, Modal, ActivityIndicator } from 'react-native-paper';
import { showMessage } from "react-native-flash-message";

import BaseUrl from '../../config/BaseUrl';
import Theme from '../../config/Theme';
import storeApp from '../../config/storeApp';
import Loading from '../../component/Loading';

class LoginScreen extends Component {

  constructor(props) {
      super(props);

      //redux variable
      this.state = storeApp.getState();
      storeApp.subscribe(()=>{
        this.setState(storeApp.getState());
      });

      this.state = {
        ...this.state,
        username: '',
        password: '',
        isLoading: false,
      };
  }

  componentDidMount() {
  }

  //memanggil api untuk menyimpan data
  onLogin() {
      this.setState({isLoading:true});

      //api url
      let apiurl = BaseUrl()+'/auth/login';

      //menyiapkan data untuk dikirim ke server api
      const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          })
      };

      //memanggil server api
      fetch(apiurl, options)
      .then(response => {return response.json()})

      //response dari api
      .then(responseData => {
          this.setState({isLoading:false});

          //menangkap response api
          let status = responseData.status;

          //jika login valid
          if(status == true) {

            //response api (data user)
            let data = responseData.data;

            showMessage({
  	          message: responseData.message,
              type: 'success',
  	          icon: 'success'
  	        });

            //update redux
            storeApp.dispatch({
                type: 'LOGIN',
                payload: { isLogin:true, user_type:data.type, nim:data.nim, petugas_id:data.petugas_id }
            });

          //jika login tidak valid
          } else {
            showMessage({
  	          message: responseData.message,
              type: 'danger',
  	          icon: 'danger'
  	        });
          }
      })
  }

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Content title="Login" />
          </Appbar.Header>

          <TextInput
            label="Username"
            value={this.state.username}
            onChangeText={text => this.setState({username:text})}
            style={{marginHorizontal:10}}
          />

          <TextInput
            label="Password"
            value={this.state.password}
            onChangeText={text => this.setState({password:text})}
            secureTextEntry={true}
            style={{marginHorizontal:10}}
          />

          <Button
              mode="contained"
              icon="login"
              onPress={() => this.onLogin()}
              style={{margin:10}}
          >
            Login
          </Button>

          <Button
              mode="outlined"
              icon="login"
              onPress={() => this.props.navigation.navigate('RegisterAnggotaScreen')}
              style={{margin:10}}
          >
            Register Anggota
          </Button>

          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}

export default LoginScreen;
