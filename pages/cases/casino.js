import React from "react";
import Head from 'next/head';

class Case extends React.Component{
    render() {
        return(<div>
            <h1>
                Ахахахаахахха помнишь, спроси у меня про подарок!
            </h1>
        </div>)
    }
}


export default class Casino extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            true_passwords: ['брил123', 'Брил123', 'БРИЛ123', 'BRIL123', 'Bril123', 'bril123']
        }
    }

    render(){
        const login =
            <div className="login">
                <Head>
                    <title>Подэрок</title>
                </Head>
                <label htmlFor="inp" className="inp">
                    <input type="password" id="inp" placeholder="Пароль в 244 комнату" pattern=".{6,}" onChange={(e) => {
                        if(this.state.true_passwords.includes(e.target.value)){
                            this.setState({
                                login: true,
                            })
                        }
                    }}/>
                    <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"/>
                    </svg>
                    <svg width="14px" height="12px" viewBox="0 0 14 12" className="check">
                        <path d="M1 7 5.5 11 L13 1"/>
                    </svg>
                </label>
            </div>;

        return(this.state.login ? <Case /> : login)
    }
}