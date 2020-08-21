import Head from "next/head";
import { confetti } from "../components/Confetti";
import Intro from '../components/Intro';
import Gallery from "../components/Gallery";
import Wishes from "../components/Wishes";


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