import Head from "next/head";
import React from "react";
import util from "../styles/utils.module.css";

class Footer extends React.Component{
    render() {
        let footer =
            <footer>

            </footer>;

        return(footer)
    }
}


class Gallery extends React.Component{
        constructor(props) {
                super(props);
        }

        componentDidMount(){
                this.fillTheImages()
        }

        fillTheImages(){
                const items = document.querySelector(".grid-layout").childNodes
                items.forEach((obj, i) => {
                        obj.style = `background-image: url('/images/lev/${i}.jpg'); background-size: cover; background-position: center center;`
                        if (i === 48){
                                obj.style = `background-image: url('/images/lev/${i}.jpg'); background-size: auto 100%; background-position: center center;`
                        } else if (i === 22) {
                                obj.style = `background-image: url('/images/lev/${i}.jpg'); background-size: auto 100%; background-position: center center; background-repeat: no-repeat; background-color: #fff`
                        }
                })
        }

        render(){
                const gallery =
                    <div className="grid-layout">
                            <div className="grid-item grid-item-1"></div>
                            <div className="grid-item grid-item-2"></div>
                            <div className="grid-item span-3 grid-item-3"></div>
                            <div className="grid-item grid-item-4"></div>
                            <div className="grid-item span-2 grid-item-5"></div>
                            <div className="grid-item grid-item-6"></div>
                            <div className="grid-item grid-item-7"></div>
                            <div className="grid-item grid-item-8"></div>
                            <div className="grid-item grid-item-9"></div>
                            <div className="grid-item span-2 grid-item-10"></div>
                            <div className="grid-item grid-item-11"></div>
                            <div className="grid-item grid-item-12"></div>
                            <div className="grid-item span-2 grid-item-13"></div>
                            <div className="grid-item grid-item-14"></div>
                            <div className="grid-item grid-item-15"></div>
                            <div className="grid-item grid-item-16"></div>
                            <div className="grid-item span-3 grid-item-17"></div>
                            <div className="grid-item grid-item-18"></div>
                            <div className="grid-item grid-item-19"></div>
                            <div className="grid-item grid-item-20"></div>
                            <div className="grid-item span-2 grid-item-21"></div>
                            <div className="grid-item grid-item-22"></div>
                            <div className="grid-item grid-item-23"></div>
                            <div className="grid-item grid-item-24"></div>
                            <div className="grid-item grid-item-25"></div>
                            <div className="grid-item span-3 grid-item-26"></div>
                            <div className="grid-item grid-item-27"></div>
                            <div className="grid-item grid-item-28"></div>
                            <div className="grid-item grid-item-29"></div>
                            <div className="grid-item grid-item-30"></div>
                            <div className="grid-item grid-item-31"></div>
                            <div className="grid-item grid-item-32"></div>
                            <div className="grid-item grid-item-33"></div>
                            <div className="grid-item grid-item-34"></div>
                            <div className="grid-item grid-item-35"></div>
                            <div className="grid-item grid-item-36"></div>
                            <div className="grid-item grid-item-37"></div>
                            <div className="grid-item grid-item-38"></div>
                            <div className="grid-item grid-item-39"></div>
                            <div className="grid-item span-3 grid-item-40"></div>
                            <div className="grid-item grid-item-41"></div>
                            <div className="grid-item grid-item-42"></div>
                            <div className="grid-item grid-item-43"></div>
                            <div className="grid-item grid-item-44">i</div>
                            <div className="grid-item span-3 grid-item-45"></div>
                            <div className="grid-item grid-item-46"></div>
                            <div className="grid-item grid-item-47"></div>
                            <div className="grid-item grid-item-48"></div>
                            <div className="grid-item grid-item-49"></div>
                            <div className="grid-item grid-item-50"></div>
                    </div>

                return(gallery)
        }
}


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


