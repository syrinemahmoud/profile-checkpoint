import React,{Component} from 'react';
import './button.css';


export default class Sarra  extends Component{

  state =
  {
    nom: 'Name',
    img: '/user.jpg',
    content: 'Weclome !!!!!!'
  }



  render()
  {

    return (
      <div>
        
            
            <button className="button" onClick={()=>{this.setState({nom:'Sarra',img:'/user1.jpg', content:'Sarra is nice !!'})}}>Sarra</button>
              <button className="button" onClick={()=>{this.setState({nom:'Amine',img:'/user3.jpg', content:'Amine is funny !'})}} >Amine</button>
              <button className="button" onClick={()=>{this.setState({nom:'Nour',img:'/user2.jpg', content:'Nour is beautiful !!'})}}>Nour</button>
              <h1 style={{ paddingLeft :10 , marginTop : 30 , marginLeft : 450 , marginBottom : 50 , }}>{this.state.nom}</h1>
              
                <img src={this.state.img}  style={{ width: 150 , height : 200 , margintop : 300 , marginLeft : 400}}></img>
                
                
                <p style={{  margintop:80,marginLeft:'30%'}}>{this.state.content}</p>
                
                
            
            </div>
  
  )}
  }