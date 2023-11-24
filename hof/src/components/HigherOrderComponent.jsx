import React, { Component } from 'react'

export class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  render() {
    const data=this.state.userData;
    return (
      <div>
        <h1>Display all items</h1>
        {data.map((user)=>(
            <div style={{display:"flex", color:"blue", marginBottom:"0px"}} key={user.id}>
                <p>id:{user.id}</p>&nbsp; &nbsp; &nbsp;
                <p>name:{user.name}</p>&nbsp; &nbsp; &nbsp;
                <p>user type:{user.user_type}</p>&nbsp; &nbsp; &nbsp;
            </div>
        ))}

        <h1>Display based on user type</h1>
        {data.filter((user)=>user.user_type==="Designer")
        .map((filteruser)=>(
            <div style={{display:"flex" ,color:"blue"}} key={filteruser.id}>
                 <p>id:{filteruser.id}</p>&nbsp; &nbsp; &nbsp;
                <p>name:{filteruser.name}</p>&nbsp; &nbsp; &nbsp;
                <p>user type:{filteruser.user_type}</p>&nbsp; &nbsp; &nbsp;
            </div>
        ))
        }

        <h1>Filter all data whose name starting with j letter</h1>
        {
            data.filter((user)=>user.name.startsWith('J'))
            .map((filteruser)=>(
                <div style={{display:"flex" ,color:"blue"}} key={filteruser.id}>
                 <p>id:{filteruser.id}</p>&nbsp; &nbsp; &nbsp;
                <p>name:{filteruser.name}</p>&nbsp; &nbsp; &nbsp;
                <p>user type:{filteruser.user_type}</p>&nbsp; &nbsp; &nbsp;
            </div>
            ))
        }

        <h1>Filter all the data based on age greater than 28 and age less than and equal to 50</h1>
        {
            data.filter((user)=>user.age>28 && user.age<=50)
            .map((filteruser)=>(
                <div style={{display:"flex" ,color:"blue"}} key={filteruser.id}>
                 <p>id:{filteruser.id}</p>&nbsp; &nbsp; &nbsp;
                <p>name:{filteruser.name}</p>&nbsp; &nbsp; &nbsp;
                <p>user type:{filteruser.user_type}</p>&nbsp; &nbsp; &nbsp;
            </div>

            ))
        }

        <h1>Total experience of the designer</h1>
        {
            data.filter((user)=>user.user_type==="Designer")
            .reduce((totalExperience,designer)=>totalExperience+designer.years,0)
        }
        </div>
    )
  }
}

export default HigherOrderComponent;