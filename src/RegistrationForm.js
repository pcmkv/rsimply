import React, { Component } from 'react';
import InputElem from './InputElem';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            userNameError: '',
            userPassword:'',
            userPasswordError:'',
            userEmail:'',
            userEmailError:'',
            userConfirmPassword:'',
            userConfirmPasswordError:"",
            emails:[]
        };
    }


    change = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log("Change state",this.state);
    };

    validate = () => {
        let isError = false;
        const errors = {
            userNameError: "",
            userPasswordError:"",
            userEmailError: "",
            userConfirmPasswordError:""

        };

        console.log(this.state.userName.length );

        if (this.state.userName.length < 5) {
            isError = true;
            errors.userNameError = "Username 5 characters long";
        }

        if (this.state.userEmail.indexOf("@") === -1) {
            isError = true;
            errors.userEmailError = "Requires valid email";
        }

        if (this.state.userPassword.length < 5) {
            isError = true;
            errors.userPasswordError = "Password 5 characters long";
        }


        if(this.state.userConfirmPassword !== this.state.userPassword || this.state.userConfirmPassword === ""){
            isError = true;
            errors.userConfirmPasswordError = "Password don't confirm";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        console.log("THIS>STATE",this.state);

        return isError;
    };


    onSubmit = (e) =>{
        e.preventDefault();
        const err = this.validate();
        console.log("Form Error",err);
        if(!err){
            let userInfo = {
                name:this.state.userName,
                email:this.state.userEmail,
                password:this.state.userPassword
            };

            console.log("USER INFO",userInfo);

            this.setState({
                userName:'',
                userPassword:'',
                userNameError: '',
                userPasswordError:'',
                userEmailError:''
            });


        }

        console.log("this.state.arrayEmail",this.state.emails);

    };



    addEmail = (e) =>{
        e.preventDefault();
        this.setState({ emails: [ ...this.state.emails, '' ]});
    };

    deleteEmailInput = (index,e)=> {
        e.preventDefault();
        console.log(e);
        console.log("index",index);
        const inputs = this.state.emails;
        inputs.splice(index,1);
        this.setState({emails:inputs});
    };

    render() {

        const nameEmail = {
            display:'block'
        };

        const styleInput = {
            display: 'block',
            marginBottom: '15px',
            marginTop: '15px'
        };

        const errorStyle = {
            color:'red',
            fontWeight:'bold',
            marginBottom:'15px',
            display:'block'
        };

        return (
            <form onSubmit={this.onSubmit.bind(this)} className="someClassName">
                <label htmlFor="userName">Name</label>
                <input
                    className="form-control"
                    onChange={e => this.change(e)}
                    style={styleInput}
                    ref="userName"
                    name="userName"
                />
                <span style={errorStyle}>{this.state.userNameError}</span>
                <label htmlFor="userPassword">Password</label>
                <input
                    className="form-control"
                    style={styleInput}
                    onChange={e => this.change(e)}
                    name="userPassword"
                    ref="userPassword"
                />
                <span style={errorStyle}>{this.state.userPasswordError}</span>
                <label htmlFor="userPassword">RePassword</label>
                <input
                    className="form-control"
                    style={styleInput}
                    onChange={e => this.change(e)}
                    name="userConfirmPassword"
                    ref="userConfirmPassword"
                />
                <span style={errorStyle}>{this.state.userConfirmPasswordError}</span>
                <label htmlFor="userEmail">Email</label>
                <input
                    className="form-control"
                    style={styleInput}
                    onChange={e => this.change(e)}
                    name="userEmail"
                    ref="userEmail"
                />
                <span style={errorStyle}>{this.state.userEmailError}</span>
                <button  onClick={e => this.addEmail(e)} >Add Email</button>

                {this.state.emails.map((email, index) => {
                    return (
                        <div key={index}>
                            {email}
                            <input className="nameEmail"  name={`name${index}`} type="text" onChange={e => this.change(e)}/>
                            <button onClick={this.deleteEmailInput.bind(this,index)} >-</button>
                        </div>
                    )
                })
                }
                {/*  <InputElem type="text" name="userName" ref="userName" handlerFromParant={this.handleData}/>
                <InputElem type="password" name="userPassword" ref="userPassword"/> */}
                {/*this.state.arrayEmail*/}

                <button>Send</button>
            </form>
        );
    }
}

export default RegistrationForm;
