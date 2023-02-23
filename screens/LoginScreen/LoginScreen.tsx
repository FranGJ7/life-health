import { Container, Label, TextInput, Text, Form, Button, TextButton } from "./styles"





export const LoginScreen = () => {
  return (
    <Container>


      <Text>
        Login
      </Text>

     <Form>
      <Label>Email:</Label>
      <TextInput 
        placeholder="Digite seu e-mail..."
      />


      <Label>Senha:</Label>
      <TextInput
        placeholder="Digite sua senha..."
      />


      <Button>
        <TextButton>
          Entra
        </TextButton> 
      </Button>
      </Form>

    </Container>
  )
} 