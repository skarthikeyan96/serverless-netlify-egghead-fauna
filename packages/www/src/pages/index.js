import React,{useEffect} from 'react'
import { Container, Heading, Button } from '@theme-ui/components';
import netlifyIdentity from 'netlify-identity-widget'



const App = () => {

    useEffect(() => {
        // running it on the client not on the server
        netlifyIdentity.init({})    
    })

    const handleLogin = () => {
        netlifyIdentity.open()
    }

    return(
       <Container>
            <Heading as="h1"> Demo </Heading>
            <Button onClick={handleLogin}> Login </Button>
            <Button onClick={() => console.log(netlifyIdentity.currentUser())}> Log User</Button>
       </Container>
    )
}

export default App;