class Wishes extends React.Component{
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


const confetti =
    <div className="confeti-app">
        <div className="confetti-149"></div>
        <div className="confetti-148"></div>
        <div className="confetti-147"></div>
        <div className="confetti-146"></div>
        <div className="confetti-145"></div>
        <div className="confetti-144"></div>
        <div className="confetti-143"></div>
        <div className="confetti-142"></div>
        <div className="confetti-141"></div>
        <div className="confetti-140"></div>
        <div className="confetti-139"></div>
        <div className="confetti-138"></div>
        <div className="confetti-137"></div>
        <div className="confetti-136"></div>
        <div className="confetti-135"></div>
        <div className="confetti-134"></div>
        <div className="confetti-133"></div>
        <div className="confetti-132"></div>
        <div className="confetti-131"></div>
        <div className="confetti-130"></div>
        <div className="confetti-129"></div>
        <div className="confetti-128"></div>
        <div className="confetti-127"></div>
        <div className="confetti-126"></div>
        <div className="confetti-125"></div>
        <div className="confetti-124"></div>
        <div className="confetti-123"></div>
        <div className="confetti-122"></div>
        <div className="confetti-121"></div>
        <div className="confetti-120"></div>
        <div className="confetti-119"></div>
        <div className="confetti-118"></div>
        <div className="confetti-117"></div>
        <div className="confetti-116"></div>
        <div className="confetti-115"></div>
        <div className="confetti-114"></div>
        <div className="confetti-113"></div>
        <div className="confetti-112"></div>
        <div className="confetti-111"></div>
        <div className="confetti-110"></div>
        <div className="confetti-109"></div>
        <div className="confetti-108"></div>
        <div className="confetti-107"></div>
        <div className="confetti-106"></div>
        <div className="confetti-105"></div>
        <div className="confetti-104"></div>
        <div className="confetti-103"></div>
        <div className="confetti-102"></div>
        <div className="confetti-101"></div>
        <div className="confetti-100"></div>
        <div className="confetti-99"></div>
        <div className="confetti-98"></div>
        <div className="confetti-97"></div>
        <div className="confetti-96"></div>
        <div className="confetti-95"></div>
        <div className="confetti-94"></div>
        <div className="confetti-93"></div>
        <div className="confetti-92"></div>
        <div className="confetti-91"></div>
        <div className="confetti-90"></div>
        <div className="confetti-89"></div>
        <div className="confetti-88"></div>
        <div className="confetti-87"></div>
        <div className="confetti-86"></div>
        <div className="confetti-85"></div>
        <div className="confetti-84"></div>
        <div className="confetti-83"></div>
        <div className="confetti-82"></div>
        <div className="confetti-81"></div>
        <div className="confetti-80"></div>
        <div className="confetti-79"></div>
        <div className="confetti-78"></div>
        <div className="confetti-77"></div>
        <div className="confetti-76"></div>
        <div className="confetti-75"></div>
        <div className="confetti-74"></div>
        <div className="confetti-73"></div>
        <div className="confetti-72"></div>
        <div className="confetti-71"></div>
        <div className="confetti-70"></div>
        <div className="confetti-69"></div>
        <div className="confetti-68"></div>
        <div className="confetti-67"></div>
        <div className="confetti-66"></div>
        <div className="confetti-65"></div>
        <div className="confetti-64"></div>
        <div className="confetti-63"></div>
        <div className="confetti-62"></div>
        <div className="confetti-61"></div>
        <div className="confetti-60"></div>
        <div className="confetti-59"></div>
        <div className="confetti-58"></div>
        <div className="confetti-57"></div>
        <div className="confetti-56"></div>
        <div className="confetti-55"></div>
        <div className="confetti-54"></div>
        <div className="confetti-53"></div>
        <div className="confetti-52"></div>
        <div className="confetti-51"></div>
        <div className="confetti-50"></div>
        <div className="confetti-49"></div>
        <div className="confetti-48"></div>
        <div className="confetti-47"></div>
        <div className="confetti-46"></div>
        <div className="confetti-45"></div>
        <div className="confetti-44"></div>
        <div className="confetti-43"></div>
        <div className="confetti-42"></div>
        <div className="confetti-41"></div>
        <div className="confetti-40"></div>
        <div className="confetti-39"></div>
        <div className="confetti-38"></div>
        <div className="confetti-37"></div>
        <div className="confetti-36"></div>
        <div className="confetti-35"></div>
        <div className="confetti-34"></div>
        <div className="confetti-33"></div>
        <div className="confetti-32"></div>
        <div className="confetti-31"></div>
        <div className="confetti-30"></div>
        <div className="confetti-29"></div>
        <div className="confetti-28"></div>
        <div className="confetti-27"></div>
        <div className="confetti-26"></div>
        <div className="confetti-25"></div>
        <div className="confetti-24"></div>
        <div className="confetti-23"></div>
        <div className="confetti-22"></div>
        <div className="confetti-21"></div>
        <div className="confetti-20"></div>
        <div className="confetti-19"></div>
        <div className="confetti-18"></div>
        <div className="confetti-17"></div>
        <div className="confetti-16"></div>
        <div className="confetti-15"></div>
        <div className="confetti-14"></div>
        <div className="confetti-13"></div>
        <div className="confetti-12"></div>
        <div className="confetti-11"></div>
        <div className="confetti-10"></div>
        <div className="confetti-9"></div>
        <div className="confetti-8"></div>
        <div className="confetti-7"></div>
        <div className="confetti-6"></div>
        <div className="confetti-5"></div>
        <div className="confetti-4"></div>
        <div className="confetti-3"></div>
        <div className="confetti-2"></div>
        <div className="confetti-1"></div>
        <div className="confetti-0"></div>
    </div>;


class Intro extends React.Component{
        render(){
                const intro =
                    <div className={util.intro}>
                            <div className={util.intro__text}>
                                    <h2>С днем рождения, Лева <img src="/images/balloon.png" width='40px' height='40px' /></h2>
                                    <a href='/#first'>
                                            Go. Around. Flex.
                                    </a>
                            </div>
                    </div>;

                return(intro)
        }
}


export default class Birth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            confetti: false,
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({confetti: true}), 1000);
        setTimeout(() => this.setState({confetti: false}), 5000)
    }

    render() {
        let app =
            <div style={{
                width: '100%',
                height:  '100%',
            }}>
                <Head>
                    <title>С днем рождения, Лев ! ! ! </title>
                    <meta property="og:title" content="С днем рождения, Лев!!!" key="title" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                </Head>
                { this.state.confetti ? confetti : null }
                <Intro />
                <div id="first"/>
                <h2 style={{
                    fontWeight: '300',
                }}>Пожелания</h2>
                <Wishes />
                <h2>Воспоминания</h2>
                <Gallery />
            </div>;

        return (app);
    }
}