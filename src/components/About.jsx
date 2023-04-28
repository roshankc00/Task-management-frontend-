import styled from "styled-components"

const About = () => {

  return (
    <>
    <Map>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4792171807862!2d87.29016991545319!3d26.79286577168836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41f913fa4eb7%3A0x15e338dfb99df2a!2sBistro%20Restro%20%26%20Pool%20House!5e0!3m2!1sen!2snp!4v1677017170884!5m2!1sen!2snp"
        width="1600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </Map>

    <Wrapper>

      <Sideimage src="https://media.gettyimages.com/id/1168122629/photo/todo.jpg?s=612x612&w=gi&k=20&c=Ap18uB6Fv1_3z1vokZeX_Bv9JHNAEKjHncJ39yrBKjY=">        
      </Sideimage>
      <Content>
           <Header>
            About WebApp
           </Header>
           <Text>
              I have made this Using React (contextapi,styledComponent) as frontend and Nodejs and mongoDb as the Backend. 
              <p>
                Basically we have authentication Add Update Delete and Get all todos features in this page 
              </p>
              <p> 
                 i havent hosted the backend so you need to run the backend and the front end together in order to get the features 
              </p>
              <div>
                Thanks have a good day 
              </div>
                              
           </Text>
      </Content>
    </Wrapper>
      <Footer>
        &copy; roshankc8848@gmail.com
      </Footer>
    </>
    
    
  )
}

export default About 

const Map=styled.div`
  margin-top: 10px;
  padding: 30px;
`



const Wrapper=styled.div`
display: flex;
gap: 50px;
width: 100%;
padding: 50px;
`
const Sideimage=styled.img`
width: 50%;
height: 500px;
margin-top: 50px;
border-radius: 10px;
box-shadow: 10px 10px 10px rgba(0,0,0,0.4);
transform: scale(1);
transition: transform 250ms;
&:hover{
  transform: scale(1.05);
}

  

`
const Content =styled.div`
  margin-top: 50px;
  padding: 20px;
  letter-spacing: 1px;
  line-height: 20px;

`

const Header=styled.h1`
font-size: 30px;
font-weight: bolder;
  
`
const Text=styled.div`
  
`

const Footer=styled.footer`
background-color: black;
color: white;
padding: 30px;
text-align: center;
  
`
const FooterText=styled.p`
  text-align: center;
`
  

// aBFc4mt1AiItQftU

// mongodb+srv://rohitkc8848:aBFc4mt1AiItQftU@cluster0.lkxbuza.mongodb.net/todos?//////retryWrites=true&w=majority