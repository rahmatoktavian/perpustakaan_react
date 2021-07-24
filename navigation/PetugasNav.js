import React from 'react';

//stack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//bottom tab
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTab = createMaterialBottomTabNavigator();

//template
import { Provider as PaperProvider } from 'react-native-paper';
import Theme from '../config/Theme';

//home
import HomeScreen from '../screen/petugas/HomeScreen';

//screen peminjaman: many-many
import PeminjamanListScreen from '../screen/petugas/peminjaman/PeminjamanListScreen';
import PeminjamanBukuListScreen from '../screen/petugas/peminjaman/PeminjamanBukuListScreen';
import PeminjamanBukuInsertScreen from '../screen/petugas/peminjaman/PeminjamanBukuInsertScreen';
import PeminjamanBukuInsertBarcodeScreen from '../screen/petugas/peminjaman/PeminjamanBukuInsertBarcodeScreen';

import PeminjamanInsertMapScreen from '../screen/petugas/peminjaman/PeminjamanInsertMapScreen';

//laporan
import LaporanScreen from '../screen/petugas/laporan/LaporanScreen';
import ChartPieScreen from '../screen/petugas/laporan/ChartPieScreen';
import ReportSummaryScreen from '../screen/petugas/laporan/ReportSummaryScreen';
import ReportDetailScreen from '../screen/petugas/laporan/ReportDetailScreen';

//laporan supabase
import SupaReportSummaryScreen from '../screen/petugas/laporan/SupaReportSummaryScreen';
import SupaReportDetailScreen from '../screen/petugas/laporan/SupaReportDetailScreen';

//screen setting: single table
import SettingScreen from '../screen/petugas/setting/SettingScreen';
import AnggotaListScreen from '../screen/petugas/setting/AnggotaListScreen';
import AnggotaInsertScreen from '../screen/petugas/setting/AnggotaInsertScreen';
import AnggotaUpdateScreen from '../screen/petugas/setting/AnggotaUpdateScreen';

//screen setting: 1-many
import BukuListScreen from '../screen/petugas/setting/BukuListScreen';
import BukuInsertScreen from '../screen/petugas/setting/BukuInsertScreen';
import BukuUpdateScreen from '../screen/petugas/setting/BukuUpdateScreen';

//screen setting: single table supabase
import SupaAnggotaListScreen from '../screen/petugas/setting/SupaAnggotaListScreen';
import SupaAnggotaInsertScreen from '../screen/petugas/setting/SupaAnggotaInsertScreen';
import SupaAnggotaUpdateScreen from '../screen/petugas/setting/SupaAnggotaUpdateScreen';

//screen setting: 1-many  supabase
import SupaBukuListScreen from '../screen/petugas/setting/SupaBukuListScreen';
import SupaBukuInsertScreen from '../screen/petugas/setting/SupaBukuInsertScreen';
import SupaBukuUpdateScreen from '../screen/petugas/setting/SupaBukuUpdateScreen';

