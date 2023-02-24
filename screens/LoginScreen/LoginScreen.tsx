import { useNavigation } from '@react-navigation/native';
import { Container, TextInput, Text, Form, Button, TextButton, Link } from "./styles"
import { Formik } from 'formik';
import * as yup from 'yup';


// Definindo o esquema de validação usando yup
const LoginSchema = yup.object().shape({
  email: yup.string().email('Email ou senha inválido!').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});


// Definindo o componente LoginScreen
export const LoginScreen = () => {

  // Recebendo a navegação do React Navigation
  const navigation = useNavigation();

  return (
    // Retornando o componente Container, que é um componente estilizado com CSS-in-JS
    <Container>
      
      {/* Renderiza o componente Formik que gerencia o estado do formulário */}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          console.log(values);
          // Navega para a tela "Root" após o login ser realizado com sucesso
          navigation.navigate('Root');

        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
         
          <Form>
          <Text>Login</Text>
            <TextInput
              placeholder="Digite seu e-mail..."
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {errors.email && <Text>{errors.email}</Text>}

            <TextInput
              placeholder="Digite sua senha..."
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errors.password && <Text>{errors.password}</Text>}
            <Button onPress={() => handleSubmit()}>
              <TextButton>Entrar</TextButton>
            </Button>
            <Link onPress={()=> navigation.navigate('Register')}  >
              <Text>
                 Crie uma conta
              </Text>
            </Link>
          </Form>
          )}
      </Formik>

    </Container>
  );
};