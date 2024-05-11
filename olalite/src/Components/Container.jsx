import Submitted from './Submitted';
import { v4 } from 'uuid';
import Question from './Question';
import React, { Component } from 'react'
import Details from './Details';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
// if (firebase.app.length<0) {
    const app = initializeApp({
        apiKey: "AIzaSyDufZidEt5roqhW9_03eM_g6-jhXDDnVtc",
        authDomain: "olalite-93576.firebaseapp.com",
        databaseURL: "https://olalite-93576-default-rtdb.firebaseio.com",
        projectId: "olalite-93576",
        storageBucket: "olalite-93576.appspot.com",
        messagingSenderId: "168490161104",
        appId: "1:168490161104:web:757a94048849367b8f5fd5"
    });
// }


export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: v4(),
            name: null,
            email: null,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null,
            },
            isSubmitted: false,
        }
        
    }
    questionSubmitHandler = (event) => {
        const database = getDatabase(app);
        const questions = {
            //  q1:event.target.q1.value,
            q2: event.target.q2.value,
            q3: event.target.q3.value,
            other: event.target.other.value,
        }

        questions.q1 = event.target.q1.value;
        event.preventDefault();

        this.setState({ questions, isSubmitted: true }, () => {
            console.log(this.state);
            set(ref(database, 'Registration/' + this.state.id), {
                name: this.state.name,
                email: this.state.email,
                questions: this.state.questions,
            });
        });

    }
    detailSubmitHandler = (event) => {
        event.preventDefault();
        // alert("Hey");
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({ name, email }, () => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div className='container-fluid'><div className='container card mt-2'><h1 className='text-center text-primary'>Container</h1></div>
                {
                    this.state.name == null && this.state.email == null ?
                        (<Details submit={this.detailSubmitHandler} />) : this.state.isSubmitted == false ?
                            (<Question submit={this.questionSubmitHandler} />) : (<Submitted />)
                    // <Question />
                    // <Details />
                }
            </div>
        )
    }
}

export default Container