export default function PetugasNav() {
  return (
  	<PaperProvider theme={Theme}>
	    <NavigationContainer>
	      	<BottomTab.Navigator
	      		activeColor="white"
	          	inactiveColor="silver"
	          	barStyle={{backgroundColor:Theme.colors.primary}} 
	          	shifting={false}
	        >	
	        	{/*tab home*/}
	        	<BottomTab.Screen 
							name="Home"
							component={HomeScreen}
							options={{
								tabBarLabel: 'Home',
								tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={25} />)
							}}
						/>

						{/*tab peminjaman*/}
						<BottomTab.Screen 
							name="PeminjamanListScreen"
							options={{
								tabBarLabel: 'Peminjaman',
								tabBarIcon: ({color}) => (<MaterialCommunityIcons name="clipboard-list" color={color} size={25} />)
							}}
						>
						{() => (
		              	<Stack.Navigator>
				                <Stack.Screen 
				                  name="PeminjamanListScreen"
				                  component={PeminjamanListScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="PeminjamanBukuListScreen"
				                  component={PeminjamanBukuListScreen}
				                  options={{headerShown:false}} 
				                />
				                <Stack.Screen 
				                  name="PeminjamanBukuInsertScreen"
				                  component={PeminjamanBukuInsertScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="PeminjamanBukuInsertBarcodeScreen"
				                  component={PeminjamanBukuInsertBarcodeScreen}
				                  options={{headerShown:false}}
				                />

				                <Stack.Screen 
				                  name="PeminjamanInsertMapScreen"
				                  component={PeminjamanInsertMapScreen}
				                  options={{headerShown:false}}
				                />
										</Stack.Navigator>
						)}
		        </BottomTab.Screen>

		      	{/*tab laporan*/}
						<BottomTab.Screen 
							name="LaporanScreen"
							options={{
								tabBarLabel: 'Laporan',
								tabBarIcon: ({color}) => (<MaterialCommunityIcons name="file" color={color} size={25} />)
							}}
						>
						{() => (
		              		<Stack.Navigator>
				                <Stack.Screen 
				                  name="LaporanScreen"
				                  component={LaporanScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="ChartPieScreen"
				                  component={ChartPieScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="ReportSummaryScreen"
				                  component={ReportSummaryScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="ReportDetailScreen"
				                  component={ReportDetailScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="SupaReportSummaryScreen"
				                  component={SupaReportSummaryScreen}
				                  options={{headerShown:false}}
				                />
				                <Stack.Screen 
				                  name="SupaReportDetailScreen"
				                  component={SupaReportDetailScreen}
				                  options={{headerShown:false}}
				                />
							</Stack.Navigator>
						)}
		        </BottomTab.Screen>

	        	{/*tab setting*/}
	        	<BottomTab.Screen 
									name="SettingScreen"
									options={{
										tabBarLabel: 'Setting',
										tabBarIcon: ({color}) => (<MaterialCommunityIcons name="cog" color={color} size={25} />)
									}}
								>
								{() => (
				              		<Stack.Navigator>
				              			<Stack.Screen 
						                  name="SettingScreen"
						                  component={SettingScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="AnggotaListScreen"
						                  component={AnggotaListScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="AnggotaInsertScreen"
						                  component={AnggotaInsertScreen}
						                  options={{headerShown:false}} 
						                />
						                <Stack.Screen 
						                  name="AnggotaUpdateScreen"
						                  component={AnggotaUpdateScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="BukuListScreen"
						                  component={BukuListScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="BukuInsertScreen"
						                  component={BukuInsertScreen}
						                  options={{headerShown:false}} 
						                />
						                <Stack.Screen 
						                  name="BukuUpdateScreen"
						                  component={BukuUpdateScreen}
						                  options={{headerShown:false}}
						                />


						                <Stack.Screen 
						                  name="SupaAnggotaListScreen"
						                  component={SupaAnggotaListScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="SupaAnggotaInsertScreen"
						                  component={SupaAnggotaInsertScreen}
						                  options={{headerShown:false}} 
						                />
						                <Stack.Screen 
						                  name="SupaAnggotaUpdateScreen"
						                  component={SupaAnggotaUpdateScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="SupaBukuListScreen"
						                  component={SupaBukuListScreen}
						                  options={{headerShown:false}}
						                />
						                <Stack.Screen 
						                  name="SupaBukuInsertScreen"
						                  component={SupaBukuInsertScreen}
						                  options={{headerShown:false}} 
						                />
						                <Stack.Screen 
						                  name="SupaBukuUpdateScreen"
						                  component={SupaBukuUpdateScreen}
						                  options={{headerShown:false}}
						                />
									</Stack.Navigator>
								)}
          </BottomTab.Screen>

	    	</BottomTab.Navigator>
	    </NavigationContainer>
    </PaperProvider>
  );
}