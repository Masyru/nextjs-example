import React from "react";

function Post(props){
        return(
            <div className="container-fluid">
                <div className="blog-card">
                    <div className="card-body">
                        <h3 className="title">{props.title}</h3>
                        <p className="paragraph">{props.text}</p>
                    </div>
                </div>
            </div>
        );
}

export default class Wishes extends React.Component{
    render(){
        let wish =
            <div className={'posts'}>
                <Post key={1} title={'Будь счастливым'} text={`
                    Будь всегда счастливым, тогда вокруг тебя никогда не будет грустных. ТЫ заряжаешь других только позитивом.
                `}/>
                <Post key={2} title={'Радуйся'} text={`
                    Радость - твоя стихия, которой Ты управляешь!
                `}/>
                <Post key={3} title={'Грусти'} text={`
                    Во время грусти у тебя есть время подумать над всем, обдумай свои проблемы и прими решение.
                `}/>
                <Post key={4} title={'Трудись'} text={`
                    Без труда не бывает успеха, я уверен. ТЫ сможешь добиться всего.
                `}/>
                <Post key={5} title={'Будь смелым'} text={`
                    Будь смелым, ведь для старта всегда не хватает именно этого.
                `}/>
                <Post key={6} title={'Спасибо'} text={`
                    Спасибо тебе за дружбу, за все эмоции и поддержку. Она для меня много значит.
                `}/>
            </div>

        return(wish)
    }
}