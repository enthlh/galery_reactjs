import React from 'react';

import axios from 'axios';

export default class GetData extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  view(){
    return this.state.persons.map((d,i)=>{
        return(
            <div className="wrapper" key={i}>
                <h1 className="Content-title">
                    {d.login}
                </h1>
                <img className="Content-image" src={d.avatar_url} alt="ryu" />
            </div>
        ) 
    })
  }
  render() {
    return this.view()
   }
}