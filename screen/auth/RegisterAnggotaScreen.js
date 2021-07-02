import React, { Component } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, Button, TextInput, HelperText, Portal, Modal, ActivityIndicator } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import BaseUrl from '../../config/BaseUrl';
import Theme from '../../config/Theme';
import storeApp from '../../config/storeApp';
import Loading from '../../component/Loading';

class RegisterAnggotaScreen extends Component {

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
        nim: '',
        nama: '',
        jurusan: 'Teknik Informatika',

        jurusanList: [],
        isLoading: false,
      };
  }

  componentDidMount() {
    let jurusanList = [
                        {id: 'Teknik Informatika',nama: 'Teknik Informatika'},
                        {id:'Sistem Informasi', nama:'Sistem Informasi'},
                      ]

    this.setState({jurusanList:jurusanList});
  }

  //memanggil api untuk menyimpan data
  onRegister() {
      this.setState({isLoading:true});

      //api url
      let apiurl = BaseUrl()+'/auth/reg_anggota';

      //menyiapkan data untuk dikirim ke server api
      const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan,
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
            
            //menampilkan response message
            Alert.alert(
              "Pemberitahuan",
              responseData.message,
              [
                { text: "Login Sekarang", onPress: () => this.onLogin(this.state.nim) },
                { text: "Nanti aja", onPress: () => this.props.navigation.navigate('LoginScreen') }
              ]
            );

          //jika login tidak valid
          } else {
            alert(responseData.message)
          }
      })
  }

  onLogin(nim) {
    //update redux
    storeApp.dispatch({
        type: 'LOGIN',
        payload: { isLogin:true, user_type:'anggota', nim:nim, petugas_id:null }
    });
  }

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Action icon="arrow-left" onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Register Anggota" />
          </Appbar.Header>

          <ScrollView>
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

          <TextInput
            label="NIM"
            value={this.state.nim}
            onChangeText={text => this.setState({nim:text})}
            style={{marginHorizontal:10}}
          />

          <TextInput
            label="Nama"
            value={this.state.nama}
            onChangeText={text => this.setState({nama:text})}
            style={{marginHorizontal:10}}
          />

          <HelperText style={{marginHorizontal:10, marginTop:10}}>Jurusan</HelperText>
            <Picker
              selectedValue={this.state.jurusan}
              onValueChange={(itemValue, itemIndex) => this.setState({jurusan:itemValue})}
              style={{margin:10}}
              mode='dropdown'
            >
              {/*loop data state*/}
              {this.state.jurusanList.map((row,key) => (
                <Picker.Item key={key} label={row.nama} value={row.id} />
              ))}
              {/*end loop*/}
            </Picker>

          <Button 
              mode="contained" 
              icon="check" 
              onPress={() => this.onRegister()}
              style={{margin:10}}
          >
            Register
          </Button>
          </ScrollView>

          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}

export default RegisterAnggotaScreen;