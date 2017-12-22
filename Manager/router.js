import React from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, height: 100 }}>
      <Stack key='root'>
        <Scene key='login' component={LoginForm} title="Please Login" />
        <Scene
          key='employeeList'
          component={EmployeeList}
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          title='Employee List' />

        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
        />
      </Stack>
    </Router>
  );
};



export default RouterComponent;
